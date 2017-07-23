using Common.Domain.Base;
using Common.Domain.Interfaces;
using Common.Dto;
using Target.Pendencias.Application.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using Target.Pendencias.Domain.Interfaces.Services;
using Target.Pendencias.Dto;
using System.Threading.Tasks;
using Common.Domain.Model;

namespace Target.Pendencias.Application
{
    public class DocumentoApplicationServiceBase : ApplicationServiceBase<Documento, DocumentoDto, DocumentoFilter>, IDocumentoApplicationService
    {
        protected readonly ValidatorAnnotations<DocumentoDto> _validatorAnnotations;
        protected readonly IDocumentoService _service;
		protected readonly CurrentUser _user;

        public DocumentoApplicationServiceBase(IDocumentoService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("Documento");
            this._validatorAnnotations = new ValidatorAnnotations<DocumentoDto>();
            this._service = service;
			this._user = user;
        }

        protected override Documento MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as DocumentoDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
			var domain = new Documento.DocumentoFactory().GetDefaultInstance(_dto, this._user);
            return domain;
        }

        protected override async Task<Documento> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as DocumentoDto;
				var domain = new Documento.DocumentoFactory().GetDefaultInstance(_dto, this._user);
				return domain;
			});
        }

    }
}
