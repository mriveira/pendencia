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
    public class FluxoTrabalhoTipoApplicationServiceBase : ApplicationServiceBase<FluxoTrabalhoTipo, FluxoTrabalhoTipoDto, FluxoTrabalhoTipoFilter>, IFluxoTrabalhoTipoApplicationService
    {
        protected readonly ValidatorAnnotations<FluxoTrabalhoTipoDto> _validatorAnnotations;
        protected readonly IFluxoTrabalhoTipoService _service;
		    protected readonly CurrentUser _user;

        public FluxoTrabalhoTipoApplicationServiceBase(IFluxoTrabalhoTipoService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("FluxoTrabalhoTipo");
            this._validatorAnnotations = new ValidatorAnnotations<FluxoTrabalhoTipoDto>();
            this._service = service;
			      this._user = user;
        }

        protected override FluxoTrabalhoTipo MapperDtoToDomain<TDS>(TDS dto)
        {
			      var _dto = dto as FluxoTrabalhoTipoDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
			      var domain = new FluxoTrabalhoTipo.FluxoTrabalhoTipoFactory().GetDefaultInstance(_dto, this._user);
            return domain;
        }

        protected override async Task<FluxoTrabalhoTipo> AlterDomainWithDto<TDS>(TDS dto)
        {
			      var fluxotrabalhotipo = dto as FluxoTrabalhoTipoDto;
            var result = await this._serviceBase.GetOne(new FluxoTrabalhoTipoFilter { FluxoTrabalhoTipoId = fluxotrabalhotipo.FluxoTrabalhoTipoId });
            return result;
        }

    }
}
