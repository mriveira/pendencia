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
    public class ProjetoFluxoTrabalhoStatusServiceBase : ServiceBase<ProjetoFluxoTrabalhoStatus>
    {
        protected readonly IProjetoFluxoTrabalhoStatusRepository _rep;

        public ProjetoFluxoTrabalhoStatusServiceBase(IProjetoFluxoTrabalhoStatusRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<ProjetoFluxoTrabalhoStatus> GetOne(ProjetoFluxoTrabalhoStatusFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<ProjetoFluxoTrabalhoStatus>> GetByFilters(ProjetoFluxoTrabalhoStatusFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<ProjetoFluxoTrabalhoStatus>> GetByFiltersPaging(ProjetoFluxoTrabalhoStatusFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatus)
        {
            this._rep.Remove(projetofluxotrabalhostatus);
        }

        public virtual Summary GetSummary(PaginateResult<ProjetoFluxoTrabalhoStatus> paginateResult)
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

        public override async Task<ProjetoFluxoTrabalhoStatus> Save(ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatus, bool questionToContinue = false)
        {
			var projetofluxotrabalhostatusOld = await this.GetOne(new ProjetoFluxoTrabalhoStatusFilter { ProjetoId = projetofluxotrabalhostatus.ProjetoId, FluxoTrabalhoStatusId = projetofluxotrabalhostatus.FluxoTrabalhoStatusId });
			var projetofluxotrabalhostatusOrchestrated = await this.DomainOrchestration(projetofluxotrabalhostatus, projetofluxotrabalhostatusOld);

            if (questionToContinue)
            {
                if (base.Continue(projetofluxotrabalhostatusOrchestrated, projetofluxotrabalhostatusOld) == false)
                    return projetofluxotrabalhostatusOrchestrated;
            }

            return this.SaveWithValidation(projetofluxotrabalhostatusOrchestrated, projetofluxotrabalhostatusOld);
        }

        public override async Task<ProjetoFluxoTrabalhoStatus> SavePartial(ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatus, bool questionToContinue = false)
        {
            var projetofluxotrabalhostatusOld = await this.GetOne(new ProjetoFluxoTrabalhoStatusFilter { ProjetoId = projetofluxotrabalhostatus.ProjetoId, FluxoTrabalhoStatusId = projetofluxotrabalhostatus.FluxoTrabalhoStatusId });
			var projetofluxotrabalhostatusOrchestrated = await this.DomainOrchestration(projetofluxotrabalhostatus, projetofluxotrabalhostatusOld);

            if (questionToContinue)
            {
                if (base.Continue(projetofluxotrabalhostatusOrchestrated, projetofluxotrabalhostatusOld) == false)
                    return projetofluxotrabalhostatusOrchestrated;
            }

            return SaveWithOutValidation(projetofluxotrabalhostatusOrchestrated, projetofluxotrabalhostatusOld);
        }

        protected override ProjetoFluxoTrabalhoStatus SaveWithOutValidation(ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatus, ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatusOld)
        {
            projetofluxotrabalhostatus = this.SaveDefault(projetofluxotrabalhostatus, projetofluxotrabalhostatusOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return projetofluxotrabalhostatus;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "projetofluxotrabalhostatus Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return projetofluxotrabalhostatus;

        }

		protected override ProjetoFluxoTrabalhoStatus SaveWithValidation(ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatus, ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatusOld)
        {
            if (!this.DataAnnotationIsValid())
                return projetofluxotrabalhostatus;

            if (!projetofluxotrabalhostatus.IsValid())
            {
                base._validationResult = projetofluxotrabalhostatus.GetDomainValidation();
                return projetofluxotrabalhostatus;
            }

            this.Specifications(projetofluxotrabalhostatus);

            if (!base._validationResult.IsValid)
                return projetofluxotrabalhostatus;
            
            projetofluxotrabalhostatus = this.SaveDefault(projetofluxotrabalhostatus, projetofluxotrabalhostatusOld);
            base._validationResult.Message = "ProjetoFluxoTrabalhoStatus cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return projetofluxotrabalhostatus;
        }

		protected virtual void Specifications(ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatus)
        {
            base._validationResult  = new ProjetoFluxoTrabalhoStatusAptoParaCadastroValidation(this._rep).Validate(projetofluxotrabalhostatus);
			base._validationWarning  = new ProjetoFluxoTrabalhoStatusAptoParaCadastroWarning(this._rep).Validate(projetofluxotrabalhostatus);
        }

        protected virtual ProjetoFluxoTrabalhoStatus SaveDefault(ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatus, ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatusOld)
        {
			

            var isNew = projetofluxotrabalhostatusOld.IsNull();			
            if (isNew)
                projetofluxotrabalhostatus = this.AddDefault(projetofluxotrabalhostatus);
            else
				projetofluxotrabalhostatus = this.UpdateDefault(projetofluxotrabalhostatus);

            return projetofluxotrabalhostatus;
        }
		
        protected virtual ProjetoFluxoTrabalhoStatus AddDefault(ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatus)
        {
            projetofluxotrabalhostatus = this._rep.Add(projetofluxotrabalhostatus);
            return projetofluxotrabalhostatus;
        }

		protected virtual ProjetoFluxoTrabalhoStatus UpdateDefault(ProjetoFluxoTrabalhoStatus projetofluxotrabalhostatus)
        {
            projetofluxotrabalhostatus = this._rep.Update(projetofluxotrabalhostatus);
            return projetofluxotrabalhostatus;
        }
				
		public virtual async Task<ProjetoFluxoTrabalhoStatus> GetDefaultInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new ProjetoFluxoTrabalhoStatus.ProjetoFluxoTrabalhoStatusFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
