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
    public class PendenciaDocumentoApplicationServiceBase : ApplicationServiceBase<PendenciaDocumento, PendenciaDocumentoDto, PendenciaDocumentoFilter>, IPendenciaDocumentoApplicationService
    {
        protected readonly ValidatorAnnotations<PendenciaDocumentoDto> _validatorAnnotations;
        protected readonly IPendenciaDocumentoService _service;
		protected readonly CurrentUser _user;

        public PendenciaDocumentoApplicationServiceBase(IPendenciaDocumentoService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("PendenciaDocumento");
            this._validatorAnnotations = new ValidatorAnnotations<PendenciaDocumentoDto>();
            this._service = service;
			this._user = user;
        }

        protected override PendenciaDocumento MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as PendenciaDocumentoDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
			var domain = new PendenciaDocumento.PendenciaDocumentoFactory().GetDefaultInstance(_dto, this._user);
            return domain;
        }

        protected override async Task<PendenciaDocumento> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as PendenciaDocumentoDto;
				var domain = new PendenciaDocumento.PendenciaDocumentoFactory().GetDefaultInstance(_dto, this._user);
				return domain;
			});
        }

    }
}
