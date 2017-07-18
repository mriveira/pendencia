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
    public class PendeciaPrioridadeServiceBase : ServiceBase<PendeciaPrioridade>
    {
        protected readonly IPendeciaPrioridadeRepository _rep;

        public PendeciaPrioridadeServiceBase(IPendeciaPrioridadeRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<PendeciaPrioridade> GetOne(PendeciaPrioridadeFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<PendeciaPrioridade>> GetByFilters(PendeciaPrioridadeFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<PendeciaPrioridade>> GetByFiltersPaging(PendeciaPrioridadeFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public virtual void Remove(PendeciaPrioridade pendeciaprioridade)
        {
            this._rep.Remove(pendeciaprioridade);
        }

        public virtual Summary GetSummary(PaginateResult<PendeciaPrioridade> paginateResult)
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

        public override async Task<PendeciaPrioridade> Save(PendeciaPrioridade pendeciaprioridade, bool questionToContinue = false)
        {
			var pendeciaprioridadeOld = await this.GetOne(new PendeciaPrioridadeFilter { PendeciaPrioridadeId = pendeciaprioridade.PendeciaPrioridadeId });
			var pendeciaprioridadeOrchestrated = await this.DomainOrchestration(pendeciaprioridade, pendeciaprioridadeOld);

            if (questionToContinue)
            {
                if (base.Continue(pendeciaprioridadeOrchestrated, pendeciaprioridadeOld) == false)
                    return pendeciaprioridadeOrchestrated;
            }

            return this.SaveWithValidation(pendeciaprioridadeOrchestrated, pendeciaprioridadeOld);
        }

        public override async Task<PendeciaPrioridade> SavePartial(PendeciaPrioridade pendeciaprioridade, bool questionToContinue = false)
        {
            var pendeciaprioridadeOld = await this.GetOne(new PendeciaPrioridadeFilter { PendeciaPrioridadeId = pendeciaprioridade.PendeciaPrioridadeId });
			var pendeciaprioridadeOrchestrated = await this.DomainOrchestration(pendeciaprioridade, pendeciaprioridadeOld);

            if (questionToContinue)
            {
                if (base.Continue(pendeciaprioridadeOrchestrated, pendeciaprioridadeOld) == false)
                    return pendeciaprioridadeOrchestrated;
            }

            return SaveWithOutValidation(pendeciaprioridadeOrchestrated, pendeciaprioridadeOld);
        }

        protected override PendeciaPrioridade SaveWithOutValidation(PendeciaPrioridade pendeciaprioridade, PendeciaPrioridade pendeciaprioridadeOld)
        {
            pendeciaprioridade = this.SaveDefault(pendeciaprioridade, pendeciaprioridadeOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return pendeciaprioridade;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "pendeciaprioridade Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return pendeciaprioridade;

        }

		protected override PendeciaPrioridade SaveWithValidation(PendeciaPrioridade pendeciaprioridade, PendeciaPrioridade pendeciaprioridadeOld)
        {
            if (!this.DataAnnotationIsValid())
                return pendeciaprioridade;

            if (!pendeciaprioridade.IsValid())
            {
                base._validationResult = pendeciaprioridade.GetDomainValidation();
                return pendeciaprioridade;
            }

            this.Specifications(pendeciaprioridade);

            if (!base._validationResult.IsValid)
                return pendeciaprioridade;
            
            pendeciaprioridade = this.SaveDefault(pendeciaprioridade, pendeciaprioridadeOld);
            base._validationResult.Message = "PendeciaPrioridade cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return pendeciaprioridade;
        }

		protected virtual void Specifications(PendeciaPrioridade pendeciaprioridade)
        {
            base._validationResult  = new PendeciaPrioridadeAptoParaCadastroValidation(this._rep).Validate(pendeciaprioridade);
			base._validationWarning  = new PendeciaPrioridadeAptoParaCadastroWarning(this._rep).Validate(pendeciaprioridade);
        }

        protected virtual PendeciaPrioridade SaveDefault(PendeciaPrioridade pendeciaprioridade, PendeciaPrioridade pendeciaprioridadeOld)
        {
			

            var isNew = pendeciaprioridadeOld.IsNull();			
            if (isNew)
                pendeciaprioridade = this.AddDefault(pendeciaprioridade);
            else
				pendeciaprioridade = this.UpdateDefault(pendeciaprioridade);

            return pendeciaprioridade;
        }
		
        protected virtual PendeciaPrioridade AddDefault(PendeciaPrioridade pendeciaprioridade)
        {
            pendeciaprioridade = this._rep.Add(pendeciaprioridade);
            return pendeciaprioridade;
        }

		protected virtual PendeciaPrioridade UpdateDefault(PendeciaPrioridade pendeciaprioridade)
        {
            pendeciaprioridade = this._rep.Update(pendeciaprioridade);
            return pendeciaprioridade;
        }
    }
}