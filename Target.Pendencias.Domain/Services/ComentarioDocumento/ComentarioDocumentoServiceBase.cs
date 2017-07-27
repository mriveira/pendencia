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
    public class ComentarioDocumentoServiceBase : ServiceBase<ComentarioDocumento>
    {
        protected readonly IComentarioDocumentoRepository _rep;

        public ComentarioDocumentoServiceBase(IComentarioDocumentoRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<ComentarioDocumento> GetOne(ComentarioDocumentoFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<ComentarioDocumento>> GetByFilters(ComentarioDocumentoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<ComentarioDocumento>> GetByFiltersPaging(ComentarioDocumentoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public virtual void Remove(ComentarioDocumento comentariodocumento)
        {
            this._rep.Remove(comentariodocumento);
        }

        public virtual Summary GetSummary(PaginateResult<ComentarioDocumento> paginateResult)
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

        public override async Task<ComentarioDocumento> Save(ComentarioDocumento comentariodocumento, bool questionToContinue = false)
        {
			var comentariodocumentoOld = await this.GetOne(new ComentarioDocumentoFilter { DocumentoId = comentariodocumento.DocumentoId, ComentarioId = comentariodocumento.ComentarioId });
			var comentariodocumentoOrchestrated = await this.DomainOrchestration(comentariodocumento, comentariodocumentoOld);

            if (questionToContinue)
            {
                if (base.Continue(comentariodocumentoOrchestrated, comentariodocumentoOld) == false)
                    return comentariodocumentoOrchestrated;
            }

            return this.SaveWithValidation(comentariodocumentoOrchestrated, comentariodocumentoOld);
        }

        public override async Task<ComentarioDocumento> SavePartial(ComentarioDocumento comentariodocumento, bool questionToContinue = false)
        {
            var comentariodocumentoOld = await this.GetOne(new ComentarioDocumentoFilter { DocumentoId = comentariodocumento.DocumentoId, ComentarioId = comentariodocumento.ComentarioId });
			var comentariodocumentoOrchestrated = await this.DomainOrchestration(comentariodocumento, comentariodocumentoOld);

            if (questionToContinue)
            {
                if (base.Continue(comentariodocumentoOrchestrated, comentariodocumentoOld) == false)
                    return comentariodocumentoOrchestrated;
            }

            return SaveWithOutValidation(comentariodocumentoOrchestrated, comentariodocumentoOld);
        }

        protected override ComentarioDocumento SaveWithOutValidation(ComentarioDocumento comentariodocumento, ComentarioDocumento comentariodocumentoOld)
        {
            comentariodocumento = this.SaveDefault(comentariodocumento, comentariodocumentoOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return comentariodocumento;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "comentariodocumento Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return comentariodocumento;

        }

		protected override ComentarioDocumento SaveWithValidation(ComentarioDocumento comentariodocumento, ComentarioDocumento comentariodocumentoOld)
        {
            if (!this.DataAnnotationIsValid())
                return comentariodocumento;

            if (!comentariodocumento.IsValid())
            {
                base._validationResult = comentariodocumento.GetDomainValidation();
                return comentariodocumento;
            }

            this.Specifications(comentariodocumento);

            if (!base._validationResult.IsValid)
                return comentariodocumento;
            
            comentariodocumento = this.SaveDefault(comentariodocumento, comentariodocumentoOld);
            base._validationResult.Message = "ComentarioDocumento cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return comentariodocumento;
        }

		protected virtual void Specifications(ComentarioDocumento comentariodocumento)
        {
            base._validationResult  = new ComentarioDocumentoAptoParaCadastroValidation(this._rep).Validate(comentariodocumento);
			base._validationWarning  = new ComentarioDocumentoAptoParaCadastroWarning(this._rep).Validate(comentariodocumento);
        }

        protected virtual ComentarioDocumento SaveDefault(ComentarioDocumento comentariodocumento, ComentarioDocumento comentariodocumentoOld)
        {
			

            var isNew = comentariodocumentoOld.IsNull();			
            if (isNew)
                comentariodocumento = this.AddDefault(comentariodocumento);
            else
				comentariodocumento = this.UpdateDefault(comentariodocumento);

            return comentariodocumento;
        }
		
        protected virtual ComentarioDocumento AddDefault(ComentarioDocumento comentariodocumento)
        {
            comentariodocumento = this._rep.Add(comentariodocumento);
            return comentariodocumento;
        }

		protected virtual ComentarioDocumento UpdateDefault(ComentarioDocumento comentariodocumento)
        {
            comentariodocumento = this._rep.Update(comentariodocumento);
            return comentariodocumento;
        }
				
		public virtual async Task<ComentarioDocumento> GetDefaultInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new ComentarioDocumento.ComentarioDocumentoFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
