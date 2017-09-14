using System;
using Common.Domain.Interfaces;
using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Interfaces.Services;
using System.Linq;
using Target.Pendencias.Domain.Validations;
using Common.Domain.Base;
using System.Threading.Tasks;
using Target.Pendencias.Domain.Filter;

namespace Target.Pendencias.Domain.Services
{
    public class PendenciaService : PendenciaServiceBase, IPendenciaService
    {
        private readonly IPendenciaTemposRepository _repPendenciaTempos;
        private readonly IPendenciaEventosRepository _repPendenciaEventos;

        public PendenciaService(IPendenciaRepository rep, IPendenciaTemposRepository repPendenciaTempos, IPendenciaEventosRepository repPendenciaEventos, ICache cache, CurrentUser user)
            : base(rep, cache, user)
        {

            this._repPendenciaTempos = repPendenciaTempos;
            this._repPendenciaEventos = repPendenciaEventos;
        }

        //public async void Play(Pendencia entity)
        //{
        //    entity.Play(this._user);
        //}

        //public void Stop(Pendencia entity, string nota)
        //{
        //    entity.Stop(nota);
        //}

        //public void Concluir(Pendencia entity, string nota, string comentario)
        //{
        //    entity.Concluir(nota, comentario, this._user);
        //}

        //public void Comentar(Pendencia entity, string comentario)
        //{
        //    entity.Comentar(comentario, this._user);
        //}

        //public void Reclassificar(Pendencia entity, string comentario, int fluxoTrabalhoStatusId)
        //{
        //    entity.Reclassificar(comentario, fluxoTrabalhoStatusId, this._user);
        //}

        protected override Pendencia UpdateDefault(Pendencia pendencia)
        {
            base.UpdateDefault(pendencia);

            if (pendencia.CollectionPendenciaTempos.IsAny())
                this._repPendenciaTempos.Update(pendencia.CollectionPendenciaTempos.Where(_ => _.PendenciaTemposId > 0));

            if (pendencia.CollectionPendenciaEventos.IsAny())
                this._repPendenciaEventos.Update(pendencia.CollectionPendenciaEventos.Where(_ => _.PendenciaEventosId > 0));

            if (pendencia.AttributeBehavior == "Play")
            {
                var pendenciaTempo = pendencia.CollectionPendenciaTempos.OrderByDescending(_ => _.Inicio).Take(1).SingleOrDefault();
                base._validationResult = new PendenciaTemposAptoParaCadastroValidation(this._repPendenciaTempos).Validate(pendenciaTempo);
            }

            return pendencia;

        }

        public override Pendencia AuditDefault(DomainBaseWithUserCreate entity, DomainBaseWithUserCreate entityOld)
        {
            var result = base.AuditDefault(entity, entityOld);

            if (result.CollectionPendenciaEventos.IsAny())
            {
                foreach (var pe in result.CollectionPendenciaEventos.Where(_ => _.PendenciaEventosId == 0))
                    pe.SetUserCreate(this._user.GetTenantId<int>());
            }

            if (result.CollectionComentarios.IsAny())
            {
                foreach (var pe in result.CollectionComentarios.Where(_ => _.ComentarioId == 0))
                    pe.SetUserCreate(this._user.GetTenantId<int>());
            }

            if (result.CollectionPendenciaTempos.IsAny())
            {
                foreach (var pt in result.CollectionPendenciaTempos)
                {
                    if (pt.PendenciaTemposId == 0)
                        pt.SetUserCreate(this._user.GetTenantId<int>());
                    else
                        pt.SetUserUpdate(this._user.GetSubjectId<int>());
                }
            }

            return result;
        }


        public async override Task<Pendencia> DomainOrchestration(Pendencia _pendencia, Pendencia entityOld)
        {
            if (_pendencia.AttributeBehavior == "Play")
            {
                var result = await this.GetOne(new PendenciaFilter
                {
                    PendenciaId = _pendencia.PendenciaId,
                    QueryOptimizerBehavior = "Play"
                });

                result.SetAttributeBehavior("Play");
                this.Play(result);
                return result;
            }

            if (_pendencia.AttributeBehavior == "Stop")
            {
                var result = await this.GetOne(new PendenciaFilter
                {
                    PendenciaId = _pendencia.PendenciaId,
                    QueryOptimizerBehavior = "Stop"
                });

                this.Stop(result, _pendencia.Nota);
                return result;
            }

            if (_pendencia.AttributeBehavior == "ConcluirPendencia")
            {
                var result = await this.GetOne(new PendenciaFilter
                {
                    PendenciaId = _pendencia.PendenciaId,
                    QueryOptimizerBehavior = "ConcluirPendencia"
                });

                var comentario = _pendencia.CollectionComentarios.FirstOrDefault().Descricao;
                this.Concluir(result, comentario, comentario);
                return result;
            }

            if (_pendencia.AttributeBehavior == "ComentarPendencia")
            {
                var result = await this.GetOne(new PendenciaFilter
                {
                    PendenciaId = _pendencia.PendenciaId,
                    QueryOptimizerBehavior = "ComentarPendencia"
                });

                var comentario = _pendencia.CollectionComentarios.FirstOrDefault().Descricao;
                this.Comentar(result, comentario);
                return result;
            }

            if (_pendencia.AttributeBehavior == "Reclassificar")
            {
                var result = await this.GetOne(new PendenciaFilter
                {
                    PendenciaId = _pendencia.PendenciaId,
                    QueryOptimizerBehavior = "Reclassificar"
                });

                var comentario = _pendencia.CollectionComentarios.FirstOrDefault().Descricao;
                this.Reclassificar(result, comentario, _pendencia.FluxoTrabalhoStatusId);
                return result;
            }
            return await base.DomainOrchestration(_pendencia, entityOld);
        }

        private void Stop(Pendencia result, object nota)
        {
            throw new NotImplementedException();
        }

        private void Reclassificar(Pendencia pendencia, string comentario, int fluxoTrabalhoStatusId)
        {
            pendencia.Reclassificar(comentario, fluxoTrabalhoStatusId, this._user);
        }

        private void Comentar(Pendencia pendencia, string comentario)
        {
            pendencia.Comentar(comentario, this._user);
        }

        private void Concluir(Pendencia pendencia, string nota, string comentario)
        {
            pendencia.Concluir(nota, comentario, this._user);
        }

        private void Stop(Pendencia pendencia, string nota)
        {
            pendencia.Stop(nota);
        }

        private void Play(Pendencia pendencia)
        {
            pendencia.Play(this._user);
        }


    }
}
