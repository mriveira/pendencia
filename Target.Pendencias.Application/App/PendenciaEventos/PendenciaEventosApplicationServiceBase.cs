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
			var domain = new PendenciaEventos.PendenciaEventosFactory().GetDefaultInstance(_dto, this._user);
            return domain;
        }

        protected override async Task<PendenciaEventos> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as PendenciaEventosDto;
				var domain = new PendenciaEventos.PendenciaEventosFactory().GetDefaultInstance(_dto, this._user);
				return domain;
			});
        }

    }
}
