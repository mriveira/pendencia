using Common.Domain.Base;
using Common.Domain.Interfaces;
using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Validations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Services
{
    public class ComentarioServiceBase : ServiceBase<Comentario>
    {
        protected readonly IComentarioRepository _rep;

        public ComentarioServiceBase(IComentarioRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<Comentario> GetOne(ComentarioFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<Comentario>> GetByFilters(ComentarioFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<Comentario>> GetByFiltersPaging(ComentarioFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(Comentario comentario)
        {
            this._rep.Remove(comentario);
        }

        public virtual Summary GetSummary(PaginateResult<Comentario> paginateResult)
        {
            return new Summary
            {
                Total = paginateResult.TotalCount,
            };
        }

        public virtual ValidationSpecificationResult GetDomainValidation(FilterBase filters = null)
        {
            return base._validationResult;
        }

        public virtual ConfirmEspecificationResult GetDomainConfirm(FilterBase filters = null)
        {
            return base._validationConfirm;
        }

        public virtual WarningSpecificationResult GetDomainWarning(FilterBase filters = null)
        {
            return base._validationWarning;
        }

        public override async Task<Comentario> Save(Comentario comentario, bool questionToContinue = false)
        {
			var comentarioOld = await this.GetOne(new ComentarioFilter { ComentarioId = comentario.ComentarioId });
			var comentarioOrchestrated = await this.DomainOrchestration(comentario, comentarioOld);

            if (questionToContinue)
            {
                if (base.Continue(comentarioOrchestrated, comentarioOld) == false)
                    return comentarioOrchestrated;
            }

            return this.SaveWithValidation(comentarioOrchestrated, comentarioOld);
        }

        public override async Task<Comentario> SavePartial(Comentario comentario, bool questionToContinue = false)
        {
            var comentarioOld = await this.GetOne(new ComentarioFilter { ComentarioId = comentario.ComentarioId });
			var comentarioOrchestrated = await this.DomainOrchestration(comentario, comentarioOld);

            if (questionToContinue)
            {
                if (base.Continue(comentarioOrchestrated, comentarioOld) == false)
                    return comentarioOrchestrated;
            }

            return SaveWithOutValidation(comentarioOrchestrated, comentarioOld);
        }

        protected override Comentario SaveWithOutValidation(Comentario comentario, Comentario comentarioOld)
        {
            comentario = this.SaveDefault(comentario, comentarioOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return comentario;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "comentario Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return comentario;

        }

		protected override Comentario SaveWithValidation(Comentario comentario, Comentario comentarioOld)
        {
            if (!this.DataAnnotationIsValid())
                return comentario;

            if (!comentario.IsValid())
            {
                base._validationResult = comentario.GetDomainValidation();
                return comentario;
            }

            this.Specifications(comentario);

            if (!base._validationResult.IsValid)
                return comentario;
            
            comentario = this.SaveDefault(comentario, comentarioOld);
            base._validationResult.Message = "Comentario cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return comentario;
        }

		protected virtual void Specifications(Comentario comentario)
        {
            base._validationResult  = new ComentarioAptoParaCadastroValidation(this._rep).Validate(comentario);
			base._validationWarning  = new ComentarioAptoParaCadastroWarning(this._rep).Validate(comentario);
        }

        protected virtual Comentario SaveDefault(Comentario comentario, Comentario comentarioOld)
        {
			comentario = this.AuditDefault(comentario, comentarioOld);

            var isNew = comentarioOld.IsNull();			
            if (isNew)
                comentario = this.AddDefault(comentario);
            else
				comentario = this.UpdateDefault(comentario);

            return comentario;
        }
		
        protected virtual Comentario AddDefault(Comentario comentario)
        {
            comentario = this._rep.Add(comentario);
            return comentario;
        }

		protected virtual Comentario UpdateDefault(Comentario comentario)
        {
            comentario = this._rep.Update(comentario);
            return comentario;
        }
				
		public virtual async Task<Comentario> GetNewInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new Comentario.ComentarioFactory().GetDefaultInstance(model, user);
            });
         }

		public virtual async Task<Comentario> GetUpdateInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new Comentario.ComentarioFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
