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
    public class PendenciaTemposApplicationServiceBase : ApplicationServiceBase<PendenciaTempos, PendenciaTemposDto, PendenciaTemposFilter>, IPendenciaTemposApplicationService
    {
        protected readonly ValidatorAnnotations<PendenciaTemposDto> _validatorAnnotations;
        protected readonly IPendenciaTemposService _service;
		protected readonly CurrentUser _user;

        public PendenciaTemposApplicationServiceBase(IPendenciaTemposService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("PendenciaTempos");
            this._validatorAnnotations = new ValidatorAnnotations<PendenciaTemposDto>();
            this._service = service;
			this._user = user;
        }

        protected override PendenciaTempos MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as PendenciaTemposDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
			var domain = new PendenciaTempos.PendenciaTemposFactory().GetDefaultInstance(_dto, this._user);
            return domain;
        }

        protected override async Task<PendenciaTempos> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as PendenciaTemposDto;
				var domain = new PendenciaTempos.PendenciaTemposFactory().GetDefaultInstance(_dto, this._user);
				return domain;
			});
        }

    }
}
