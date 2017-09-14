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

namespace Target.Pendencias.Data.Repository
{
    public class PendenciaRepository : Repository<Pendencia>, IPendenciaRepository
    {
        private readonly CurrentUser _user;
        public PendenciaRepository(DbContextTarget ctx, CurrentUser user) : base(ctx)
        {
            this._user = user;
        }

      
        public IQueryable<Pendencia> GetBySimplefilters(PendenciaFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
                                .WithBasicFilters(filters)
                                .WithCustomFilters(filters)
                                .WithLimitTenant(this._user);
            return querybase;
        }

        public async Task<Pendencia> GetById(PendenciaFilter model)
        {
            var _pendencia = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.PendenciaId == model.PendenciaId));

            return _pendencia;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(PendenciaFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaId,
                Name = _.Resumo

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaFilter filters)
        {
            if (filters.AttributeBehavior == "MinhasPendencias")
                filters.UsuarioId = this._user.GetTenantId<int>();

            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaId,
                Codigo = _.Projeto.ChaveUnica + "-" + _.PendenciaId,
                Resumo = _.Resumo,
                Status = _.FluxoTrabalhoStatus.Nome,
                Tipo = _.PendenciaTipo.Nome,
                StatusId = _.FluxoTrabalhoStatusId,
                TempoEstimado = _.TempoEstimado,
                PontosEstimados = _.PontosEstimados,
                Prazo = _.Prazo,
                Foto = _.Usuario.Foto,
                User = _.Usuario.Nome,
                CorFundo = _.FluxoTrabalhoStatus.CorFundo,
                CorFonte = _.FluxoTrabalhoStatus.CorFonte,
                Ordem = _.FluxoTrabalhoStatus.Ordem,
                Cronometrando = _.CollectionPendenciaTempos.Where(__=>__.Fim == null).Any()

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(PendenciaFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<Pendencia> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<Pendencia> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.PendenciaId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.PendenciaId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.PendenciaId);

            return source;
        }

        protected override IQueryable<Pendencia> MapperGetByFiltersToDomainFields(IQueryable<Pendencia> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new Pendencia
                {

                }).AsQueryable();
            }

            return result.Select(_ => (Pendencia)_).AsQueryable();

        }

        protected override Pendencia MapperGetOneToDomainFields(IQueryable<Pendencia> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new Pendencia
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<Pendencia, object>>[] DataAgregation(Expression<Func<Pendencia, object>>[] includes, FilterBase filter)
        {

            if (filter.QueryOptimizerBehavior == "Play" || filter.QueryOptimizerBehavior == "Stop" || filter.QueryOptimizerBehavior == "ConcluirPendencia")
                return includes.Add(_ => _.CollectionPendenciaTempos);

            return base.DataAgregation(includes, filter);
        }

    }
}
