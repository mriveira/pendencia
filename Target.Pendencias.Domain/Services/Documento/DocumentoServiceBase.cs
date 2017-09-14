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
    public class DocumentoServiceBase : ServiceBase<Documento>
    {
        protected readonly IDocumentoRepository _rep;

        public DocumentoServiceBase(IDocumentoRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<Documento> GetOne(DocumentoFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<Documento>> GetByFilters(DocumentoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<Documento>> GetByFiltersPaging(DocumentoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(Documento documento)
        {
            this._rep.Remove(documento);
        }

        public virtual Summary GetSummary(PaginateResult<Documento> paginateResult)
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

        public override async Task<Documento> Save(Documento documento, bool questionToContinue = false)
        {
			var documentoOld = await this.GetOne(new DocumentoFilter { DocumentoId = documento.DocumentoId });
			var documentoOrchestrated = await this.DomainOrchestration(documento, documentoOld);

            if (questionToContinue)
            {
                if (base.Continue(documentoOrchestrated, documentoOld) == false)
                    return documentoOrchestrated;
            }

            return this.SaveWithValidation(documentoOrchestrated, documentoOld);
        }

        public override async Task<Documento> SavePartial(Documento documento, bool questionToContinue = false)
        {
            var documentoOld = await this.GetOne(new DocumentoFilter { DocumentoId = documento.DocumentoId });
			var documentoOrchestrated = await this.DomainOrchestration(documento, documentoOld);

            if (questionToContinue)
            {
                if (base.Continue(documentoOrchestrated, documentoOld) == false)
                    return documentoOrchestrated;
            }

            return SaveWithOutValidation(documentoOrchestrated, documentoOld);
        }

        protected override Documento SaveWithOutValidation(Documento documento, Documento documentoOld)
        {
            documento = this.SaveDefault(documento, documentoOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return documento;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "documento Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return documento;

        }

		protected override Documento SaveWithValidation(Documento documento, Documento documentoOld)
        {
            if (!this.DataAnnotationIsValid())
                return documento;

            if (!documento.IsValid())
            {
                base._validationResult = documento.GetDomainValidation();
                return documento;
            }

            this.Specifications(documento);

            if (!base._validationResult.IsValid)
                return documento;
            
            documento = this.SaveDefault(documento, documentoOld);
            base._validationResult.Message = "Documento cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return documento;
        }

		protected virtual void Specifications(Documento documento)
        {
            base._validationResult  = new DocumentoAptoParaCadastroValidation(this._rep).Validate(documento);
			base._validationWarning  = new DocumentoAptoParaCadastroWarning(this._rep).Validate(documento);
        }

        protected virtual Documento SaveDefault(Documento documento, Documento documentoOld)
        {
			

            var isNew = documentoOld.IsNull();			
            if (isNew)
                documento = this.AddDefault(documento);
            else
				documento = this.UpdateDefault(documento);

            return documento;
        }
		
        protected virtual Documento AddDefault(Documento documento)
        {
            documento = this._rep.Add(documento);
            return documento;
        }

		protected virtual Documento UpdateDefault(Documento documento)
        {
            documento = this._rep.Update(documento);
            return documento;
        }
				
		public virtual async Task<Documento> GetNewInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new Documento.DocumentoFactory().GetDefaultInstance(model, user);
            });
         }

		public virtual async Task<Documento> GetUpdateInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new Documento.DocumentoFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
