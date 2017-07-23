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
    public class FluxoTrabalhoStatusApplicationServiceBase : ApplicationServiceBase<FluxoTrabalhoStatus, FluxoTrabalhoStatusDto, FluxoTrabalhoStatusFilter>, IFluxoTrabalhoStatusApplicationService
    {
        protected readonly ValidatorAnnotations<FluxoTrabalhoStatusDto> _validatorAnnotations;
        protected readonly IFluxoTrabalhoStatusService _service;
		protected readonly CurrentUser _user;

        public FluxoTrabalhoStatusApplicationServiceBase(IFluxoTrabalhoStatusService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("FluxoTrabalhoStatus");
            this._validatorAnnotations = new ValidatorAnnotations<FluxoTrabalhoStatusDto>();
            this._service = service;
			this._user = user;
        }

        protected override FluxoTrabalhoStatus MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as FluxoTrabalhoStatusDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
			var domain = new FluxoTrabalhoStatus.FluxoTrabalhoStatusFactory().GetDefaultInstance(_dto, this._user);
            return domain;
        }

        protected override async Task<FluxoTrabalhoStatus> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as FluxoTrabalhoStatusDto;
				var domain = new FluxoTrabalhoStatus.FluxoTrabalhoStatusFactory().GetDefaultInstance(_dto, this._user);
				return domain;
			});
        }

    }
}
