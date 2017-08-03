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
    public class PendenciaTemposServiceBase : ServiceBase<PendenciaTempos>
    {
        protected readonly IPendenciaTemposRepository _rep;

        public PendenciaTemposServiceBase(IPendenciaTemposRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<PendenciaTempos> GetOne(PendenciaTemposFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<PendenciaTempos>> GetByFilters(PendenciaTemposFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<PendenciaTempos>> GetByFiltersPaging(PendenciaTemposFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(PendenciaTempos pendenciatempos)
        {
            this._rep.Remove(pendenciatempos);
        }

        public virtual Summary GetSummary(PaginateResult<PendenciaTempos> paginateResult)
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

        public override async Task<PendenciaTempos> Save(PendenciaTempos pendenciatempos, bool questionToContinue = false)
        {
			var pendenciatemposOld = await this.GetOne(new PendenciaTemposFilter { PendenciaTemposId = pendenciatempos.PendenciaTemposId });
			var pendenciatemposOrchestrated = await this.DomainOrchestration(pendenciatempos, pendenciatemposOld);

            if (questionToContinue)
            {
                if (base.Continue(pendenciatemposOrchestrated, pendenciatemposOld) == false)
                    return pendenciatemposOrchestrated;
            }

            return this.SaveWithValidation(pendenciatemposOrchestrated, pendenciatemposOld);
        }

        public override async Task<PendenciaTempos> SavePartial(PendenciaTempos pendenciatempos, bool questionToContinue = false)
        {
            var pendenciatemposOld = await this.GetOne(new PendenciaTemposFilter { PendenciaTemposId = pendenciatempos.PendenciaTemposId });
			var pendenciatemposOrchestrated = await this.DomainOrchestration(pendenciatempos, pendenciatemposOld);

            if (questionToContinue)
            {
                if (base.Continue(pendenciatemposOrchestrated, pendenciatemposOld) == false)
                    return pendenciatemposOrchestrated;
            }

            return SaveWithOutValidation(pendenciatemposOrchestrated, pendenciatemposOld);
        }

        protected override PendenciaTempos SaveWithOutValidation(PendenciaTempos pendenciatempos, PendenciaTempos pendenciatemposOld)
        {
            pendenciatempos = this.SaveDefault(pendenciatempos, pendenciatemposOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return pendenciatempos;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "pendenciatempos Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return pendenciatempos;

        }

		protected override PendenciaTempos SaveWithValidation(PendenciaTempos pendenciatempos, PendenciaTempos pendenciatemposOld)
        {
            if (!this.DataAnnotationIsValid())
                return pendenciatempos;

            if (!pendenciatempos.IsValid())
            {
                base._validationResult = pendenciatempos.GetDomainValidation();
                return pendenciatempos;
            }

            this.Specifications(pendenciatempos);

            if (!base._validationResult.IsValid)
                return pendenciatempos;
            
            pendenciatempos = this.SaveDefault(pendenciatempos, pendenciatemposOld);
            base._validationResult.Message = "PendenciaTempos cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return pendenciatempos;
        }

		protected virtual void Specifications(PendenciaTempos pendenciatempos)
        {
            base._validationResult  = new PendenciaTemposAptoParaCadastroValidation(this._rep).Validate(pendenciatempos);
			base._validationWarning  = new PendenciaTemposAptoParaCadastroWarning(this._rep).Validate(pendenciatempos);
        }

        protected virtual PendenciaTempos SaveDefault(PendenciaTempos pendenciatempos, PendenciaTempos pendenciatemposOld)
        {
			pendenciatempos = this.AuditDefault(pendenciatempos, pendenciatemposOld);

            var isNew = pendenciatemposOld.IsNull();			
            if (isNew)
                pendenciatempos = this.AddDefault(pendenciatempos);
            else
				pendenciatempos = this.UpdateDefault(pendenciatempos);

            return pendenciatempos;
        }
		
        protected virtual PendenciaTempos AddDefault(PendenciaTempos pendenciatempos)
        {
            pendenciatempos = this._rep.Add(pendenciatempos);
            return pendenciatempos;
        }

		protected virtual PendenciaTempos UpdateDefault(PendenciaTempos pendenciatempos)
        {
            pendenciatempos = this._rep.Update(pendenciatempos);
            return pendenciatempos;
        }
				
		public virtual async Task<PendenciaTempos> GetDefaultInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new PendenciaTempos.PendenciaTemposFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
