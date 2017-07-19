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
    public class PendenciaServiceBase : ServiceBase<Pendencia>
    {
        protected readonly IPendenciaRepository _rep;

        public PendenciaServiceBase(IPendenciaRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<Pendencia> GetOne(PendenciaFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<Pendencia>> GetByFilters(PendenciaFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<Pendencia>> GetByFiltersPaging(PendenciaFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public virtual void Remove(Pendencia pendencia)
        {
            this._rep.Remove(pendencia);
        }

        public virtual Summary GetSummary(PaginateResult<Pendencia> paginateResult)
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

        public override async Task<Pendencia> Save(Pendencia pendencia, bool questionToContinue = false)
        {
			var pendenciaOld = await this.GetOne(new PendenciaFilter { PendenciaId = pendencia.PendenciaId });
			var pendenciaOrchestrated = await this.DomainOrchestration(pendencia, pendenciaOld);

            if (questionToContinue)
            {
                if (base.Continue(pendenciaOrchestrated, pendenciaOld) == false)
                    return pendenciaOrchestrated;
            }

            return this.SaveWithValidation(pendenciaOrchestrated, pendenciaOld);
        }

        public override async Task<Pendencia> SavePartial(Pendencia pendencia, bool questionToContinue = false)
        {
            var pendenciaOld = await this.GetOne(new PendenciaFilter { PendenciaId = pendencia.PendenciaId });
			var pendenciaOrchestrated = await this.DomainOrchestration(pendencia, pendenciaOld);

            if (questionToContinue)
            {
                if (base.Continue(pendenciaOrchestrated, pendenciaOld) == false)
                    return pendenciaOrchestrated;
            }

            return SaveWithOutValidation(pendenciaOrchestrated, pendenciaOld);
        }

        protected override Pendencia SaveWithOutValidation(Pendencia pendencia, Pendencia pendenciaOld)
        {
            pendencia = this.SaveDefault(pendencia, pendenciaOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return pendencia;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "pendencia Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return pendencia;

        }

		protected override Pendencia SaveWithValidation(Pendencia pendencia, Pendencia pendenciaOld)
        {
            if (!this.DataAnnotationIsValid())
                return pendencia;

            if (!pendencia.IsValid())
            {
                base._validationResult = pendencia.GetDomainValidation();
                return pendencia;
            }

            this.Specifications(pendencia);

            if (!base._validationResult.IsValid)
                return pendencia;
            
            pendencia = this.SaveDefault(pendencia, pendenciaOld);
            base._validationResult.Message = "Pendencia cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return pendencia;
        }

		protected virtual void Specifications(Pendencia pendencia)
        {
            base._validationResult  = new PendenciaAptoParaCadastroValidation(this._rep).Validate(pendencia);
			base._validationWarning  = new PendenciaAptoParaCadastroWarning(this._rep).Validate(pendencia);
        }

        protected virtual Pendencia SaveDefault(Pendencia pendencia, Pendencia pendenciaOld)
        {
			pendencia = this.AuditDefault(pendencia, pendenciaOld);

            var isNew = pendenciaOld.IsNull();			
            if (isNew)
                pendencia = this.AddDefault(pendencia);
            else
				pendencia = this.UpdateDefault(pendencia);

            return pendencia;
        }
		
        protected virtual Pendencia AddDefault(Pendencia pendencia)
        {
            pendencia = this._rep.Add(pendencia);
            return pendencia;
        }

		protected virtual Pendencia UpdateDefault(Pendencia pendencia)
        {
            pendencia = this._rep.Update(pendencia);
            return pendencia;
        }
    }
}
