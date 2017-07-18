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
    public class PendenciaTipoServiceBase : ServiceBase<PendenciaTipo>
    {
        protected readonly IPendenciaTipoRepository _rep;

        public PendenciaTipoServiceBase(IPendenciaTipoRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<PendenciaTipo> GetOne(PendenciaTipoFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<PendenciaTipo>> GetByFilters(PendenciaTipoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<PendenciaTipo>> GetByFiltersPaging(PendenciaTipoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public virtual void Remove(PendenciaTipo pendenciatipo)
        {
            this._rep.Remove(pendenciatipo);
        }

        public virtual Summary GetSummary(PaginateResult<PendenciaTipo> paginateResult)
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

        public override async Task<PendenciaTipo> Save(PendenciaTipo pendenciatipo, bool questionToContinue = false)
        {
			var pendenciatipoOld = await this.GetOne(new PendenciaTipoFilter { PendenciaTipoId = pendenciatipo.PendenciaTipoId });
			var pendenciatipoOrchestrated = await this.DomainOrchestration(pendenciatipo, pendenciatipoOld);

            if (questionToContinue)
            {
                if (base.Continue(pendenciatipoOrchestrated, pendenciatipoOld) == false)
                    return pendenciatipoOrchestrated;
            }

            return this.SaveWithValidation(pendenciatipoOrchestrated, pendenciatipoOld);
        }

        public override async Task<PendenciaTipo> SavePartial(PendenciaTipo pendenciatipo, bool questionToContinue = false)
        {
            var pendenciatipoOld = await this.GetOne(new PendenciaTipoFilter { PendenciaTipoId = pendenciatipo.PendenciaTipoId });
			var pendenciatipoOrchestrated = await this.DomainOrchestration(pendenciatipo, pendenciatipoOld);

            if (questionToContinue)
            {
                if (base.Continue(pendenciatipoOrchestrated, pendenciatipoOld) == false)
                    return pendenciatipoOrchestrated;
            }

            return SaveWithOutValidation(pendenciatipoOrchestrated, pendenciatipoOld);
        }

        protected override PendenciaTipo SaveWithOutValidation(PendenciaTipo pendenciatipo, PendenciaTipo pendenciatipoOld)
        {
            pendenciatipo = this.SaveDefault(pendenciatipo, pendenciatipoOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return pendenciatipo;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "pendenciatipo Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return pendenciatipo;

        }

		protected override PendenciaTipo SaveWithValidation(PendenciaTipo pendenciatipo, PendenciaTipo pendenciatipoOld)
        {
            if (!this.DataAnnotationIsValid())
                return pendenciatipo;

            if (!pendenciatipo.IsValid())
            {
                base._validationResult = pendenciatipo.GetDomainValidation();
                return pendenciatipo;
            }

            this.Specifications(pendenciatipo);

            if (!base._validationResult.IsValid)
                return pendenciatipo;
            
            pendenciatipo = this.SaveDefault(pendenciatipo, pendenciatipoOld);
            base._validationResult.Message = "PendenciaTipo cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return pendenciatipo;
        }

		protected virtual void Specifications(PendenciaTipo pendenciatipo)
        {
            base._validationResult  = new PendenciaTipoAptoParaCadastroValidation(this._rep).Validate(pendenciatipo);
			base._validationWarning  = new PendenciaTipoAptoParaCadastroWarning(this._rep).Validate(pendenciatipo);
        }

        protected virtual PendenciaTipo SaveDefault(PendenciaTipo pendenciatipo, PendenciaTipo pendenciatipoOld)
        {
			

            var isNew = pendenciatipoOld.IsNull();			
            if (isNew)
                pendenciatipo = this.AddDefault(pendenciatipo);
            else
				pendenciatipo = this.UpdateDefault(pendenciatipo);

            return pendenciatipo;
        }
		
        protected virtual PendenciaTipo AddDefault(PendenciaTipo pendenciatipo)
        {
            pendenciatipo = this._rep.Add(pendenciatipo);
            return pendenciatipo;
        }

		protected virtual PendenciaTipo UpdateDefault(PendenciaTipo pendenciatipo)
        {
            pendenciatipo = this._rep.Update(pendenciatipo);
            return pendenciatipo;
        }
    }
}