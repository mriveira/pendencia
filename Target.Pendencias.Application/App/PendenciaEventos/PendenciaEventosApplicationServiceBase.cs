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
    public class PendenciaEventosApplicationServiceBase : ApplicationServiceBase<PendenciaEventos, PendenciaEventosDto, PendenciaEventosFilter>, IPendenciaEventosApplicationService
    {
        protected readonly ValidatorAnnotations<PendenciaEventosDto> _validatorAnnotations;
        protected readonly IPendenciaEventosService _service;
		protected readonly CurrentUser _user;

        public PendenciaEventosApplicationServiceBase(IPendenciaEventosService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("PendenciaEventos");
            this._validatorAnnotations = new ValidatorAnnotations<PendenciaEventosDto>();
            this._service = service;
			this._user = user;
        }


        protected override PendenciaEventos MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as PendenciaEventosDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());

			var domain = new PendenciaEventos.PendenciaEventosFactory().GetDefaaultInstance(_dto, this._user);
            return domain;
        }


        protected override async Task<PendenciaEventos> AlterDomainWithDto<TDS>(TDS dto)
        {
			var pendenciaeventos = dto as PendenciaEventosDto;
            var result = await this._serviceBase.GetOne(new PendenciaEventosFilter { PendenciaEventosId = pendenciaeventos.PendenciaEventosId });

            //Inicio da Transferencia dos valores
           

            //Fim da Transferencia dos valores

            return result;
        }

    }
}
