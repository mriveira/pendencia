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
    public class ProjetoDocumentoServiceBase : ServiceBase<ProjetoDocumento>
    {
        protected readonly IProjetoDocumentoRepository _rep;

        public ProjetoDocumentoServiceBase(IProjetoDocumentoRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<ProjetoDocumento> GetOne(ProjetoDocumentoFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<ProjetoDocumento>> GetByFilters(ProjetoDocumentoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<ProjetoDocumento>> GetByFiltersPaging(ProjetoDocumentoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(ProjetoDocumento projetodocumento)
        {
            this._rep.Remove(projetodocumento);
        }

        public virtual Summary GetSummary(PaginateResult<ProjetoDocumento> paginateResult)
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

        public override async Task<ProjetoDocumento> Save(ProjetoDocumento projetodocumento, bool questionToContinue = false)
        {
			var projetodocumentoOld = await this.GetOne(new ProjetoDocumentoFilter { ProjetoId = projetodocumento.ProjetoId, DocumentoId = projetodocumento.DocumentoId });
			var projetodocumentoOrchestrated = await this.DomainOrchestration(projetodocumento, projetodocumentoOld);

            if (questionToContinue)
            {
                if (base.Continue(projetodocumentoOrchestrated, projetodocumentoOld) == false)
                    return projetodocumentoOrchestrated;
            }

            return this.SaveWithValidation(projetodocumentoOrchestrated, projetodocumentoOld);
        }

        public override async Task<ProjetoDocumento> SavePartial(ProjetoDocumento projetodocumento, bool questionToContinue = false)
        {
            var projetodocumentoOld = await this.GetOne(new ProjetoDocumentoFilter { ProjetoId = projetodocumento.ProjetoId, DocumentoId = projetodocumento.DocumentoId });
			var projetodocumentoOrchestrated = await this.DomainOrchestration(projetodocumento, projetodocumentoOld);

            if (questionToContinue)
            {
                if (base.Continue(projetodocumentoOrchestrated, projetodocumentoOld) == false)
                    return projetodocumentoOrchestrated;
            }

            return SaveWithOutValidation(projetodocumentoOrchestrated, projetodocumentoOld);
        }

        protected override ProjetoDocumento SaveWithOutValidation(ProjetoDocumento projetodocumento, ProjetoDocumento projetodocumentoOld)
        {
            projetodocumento = this.SaveDefault(projetodocumento, projetodocumentoOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return projetodocumento;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "projetodocumento Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return projetodocumento;

        }

		protected override ProjetoDocumento SaveWithValidation(ProjetoDocumento projetodocumento, ProjetoDocumento projetodocumentoOld)
        {
            if (!this.DataAnnotationIsValid())
                return projetodocumento;

            if (!projetodocumento.IsValid())
            {
                base._validationResult = projetodocumento.GetDomainValidation();
                return projetodocumento;
            }

            this.Specifications(projetodocumento);

            if (!base._validationResult.IsValid)
                return projetodocumento;
            
            projetodocumento = this.SaveDefault(projetodocumento, projetodocumentoOld);
            base._validationResult.Message = "ProjetoDocumento cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return projetodocumento;
        }

		protected virtual void Specifications(ProjetoDocumento projetodocumento)
        {
            base._validationResult  = new ProjetoDocumentoAptoParaCadastroValidation(this._rep).Validate(projetodocumento);
			base._validationWarning  = new ProjetoDocumentoAptoParaCadastroWarning(this._rep).Validate(projetodocumento);
        }

        protected virtual ProjetoDocumento SaveDefault(ProjetoDocumento projetodocumento, ProjetoDocumento projetodocumentoOld)
        {
			

            var isNew = projetodocumentoOld.IsNull();			
            if (isNew)
                projetodocumento = this.AddDefault(projetodocumento);
            else
				projetodocumento = this.UpdateDefault(projetodocumento);

            return projetodocumento;
        }
		
        protected virtual ProjetoDocumento AddDefault(ProjetoDocumento projetodocumento)
        {
            projetodocumento = this._rep.Add(projetodocumento);
            return projetodocumento;
        }

		protected virtual ProjetoDocumento UpdateDefault(ProjetoDocumento projetodocumento)
        {
            projetodocumento = this._rep.Update(projetodocumento);
            return projetodocumento;
        }
				
		public virtual async Task<ProjetoDocumento> GetNewInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new ProjetoDocumento.ProjetoDocumentoFactory().GetDefaultInstance(model, user);
            });
         }

		public virtual async Task<ProjetoDocumento> GetUpdateInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new ProjetoDocumento.ProjetoDocumentoFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
