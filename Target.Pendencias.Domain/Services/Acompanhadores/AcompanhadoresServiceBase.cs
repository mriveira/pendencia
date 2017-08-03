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
    public class AcompanhadoresServiceBase : ServiceBase<Acompanhadores>
    {
        protected readonly IAcompanhadoresRepository _rep;

        public AcompanhadoresServiceBase(IAcompanhadoresRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<Acompanhadores> GetOne(AcompanhadoresFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<Acompanhadores>> GetByFilters(AcompanhadoresFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<Acompanhadores>> GetByFiltersPaging(AcompanhadoresFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(Acompanhadores acompanhadores)
        {
            this._rep.Remove(acompanhadores);
        }

        public virtual Summary GetSummary(PaginateResult<Acompanhadores> paginateResult)
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

        public override async Task<Acompanhadores> Save(Acompanhadores acompanhadores, bool questionToContinue = false)
        {
			var acompanhadoresOld = await this.GetOne(new AcompanhadoresFilter { PendenciaId = acompanhadores.PendenciaId, UsuarioId = acompanhadores.UsuarioId });
			var acompanhadoresOrchestrated = await this.DomainOrchestration(acompanhadores, acompanhadoresOld);

            if (questionToContinue)
            {
                if (base.Continue(acompanhadoresOrchestrated, acompanhadoresOld) == false)
                    return acompanhadoresOrchestrated;
            }

            return this.SaveWithValidation(acompanhadoresOrchestrated, acompanhadoresOld);
        }

        public override async Task<Acompanhadores> SavePartial(Acompanhadores acompanhadores, bool questionToContinue = false)
        {
            var acompanhadoresOld = await this.GetOne(new AcompanhadoresFilter { PendenciaId = acompanhadores.PendenciaId, UsuarioId = acompanhadores.UsuarioId });
			var acompanhadoresOrchestrated = await this.DomainOrchestration(acompanhadores, acompanhadoresOld);

            if (questionToContinue)
            {
                if (base.Continue(acompanhadoresOrchestrated, acompanhadoresOld) == false)
                    return acompanhadoresOrchestrated;
            }

            return SaveWithOutValidation(acompanhadoresOrchestrated, acompanhadoresOld);
        }

        protected override Acompanhadores SaveWithOutValidation(Acompanhadores acompanhadores, Acompanhadores acompanhadoresOld)
        {
            acompanhadores = this.SaveDefault(acompanhadores, acompanhadoresOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return acompanhadores;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "acompanhadores Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return acompanhadores;

        }

		protected override Acompanhadores SaveWithValidation(Acompanhadores acompanhadores, Acompanhadores acompanhadoresOld)
        {
            if (!this.DataAnnotationIsValid())
                return acompanhadores;

            if (!acompanhadores.IsValid())
            {
                base._validationResult = acompanhadores.GetDomainValidation();
                return acompanhadores;
            }

            this.Specifications(acompanhadores);

            if (!base._validationResult.IsValid)
                return acompanhadores;
            
            acompanhadores = this.SaveDefault(acompanhadores, acompanhadoresOld);
            base._validationResult.Message = "Acompanhadores cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return acompanhadores;
        }

		protected virtual void Specifications(Acompanhadores acompanhadores)
        {
            base._validationResult  = new AcompanhadoresAptoParaCadastroValidation(this._rep).Validate(acompanhadores);
			base._validationWarning  = new AcompanhadoresAptoParaCadastroWarning(this._rep).Validate(acompanhadores);
        }

        protected virtual Acompanhadores SaveDefault(Acompanhadores acompanhadores, Acompanhadores acompanhadoresOld)
        {
			

            var isNew = acompanhadoresOld.IsNull();			
            if (isNew)
                acompanhadores = this.AddDefault(acompanhadores);
            else
				acompanhadores = this.UpdateDefault(acompanhadores);

            return acompanhadores;
        }
		
        protected virtual Acompanhadores AddDefault(Acompanhadores acompanhadores)
        {
            acompanhadores = this._rep.Add(acompanhadores);
            return acompanhadores;
        }

		protected virtual Acompanhadores UpdateDefault(Acompanhadores acompanhadores)
        {
            acompanhadores = this._rep.Update(acompanhadores);
            return acompanhadores;
        }
				
		public virtual async Task<Acompanhadores> GetDefaultInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new Acompanhadores.AcompanhadoresFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
