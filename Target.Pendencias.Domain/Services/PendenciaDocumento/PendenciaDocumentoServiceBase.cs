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
    public class PendenciaDocumentoServiceBase : ServiceBase<PendenciaDocumento>
    {
        protected readonly IPendenciaDocumentoRepository _rep;

        public PendenciaDocumentoServiceBase(IPendenciaDocumentoRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<PendenciaDocumento> GetOne(PendenciaDocumentoFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<PendenciaDocumento>> GetByFilters(PendenciaDocumentoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<PendenciaDocumento>> GetByFiltersPaging(PendenciaDocumentoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(PendenciaDocumento pendenciadocumento)
        {
            this._rep.Remove(pendenciadocumento);
        }

        public virtual Summary GetSummary(PaginateResult<PendenciaDocumento> paginateResult)
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

        public override async Task<PendenciaDocumento> Save(PendenciaDocumento pendenciadocumento, bool questionToContinue = false)
        {
			var pendenciadocumentoOld = await this.GetOne(new PendenciaDocumentoFilter { PendenciaId = pendenciadocumento.PendenciaId, DocumentoId = pendenciadocumento.DocumentoId });
			var pendenciadocumentoOrchestrated = await this.DomainOrchestration(pendenciadocumento, pendenciadocumentoOld);

            if (questionToContinue)
            {
                if (base.Continue(pendenciadocumentoOrchestrated, pendenciadocumentoOld) == false)
                    return pendenciadocumentoOrchestrated;
            }

            return this.SaveWithValidation(pendenciadocumentoOrchestrated, pendenciadocumentoOld);
        }

        public override async Task<PendenciaDocumento> SavePartial(PendenciaDocumento pendenciadocumento, bool questionToContinue = false)
        {
            var pendenciadocumentoOld = await this.GetOne(new PendenciaDocumentoFilter { PendenciaId = pendenciadocumento.PendenciaId, DocumentoId = pendenciadocumento.DocumentoId });
			var pendenciadocumentoOrchestrated = await this.DomainOrchestration(pendenciadocumento, pendenciadocumentoOld);

            if (questionToContinue)
            {
                if (base.Continue(pendenciadocumentoOrchestrated, pendenciadocumentoOld) == false)
                    return pendenciadocumentoOrchestrated;
            }

            return SaveWithOutValidation(pendenciadocumentoOrchestrated, pendenciadocumentoOld);
        }

        protected override PendenciaDocumento SaveWithOutValidation(PendenciaDocumento pendenciadocumento, PendenciaDocumento pendenciadocumentoOld)
        {
            pendenciadocumento = this.SaveDefault(pendenciadocumento, pendenciadocumentoOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return pendenciadocumento;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "pendenciadocumento Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return pendenciadocumento;

        }

		protected override PendenciaDocumento SaveWithValidation(PendenciaDocumento pendenciadocumento, PendenciaDocumento pendenciadocumentoOld)
        {
            if (!this.DataAnnotationIsValid())
                return pendenciadocumento;

            if (!pendenciadocumento.IsValid())
            {
                base._validationResult = pendenciadocumento.GetDomainValidation();
                return pendenciadocumento;
            }

            this.Specifications(pendenciadocumento);

            if (!base._validationResult.IsValid)
                return pendenciadocumento;
            
            pendenciadocumento = this.SaveDefault(pendenciadocumento, pendenciadocumentoOld);
            base._validationResult.Message = "PendenciaDocumento cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return pendenciadocumento;
        }

		protected virtual void Specifications(PendenciaDocumento pendenciadocumento)
        {
            base._validationResult  = new PendenciaDocumentoAptoParaCadastroValidation(this._rep).Validate(pendenciadocumento);
			base._validationWarning  = new PendenciaDocumentoAptoParaCadastroWarning(this._rep).Validate(pendenciadocumento);
        }

        protected virtual PendenciaDocumento SaveDefault(PendenciaDocumento pendenciadocumento, PendenciaDocumento pendenciadocumentoOld)
        {
			

            var isNew = pendenciadocumentoOld.IsNull();			
            if (isNew)
                pendenciadocumento = this.AddDefault(pendenciadocumento);
            else
				pendenciadocumento = this.UpdateDefault(pendenciadocumento);

            return pendenciadocumento;
        }
		
        protected virtual PendenciaDocumento AddDefault(PendenciaDocumento pendenciadocumento)
        {
            pendenciadocumento = this._rep.Add(pendenciadocumento);
            return pendenciadocumento;
        }

		protected virtual PendenciaDocumento UpdateDefault(PendenciaDocumento pendenciadocumento)
        {
            pendenciadocumento = this._rep.Update(pendenciadocumento);
            return pendenciadocumento;
        }
				
		public virtual async Task<PendenciaDocumento> GetDefaultInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new PendenciaDocumento.PendenciaDocumentoFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
