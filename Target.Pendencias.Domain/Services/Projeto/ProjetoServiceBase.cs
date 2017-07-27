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
    public class ProjetoServiceBase : ServiceBase<Projeto>
    {
        protected readonly IProjetoRepository _rep;

        public ProjetoServiceBase(IProjetoRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<Projeto> GetOne(ProjetoFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<Projeto>> GetByFilters(ProjetoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<Projeto>> GetByFiltersPaging(ProjetoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public virtual void Remove(Projeto projeto)
        {
            this._rep.Remove(projeto);
        }

        public virtual Summary GetSummary(PaginateResult<Projeto> paginateResult)
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

        public override async Task<Projeto> Save(Projeto projeto, bool questionToContinue = false)
        {
			var projetoOld = await this.GetOne(new ProjetoFilter { ProjetoId = projeto.ProjetoId });
			var projetoOrchestrated = await this.DomainOrchestration(projeto, projetoOld);

            if (questionToContinue)
            {
                if (base.Continue(projetoOrchestrated, projetoOld) == false)
                    return projetoOrchestrated;
            }

            return this.SaveWithValidation(projetoOrchestrated, projetoOld);
        }

        public override async Task<Projeto> SavePartial(Projeto projeto, bool questionToContinue = false)
        {
            var projetoOld = await this.GetOne(new ProjetoFilter { ProjetoId = projeto.ProjetoId });
			var projetoOrchestrated = await this.DomainOrchestration(projeto, projetoOld);

            if (questionToContinue)
            {
                if (base.Continue(projetoOrchestrated, projetoOld) == false)
                    return projetoOrchestrated;
            }

            return SaveWithOutValidation(projetoOrchestrated, projetoOld);
        }

        protected override Projeto SaveWithOutValidation(Projeto projeto, Projeto projetoOld)
        {
            projeto = this.SaveDefault(projeto, projetoOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return projeto;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "projeto Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return projeto;

        }

		protected override Projeto SaveWithValidation(Projeto projeto, Projeto projetoOld)
        {
            if (!this.DataAnnotationIsValid())
                return projeto;

            if (!projeto.IsValid())
            {
                base._validationResult = projeto.GetDomainValidation();
                return projeto;
            }

            this.Specifications(projeto);

            if (!base._validationResult.IsValid)
                return projeto;
            
            projeto = this.SaveDefault(projeto, projetoOld);
            base._validationResult.Message = "Projeto cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return projeto;
        }

		protected virtual void Specifications(Projeto projeto)
        {
            base._validationResult  = new ProjetoAptoParaCadastroValidation(this._rep).Validate(projeto);
			base._validationWarning  = new ProjetoAptoParaCadastroWarning(this._rep).Validate(projeto);
        }

        protected virtual Projeto SaveDefault(Projeto projeto, Projeto projetoOld)
        {
			projeto = this.AuditDefault(projeto, projetoOld);

            var isNew = projetoOld.IsNull();			
            if (isNew)
                projeto = this.AddDefault(projeto);
            else
				projeto = this.UpdateDefault(projeto);

            return projeto;
        }
		
        protected virtual Projeto AddDefault(Projeto projeto)
        {
            projeto = this._rep.Add(projeto);
            return projeto;
        }

		protected virtual Projeto UpdateDefault(Projeto projeto)
        {
            projeto = this._rep.Update(projeto);
            return projeto;
        }
				
		public virtual async Task<Projeto> GetDefaultInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new Projeto.ProjetoFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
