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
    public class ClienteApplicationServiceBase : ApplicationServiceBase<Cliente, ClienteDto, ClienteFilter>, IClienteApplicationService
    {
        protected readonly ValidatorAnnotations<ClienteDto> _validatorAnnotations;
        protected readonly IClienteService _service;
		protected readonly CurrentUser _user;

        public ClienteApplicationServiceBase(IClienteService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("Cliente");
            this._validatorAnnotations = new ValidatorAnnotations<ClienteDto>();
            this._service = service;
			this._user = user;
        }


        protected override Cliente MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as ClienteDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());

			var domain = new Cliente.ClienteFactory().GetDefaaultInstance(_dto, this._user);
            return domain;
        }


        protected override async Task<Cliente> AlterDomainWithDto<TDS>(TDS dto)
        {
			var cliente = dto as ClienteDto;
            var result = await this._serviceBase.GetOne(new ClienteFilter { ClienteId = cliente.ClienteId });

            //Inicio da Transferencia dos valores
           

            //Fim da Transferencia dos valores

            return result;
        }

    }
}
