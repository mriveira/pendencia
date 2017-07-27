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
    public class UsuarioTipoApplicationServiceBase : ApplicationServiceBase<UsuarioTipo, UsuarioTipoDto, UsuarioTipoFilter>, IUsuarioTipoApplicationService
    {
        protected readonly ValidatorAnnotations<UsuarioTipoDto> _validatorAnnotations;
        protected readonly IUsuarioTipoService _service;
		protected readonly CurrentUser _user;

        public UsuarioTipoApplicationServiceBase(IUsuarioTipoService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("UsuarioTipo");
            this._validatorAnnotations = new ValidatorAnnotations<UsuarioTipoDto>();
            this._service = service;
			this._user = user;
        }

        protected override async Task<UsuarioTipo> MapperDtoToDomain<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as UsuarioTipoDtoSpecialized;
				this._validatorAnnotations.Validate(_dto);
				this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
				var domain = this._service.GetDefaultInstance(_dto, this._user);
				return domain;
			});
        }

		protected override async Task<IEnumerable<UsuarioTipo>> MapperDtoToDomain<TDS>(IEnumerable<TDS> dtos)
        {
			var domains = new List<UsuarioTipo>();
			foreach (var dto in dtos)
			{
				var _dto = dto as UsuarioTipoDtoSpecialized;
				this._validatorAnnotations.Validate(_dto);
				this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
				var domain = await this._service.GetDefaultInstance(_dto, this._user);
				domains.Add(domain);
			}
			return domains;
			
        }


        protected override async Task<UsuarioTipo> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as UsuarioTipoDto;
				var domain = this._service.GetDefaultInstance(_dto, this._user);
				return domain;
			});
        }

    }
}
