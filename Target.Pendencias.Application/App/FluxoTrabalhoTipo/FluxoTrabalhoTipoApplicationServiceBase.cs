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
using System.Collections.Generic;

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

       protected override async Task<FluxoTrabalhoTipo> MapperDtoToDomain<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as FluxoTrabalhoTipoDtoSpecialized;
				this._validatorAnnotations.Validate(_dto);
				this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
				var domain = this._service.GetNewInstance(_dto, this._user);
				return domain;
			});
        }

		protected override async Task<IEnumerable<FluxoTrabalhoTipo>> MapperDtoToDomain<TDS>(IEnumerable<TDS> dtos)
        {
			var domains = new List<FluxoTrabalhoTipo>();
			foreach (var dto in dtos)
			{
				var _dto = dto as FluxoTrabalhoTipoDtoSpecialized;
				this._validatorAnnotations.Validate(_dto);
				this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
				var domain = await this._service.GetNewInstance(_dto, this._user);
				domains.Add(domain);
			}
			return domains;
			
        }


        protected override async Task<FluxoTrabalhoTipo> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as FluxoTrabalhoTipoDto;
				var domain = this._service.GetUpdateInstance(_dto, this._user);
				return domain;
			});
        }



    }
}
