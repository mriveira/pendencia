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
    public class ComentarioDocumentoApplicationServiceBase : ApplicationServiceBase<ComentarioDocumento, ComentarioDocumentoDto, ComentarioDocumentoFilter>, IComentarioDocumentoApplicationService
    {
        protected readonly ValidatorAnnotations<ComentarioDocumentoDto> _validatorAnnotations;
        protected readonly IComentarioDocumentoService _service;
		protected readonly CurrentUser _user;

        public ComentarioDocumentoApplicationServiceBase(IComentarioDocumentoService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("ComentarioDocumento");
            this._validatorAnnotations = new ValidatorAnnotations<ComentarioDocumentoDto>();
            this._service = service;
			this._user = user;
        }

        protected override ComentarioDocumento MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as ComentarioDocumentoDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
			var domain = new ComentarioDocumento.ComentarioDocumentoFactory().GetDefaultInstance(_dto, this._user);
            return domain;
        }

        protected override async Task<ComentarioDocumento> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as ComentarioDocumentoDto;
				var domain = new ComentarioDocumento.ComentarioDocumentoFactory().GetDefaultInstance(_dto, this._user);
				return domain;
			});
        }

    }
}
