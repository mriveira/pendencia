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
    public class UsuarioApplicationServiceBase : ApplicationServiceBase<Usuario, UsuarioDto, UsuarioFilter>, IUsuarioApplicationService
    {
        protected readonly ValidatorAnnotations<UsuarioDto> _validatorAnnotations;
        protected readonly IUsuarioService _service;
		protected readonly CurrentUser _user;

        public UsuarioApplicationServiceBase(IUsuarioService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("Usuario");
            this._validatorAnnotations = new ValidatorAnnotations<UsuarioDto>();
            this._service = service;
			this._user = user;
        }


        protected override Usuario MapperDtoToDomain<TDS>(TDS dto)
        {
			var _usuario = dto as UsuarioDtoSpecialized;
            this._validatorAnnotations.Validate(_usuario);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());

			var domain = new Usuario.UsuarioFactory().GetDefaaultInstance(_usuario, this._user);
            return domain;
        }


        protected override async Task<Usuario> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _usuario = dto as UsuarioDto;
				//var result = await this._serviceBase.GetOne(new UsuarioFilter { UsuarioId = usuario.UsuarioId });
				var result = new Usuario.UsuarioFactory().GetDefaaultInstance(_usuario, this._user);
				//Inicio da Transferencia dos valores
           

				//Fim da Transferencia dos valores

				return result;
			});

        }

    }
}
