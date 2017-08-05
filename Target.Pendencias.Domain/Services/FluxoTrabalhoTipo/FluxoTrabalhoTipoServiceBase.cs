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
    public class FluxoTrabalhoTipoServiceBase : ServiceBase<FluxoTrabalhoTipo>
    {
        protected readonly IFluxoTrabalhoTipoRepository _rep;

        public FluxoTrabalhoTipoServiceBase(IFluxoTrabalhoTipoRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<FluxoTrabalhoTipo> GetOne(FluxoTrabalhoTipoFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<FluxoTrabalhoTipo>> GetByFilters(FluxoTrabalhoTipoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<FluxoTrabalhoTipo>> GetByFiltersPaging(FluxoTrabalhoTipoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(FluxoTrabalhoTipo fluxotrabalhotipo)
        {
            this._rep.Remove(fluxotrabalhotipo);
        }

        public virtual Summary GetSummary(PaginateResult<FluxoTrabalhoTipo> paginateResult)
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

        public override async Task<FluxoTrabalhoTipo> Save(FluxoTrabalhoTipo fluxotrabalhotipo, bool questionToContinue = false)
        {
			var fluxotrabalhotipoOld = await this.GetOne(new FluxoTrabalhoTipoFilter { FluxoTrabalhoTipoId = fluxotrabalhotipo.FluxoTrabalhoTipoId });
			var fluxotrabalhotipoOrchestrated = await this.DomainOrchestration(fluxotrabalhotipo, fluxotrabalhotipoOld);

            if (questionToContinue)
            {
                if (base.Continue(fluxotrabalhotipoOrchestrated, fluxotrabalhotipoOld) == false)
                    return fluxotrabalhotipoOrchestrated;
            }

            return this.SaveWithValidation(fluxotrabalhotipoOrchestrated, fluxotrabalhotipoOld);
        }

        public override async Task<FluxoTrabalhoTipo> SavePartial(FluxoTrabalhoTipo fluxotrabalhotipo, bool questionToContinue = false)
        {
            var fluxotrabalhotipoOld = await this.GetOne(new FluxoTrabalhoTipoFilter { FluxoTrabalhoTipoId = fluxotrabalhotipo.FluxoTrabalhoTipoId });
			var fluxotrabalhotipoOrchestrated = await this.DomainOrchestration(fluxotrabalhotipo, fluxotrabalhotipoOld);

            if (questionToContinue)
            {
                if (base.Continue(fluxotrabalhotipoOrchestrated, fluxotrabalhotipoOld) == false)
                    return fluxotrabalhotipoOrchestrated;
            }

            return SaveWithOutValidation(fluxotrabalhotipoOrchestrated, fluxotrabalhotipoOld);
        }

        protected override FluxoTrabalhoTipo SaveWithOutValidation(FluxoTrabalhoTipo fluxotrabalhotipo, FluxoTrabalhoTipo fluxotrabalhotipoOld)
        {
            fluxotrabalhotipo = this.SaveDefault(fluxotrabalhotipo, fluxotrabalhotipoOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return fluxotrabalhotipo;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "fluxotrabalhotipo Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return fluxotrabalhotipo;

        }

		protected override FluxoTrabalhoTipo SaveWithValidation(FluxoTrabalhoTipo fluxotrabalhotipo, FluxoTrabalhoTipo fluxotrabalhotipoOld)
        {
            if (!this.DataAnnotationIsValid())
                return fluxotrabalhotipo;

            if (!fluxotrabalhotipo.IsValid())
            {
                base._validationResult = fluxotrabalhotipo.GetDomainValidation();
                return fluxotrabalhotipo;
            }

            this.Specifications(fluxotrabalhotipo);

            if (!base._validationResult.IsValid)
                return fluxotrabalhotipo;
            
            fluxotrabalhotipo = this.SaveDefault(fluxotrabalhotipo, fluxotrabalhotipoOld);
            base._validationResult.Message = "FluxoTrabalhoTipo cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return fluxotrabalhotipo;
        }

		protected virtual void Specifications(FluxoTrabalhoTipo fluxotrabalhotipo)
        {
            base._validationResult  = new FluxoTrabalhoTipoAptoParaCadastroValidation(this._rep).Validate(fluxotrabalhotipo);
			base._validationWarning  = new FluxoTrabalhoTipoAptoParaCadastroWarning(this._rep).Validate(fluxotrabalhotipo);
        }

        protected virtual FluxoTrabalhoTipo SaveDefault(FluxoTrabalhoTipo fluxotrabalhotipo, FluxoTrabalhoTipo fluxotrabalhotipoOld)
        {
			

            var isNew = fluxotrabalhotipoOld.IsNull();			
            if (isNew)
                fluxotrabalhotipo = this.AddDefault(fluxotrabalhotipo);
            else
				fluxotrabalhotipo = this.UpdateDefault(fluxotrabalhotipo);

            return fluxotrabalhotipo;
        }
		
        protected virtual FluxoTrabalhoTipo AddDefault(FluxoTrabalhoTipo fluxotrabalhotipo)
        {
            fluxotrabalhotipo = this._rep.Add(fluxotrabalhotipo);
            return fluxotrabalhotipo;
        }

		protected virtual FluxoTrabalhoTipo UpdateDefault(FluxoTrabalhoTipo fluxotrabalhotipo)
        {
            fluxotrabalhotipo = this._rep.Update(fluxotrabalhotipo);
            return fluxotrabalhotipo;
        }
				
		public virtual async Task<FluxoTrabalhoTipo> GetNewInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new FluxoTrabalhoTipo.FluxoTrabalhoTipoFactory().GetDefaultInstance(model, user);
            });
         }

		public virtual async Task<FluxoTrabalhoTipo> GetUpdateInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new FluxoTrabalhoTipo.FluxoTrabalhoTipoFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
