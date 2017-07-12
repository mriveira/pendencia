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
			var _fluxotrabalhostatus = dto as FluxoTrabalhoStatusDtoSpecialized;
            this._validatorAnnotations.Validate(_fluxotrabalhostatus);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());

			var domain = new FluxoTrabalhoStatus.FluxoTrabalhoStatusFactory().GetDefaaultInstance(_fluxotrabalhostatus, this._user);
            return domain;
        }


        protected override async Task<FluxoTrabalhoStatus> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _fluxotrabalhostatus = dto as FluxoTrabalhoStatusDto;
				//var result = await this._serviceBase.GetOne(new FluxoTrabalhoStatusFilter { FluxoTrabalhoStatusId = fluxotrabalhostatus.FluxoTrabalhoStatusId });
				var result = new FluxoTrabalhoStatus.FluxoTrabalhoStatusFactory().GetDefaaultInstance(_fluxotrabalhostatus, this._user);
				//Inicio da Transferencia dos valores
           

				//Fim da Transferencia dos valores

				return result;
			});

        }

    }
}
