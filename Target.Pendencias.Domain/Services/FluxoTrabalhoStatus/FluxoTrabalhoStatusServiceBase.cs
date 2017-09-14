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
    public class FluxoTrabalhoStatusServiceBase : ServiceBase<FluxoTrabalhoStatus>
    {
        protected readonly IFluxoTrabalhoStatusRepository _rep;

        public FluxoTrabalhoStatusServiceBase(IFluxoTrabalhoStatusRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<FluxoTrabalhoStatus> GetOne(FluxoTrabalhoStatusFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<FluxoTrabalhoStatus>> GetByFilters(FluxoTrabalhoStatusFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<FluxoTrabalhoStatus>> GetByFiltersPaging(FluxoTrabalhoStatusFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(FluxoTrabalhoStatus fluxotrabalhostatus)
        {
            this._rep.Remove(fluxotrabalhostatus);
        }

        public virtual Summary GetSummary(PaginateResult<FluxoTrabalhoStatus> paginateResult)
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

        public override async Task<FluxoTrabalhoStatus> Save(FluxoTrabalhoStatus fluxotrabalhostatus, bool questionToContinue = false)
        {
			var fluxotrabalhostatusOld = await this.GetOne(new FluxoTrabalhoStatusFilter { FluxoTrabalhoStatusId = fluxotrabalhostatus.FluxoTrabalhoStatusId });
			var fluxotrabalhostatusOrchestrated = await this.DomainOrchestration(fluxotrabalhostatus, fluxotrabalhostatusOld);

            if (questionToContinue)
            {
                if (base.Continue(fluxotrabalhostatusOrchestrated, fluxotrabalhostatusOld) == false)
                    return fluxotrabalhostatusOrchestrated;
            }

            return this.SaveWithValidation(fluxotrabalhostatusOrchestrated, fluxotrabalhostatusOld);
        }

        public override async Task<FluxoTrabalhoStatus> SavePartial(FluxoTrabalhoStatus fluxotrabalhostatus, bool questionToContinue = false)
        {
            var fluxotrabalhostatusOld = await this.GetOne(new FluxoTrabalhoStatusFilter { FluxoTrabalhoStatusId = fluxotrabalhostatus.FluxoTrabalhoStatusId });
			var fluxotrabalhostatusOrchestrated = await this.DomainOrchestration(fluxotrabalhostatus, fluxotrabalhostatusOld);

            if (questionToContinue)
            {
                if (base.Continue(fluxotrabalhostatusOrchestrated, fluxotrabalhostatusOld) == false)
                    return fluxotrabalhostatusOrchestrated;
            }

            return SaveWithOutValidation(fluxotrabalhostatusOrchestrated, fluxotrabalhostatusOld);
        }

        protected override FluxoTrabalhoStatus SaveWithOutValidation(FluxoTrabalhoStatus fluxotrabalhostatus, FluxoTrabalhoStatus fluxotrabalhostatusOld)
        {
            fluxotrabalhostatus = this.SaveDefault(fluxotrabalhostatus, fluxotrabalhostatusOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return fluxotrabalhostatus;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "fluxotrabalhostatus Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return fluxotrabalhostatus;

        }

		protected override FluxoTrabalhoStatus SaveWithValidation(FluxoTrabalhoStatus fluxotrabalhostatus, FluxoTrabalhoStatus fluxotrabalhostatusOld)
        {
            if (!this.DataAnnotationIsValid())
                return fluxotrabalhostatus;

            if (!fluxotrabalhostatus.IsValid())
            {
                base._validationResult = fluxotrabalhostatus.GetDomainValidation();
                return fluxotrabalhostatus;
            }

            this.Specifications(fluxotrabalhostatus);

            if (!base._validationResult.IsValid)
                return fluxotrabalhostatus;
            
            fluxotrabalhostatus = this.SaveDefault(fluxotrabalhostatus, fluxotrabalhostatusOld);
            base._validationResult.Message = "FluxoTrabalhoStatus cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return fluxotrabalhostatus;
        }

		protected virtual void Specifications(FluxoTrabalhoStatus fluxotrabalhostatus)
        {
            base._validationResult  = new FluxoTrabalhoStatusAptoParaCadastroValidation(this._rep).Validate(fluxotrabalhostatus);
			base._validationWarning  = new FluxoTrabalhoStatusAptoParaCadastroWarning(this._rep).Validate(fluxotrabalhostatus);
        }

        protected virtual FluxoTrabalhoStatus SaveDefault(FluxoTrabalhoStatus fluxotrabalhostatus, FluxoTrabalhoStatus fluxotrabalhostatusOld)
        {
			

            var isNew = fluxotrabalhostatusOld.IsNull();			
            if (isNew)
                fluxotrabalhostatus = this.AddDefault(fluxotrabalhostatus);
            else
				fluxotrabalhostatus = this.UpdateDefault(fluxotrabalhostatus);

            return fluxotrabalhostatus;
        }
		
        protected virtual FluxoTrabalhoStatus AddDefault(FluxoTrabalhoStatus fluxotrabalhostatus)
        {
            fluxotrabalhostatus = this._rep.Add(fluxotrabalhostatus);
            return fluxotrabalhostatus;
        }

		protected virtual FluxoTrabalhoStatus UpdateDefault(FluxoTrabalhoStatus fluxotrabalhostatus)
        {
            fluxotrabalhostatus = this._rep.Update(fluxotrabalhostatus);
            return fluxotrabalhostatus;
        }
				
		public virtual async Task<FluxoTrabalhoStatus> GetNewInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new FluxoTrabalhoStatus.FluxoTrabalhoStatusFactory().GetDefaultInstance(model, user);
            });
         }

		public virtual async Task<FluxoTrabalhoStatus> GetUpdateInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new FluxoTrabalhoStatus.FluxoTrabalhoStatusFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
