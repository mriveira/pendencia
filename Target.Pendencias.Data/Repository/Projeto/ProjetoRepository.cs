using Common.Domain.Base;
using Common.Orm;
using Target.Pendencias.Data.Context;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using Target.Pendencias.Domain.Interfaces.Repository;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System;
using Common.Domain.Model;
using Target.Pendencias.Enums;
using Common.Domain;

namespace Target.Pendencias.Data.Repository
{
    public class ProjetoRepository : Repository<Projeto>, IProjetoRepository
    {

        private readonly CurrentUser _user;
        public ProjetoRepository(DbContextTarget ctx, CurrentUser user) : base(ctx)
        {
            this._user = user;
        }


        public IQueryable<Projeto> GetBySimplefilters(ProjetoFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
                                .WithBasicFilters(filters)
                                .WithCustomFilters(filters)
                                .WithLimitTenant(this._user);
            return querybase;
        }

        public async Task<Projeto> GetById(ProjetoFilter model)
        {
            var _projeto = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_ => _.ProjetoId == model.ProjetoId));

            return _projeto;
        }

        public async Task<IEnumerable<dynamic>> GetDataItem(ProjetoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ProjetoId,
                Name = _.Nome

            }));

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(ProjetoFilter filters)
        {

            var pendencias = await this.ToListAsync(this.ctx.Set<Pendencia>()
                .Select(_ => new
                {
                    projetoId = _.ProjetoId,
                    Pontos = _.PontosEstimados,
                    Horas = _.TempoEstimado,
                    DataConclusao = _.DataConclusao,
                    FluxoTrabalhoTipoId = _.FluxoTrabalhoStatus.FluxoTrabalhoTipoId
                }));

            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ProjetoId,
                Nome = _.Nome,
                Descricao = _.Descricao,
                Visao = _.Visao,
                Inicio = _.Inicio,
                Fim = _.Fim,
                Time = _.CollectionPendencia.Select(__ => __.Usuario.Nome).Distinct(),
                HorasReais = _.CollectionPendencia.SelectMany(__ => __.CollectionPendenciaTempos)

            }));

            var temp = querybase.Select(_ => new
            {

                Id = _.Id,
                Nome = _.Nome,
                Descricao = _.Descricao,
                Visao = _.Visao,
                Inicio = _.Inicio,
                Fim = _.Fim,
                Time = _.Time,
                TotalPendencias = pendencias.Where(__ => __.projetoId == _.Id).Where(__ => __.FluxoTrabalhoTipoId == (int)EFluxoTrabalhoTipo.Aberto).Count(),
                TotalConcluidas = pendencias.Where(__ => __.projetoId == _.Id).Where(__ => __.FluxoTrabalhoTipoId == (int)EFluxoTrabalhoTipo.Concluido).Count(),
                TotalPontos = pendencias.Where(__ => __.projetoId == _.Id).Select(__ => __.Pontos).Sum(),
                TotalHoras = pendencias.Where(__ => __.projetoId == _.Id).Select(__ => __.Horas).Sum(),
                TotalHorasReais = _.HorasReais.Sum(__ => __.TempoDecorrido),
            });

            return temp.Select(_ => new
            {
                Id = _.Id,
                Nome = _.Nome,
                Descricao = _.Descricao,
                Visao = _.Visao,
                Inicio = _.Inicio,
                Fim = _.Fim,
                Time = _.Time,
                TotalPendencias = _.TotalPendencias,
                TotalConcluidas = _.TotalConcluidas,
                TotalPontos = _.TotalPontos,
                TotalHoras = _.TotalHoras,
                TotalHorasReais = _.TotalHorasReais,
                BuningDown = this.BuningDown(_.Inicio, _.Fim, pendencias.Where(__ => __.projetoId == _.Id))

            });

        }

        private dynamic BuningDown(DateTime? inicio, DateTime? fim, IEnumerable<dynamic> pendencias)
        {

            if (inicio.IsNotNull() && fim.IsNotNull())
            {
                var dias = (int)fim.Value.TomorrowZeroHours().Subtract(inicio.Value.TodayZeroHours()).TotalDays;
                var totalPendencias = pendencias.Count();
                var concluidosDatas = pendencias.Where(__ => __.DataConclusao != null).GroupBy(__ => __.DataConclusao)
                .Select(_ => new
                {
                    DataConclusao = _.Key,
                    TotalConcluido = _.Count()
                });


                var pendenciasRestantes = new List<dynamic>();
                var _totalConcluido = 0;
                for (int dia = 0; dia <= dias; dia++)
                {
                    var _dataConclusao = inicio.Value.TodayZeroHours().AddDays(dia);

                    if (_dataConclusao >= DateTime.Now.AddDays(-1))
                        break;

                    var _concluidosDatas = concluidosDatas.Where(_ => _.DataConclusao == _dataConclusao).SingleOrDefault();
                    _totalConcluido += (_concluidosDatas.IsNotNull() ? _concluidosDatas.TotalConcluido : 0);

                    pendenciasRestantes.Add(new
                    {
                        DataConclusao = _dataConclusao,
                        Dia = dia,
                        TotalRestante = totalPendencias - _totalConcluido
                    });
                }

                var eixoDeTempo = new List<string>();
                for (int dia = 0; dia <= dias; dia++)
                {
                    eixoDeTempo.Add($"Dia: {dia}");
                }

                var pendenciasPorDia = totalPendencias / dias;
                var eixoDePendencias = new List<int>();
                for (int dia = dias; dia >= 0; dia--)
                {
                    eixoDePendencias.Add(dia * pendenciasPorDia);
                }

                var eixoDeTempoPendenciasRestantes = new List<int>();
                for (int dia = 0; dia <= dias; dia++)
                {
                    var concluida = pendenciasRestantes.Where(_ => _.Dia == dia).SingleOrDefault();
                    if (concluida != null)
                        eixoDeTempoPendenciasRestantes.Add(concluida.TotalRestante);
                }

                return new
                {

                    Pendencias = new List<object>
                    {
                        eixoDePendencias.ToArray(),
                        eixoDeTempoPendenciasRestantes.ToArray()
                    }.ToArray(),
                    Colors = new string[] { "#003300" , "#FF0000" },
                    Dias = eixoDeTempo,
                };

            }

            return new
            {
            };

        }

        public async Task<dynamic> GetDataCustom(ProjetoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ProjetoId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<Projeto> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<Projeto> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.ProjetoId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.ProjetoId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.ProjetoId);

            return source;
        }

        protected override IQueryable<Projeto> MapperGetByFiltersToDomainFields(IQueryable<Projeto> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new Projeto
                {

                }).AsQueryable();
            }

            return result.Select(_ => (Projeto)_).AsQueryable();

        }

        protected override Projeto MapperGetOneToDomainFields(IQueryable<Projeto> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new Projeto
                {

                };
            }

            return source.SingleOrDefault();
        }

        protected override Expression<Func<Projeto, object>>[] DataAgregation(Expression<Func<Projeto, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
