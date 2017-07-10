using System;
using Common.Domain.Interfaces;
using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Interfaces.Services;
using System.Linq;
using Target.Pendencias.Domain.Validations;
using Common.Domain.Base;

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

        public void Play(Pendencia entity)
        {
            entity.Play(this._user);
        }

        public void Stop(Pendencia entity, string nota)
        {
            entity.Stop(nota);
        }

        public void Concluir(Pendencia entity, string nota, string comentario)
        {
            entity.Concluir(nota, comentario, this._user);
        }

        public void Comentar(Pendencia entity, string comentario)
        {
            entity.Comentar(comentario, this._user);
        }

        public void Reclassificar(Pendencia entity, string comentario, int fluxoTrabalhoStatusId)
        {
            entity.Reclassificar(comentario, fluxoTrabalhoStatusId, this._user);
        }

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

        protected override Pendencia AuditDefault(DomainBaseWithUserCreate entity, DomainBaseWithUserCreate entityOld)
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



    }
}
