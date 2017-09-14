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
    public class PendenciaEventosServiceBase : ServiceBase<PendenciaEventos>
    {
        protected readonly IPendenciaEventosRepository _rep;

        public PendenciaEventosServiceBase(IPendenciaEventosRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<PendenciaEventos> GetOne(PendenciaEventosFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<PendenciaEventos>> GetByFilters(PendenciaEventosFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<PendenciaEventos>> GetByFiltersPaging(PendenciaEventosFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(PendenciaEventos pendenciaeventos)
        {
            this._rep.Remove(pendenciaeventos);
        }

        public virtual Summary GetSummary(PaginateResult<PendenciaEventos> paginateResult)
        {
            return new Summary
            {
                Total = paginateResult.TotalCount,
				PageSize = paginateResult.PageSize,
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

        public override async Task<PendenciaEventos> Save(PendenciaEventos pendenciaeventos, bool questionToContinue = false)
        {
			var pendenciaeventosOld = await this.GetOne(new PendenciaEventosFilter { PendenciaEventosId = pendenciaeventos.PendenciaEventosId });
			var pendenciaeventosOrchestrated = await this.DomainOrchestration(pendenciaeventos, pendenciaeventosOld);

            if (questionToContinue)
            {
                if (base.Continue(pendenciaeventosOrchestrated, pendenciaeventosOld) == false)
                    return pendenciaeventosOrchestrated;
            }

            return this.SaveWithValidation(pendenciaeventosOrchestrated, pendenciaeventosOld);
        }

        public override async Task<PendenciaEventos> SavePartial(PendenciaEventos pendenciaeventos, bool questionToContinue = false)
        {
            var pendenciaeventosOld = await this.GetOne(new PendenciaEventosFilter { PendenciaEventosId = pendenciaeventos.PendenciaEventosId });
			var pendenciaeventosOrchestrated = await this.DomainOrchestration(pendenciaeventos, pendenciaeventosOld);

            if (questionToContinue)
            {
                if (base.Continue(pendenciaeventosOrchestrated, pendenciaeventosOld) == false)
                    return pendenciaeventosOrchestrated;
            }

            return SaveWithOutValidation(pendenciaeventosOrchestrated, pendenciaeventosOld);
        }

        protected override PendenciaEventos SaveWithOutValidation(PendenciaEventos pendenciaeventos, PendenciaEventos pendenciaeventosOld)
        {
            pendenciaeventos = this.SaveDefault(pendenciaeventos, pendenciaeventosOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return pendenciaeventos;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "pendenciaeventos Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return pendenciaeventos;

        }

		protected override PendenciaEventos SaveWithValidation(PendenciaEventos pendenciaeventos, PendenciaEventos pendenciaeventosOld)
        {
            if (!this.DataAnnotationIsValid())
                return pendenciaeventos;

            if (!pendenciaeventos.IsValid())
            {
                base._validationResult = pendenciaeventos.GetDomainValidation();
                return pendenciaeventos;
            }

            this.Specifications(pendenciaeventos);

            if (!base._validationResult.IsValid)
                return pendenciaeventos;
            
            pendenciaeventos = this.SaveDefault(pendenciaeventos, pendenciaeventosOld);
            base._validationResult.Message = "PendenciaEventos cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return pendenciaeventos;
        }

		protected virtual void Specifications(PendenciaEventos pendenciaeventos)
        {
            base._validationResult  = new PendenciaEventosAptoParaCadastroValidation(this._rep).Validate(pendenciaeventos);
			base._validationWarning  = new PendenciaEventosAptoParaCadastroWarning(this._rep).Validate(pendenciaeventos);
        }

        protected virtual PendenciaEventos SaveDefault(PendenciaEventos pendenciaeventos, PendenciaEventos pendenciaeventosOld)
        {
			pendenciaeventos = this.AuditDefault(pendenciaeventos, pendenciaeventosOld);

            var isNew = pendenciaeventosOld.IsNull();			
            if (isNew)
                pendenciaeventos = this.AddDefault(pendenciaeventos);
            else
				pendenciaeventos = this.UpdateDefault(pendenciaeventos);

            return pendenciaeventos;
        }
		
        protected virtual PendenciaEventos AddDefault(PendenciaEventos pendenciaeventos)
        {
            pendenciaeventos = this._rep.Add(pendenciaeventos);
            return pendenciaeventos;
        }

		protected virtual PendenciaEventos UpdateDefault(PendenciaEventos pendenciaeventos)
        {
            pendenciaeventos = this._rep.Update(pendenciaeventos);
            return pendenciaeventos;
        }
				
		public virtual async Task<PendenciaEventos> GetNewInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new PendenciaEventos.PendenciaEventosFactory().GetDefaultInstance(model, user);
            });
         }

		public virtual async Task<PendenciaEventos> GetUpdateInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new PendenciaEventos.PendenciaEventosFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
