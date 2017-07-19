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
    public class PendenciaApplicationServiceBase : ApplicationServiceBase<Pendencia, PendenciaDto, PendenciaFilter>, IPendenciaApplicationService
    {
        protected readonly ValidatorAnnotations<PendenciaDto> _validatorAnnotations;
        protected readonly IPendenciaService _service;
		    protected readonly CurrentUser _user;

        public PendenciaApplicationServiceBase(IPendenciaService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("Pendencia");
            this._validatorAnnotations = new ValidatorAnnotations<PendenciaDto>();
            this._service = service;
			      this._user = user;
        }

        protected override Pendencia MapperDtoToDomain<TDS>(TDS dto)
        {
			      var _dto = dto as PendenciaDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
			      var domain = new Pendencia.PendenciaFactory().GetDefaultInstance(_dto, this._user);
            return domain;
        }

        protected override async Task<Pendencia> AlterDomainWithDto<TDS>(TDS dto)
        {
			      var pendencia = dto as PendenciaDto;
            var result = await this._serviceBase.GetOne(new PendenciaFilter { PendenciaId = pendencia.PendenciaId });
            return result;
        }

    }
}
