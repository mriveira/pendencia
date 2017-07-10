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


        protected override UsuarioTipo MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as UsuarioTipoDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());

			var domain = new UsuarioTipo.UsuarioTipoFactory().GetDefaaultInstance(_dto, this._user);
            return domain;
        }


        protected override async Task<UsuarioTipo> AlterDomainWithDto<TDS>(TDS dto)
        {
			var usuariotipo = dto as UsuarioTipoDto;
            var result = await this._serviceBase.GetOne(new UsuarioTipoFilter { UsuarioTipoId = usuariotipo.UsuarioTipoId });

            //Inicio da Transferencia dos valores
           

            //Fim da Transferencia dos valores

            return result;
        }

    }
}
