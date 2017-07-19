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
    public class PendeciaPrioridadeApplicationServiceBase : ApplicationServiceBase<PendeciaPrioridade, PendeciaPrioridadeDto, PendeciaPrioridadeFilter>, IPendeciaPrioridadeApplicationService
    {
        protected readonly ValidatorAnnotations<PendeciaPrioridadeDto> _validatorAnnotations;
        protected readonly IPendeciaPrioridadeService _service;
		    protected readonly CurrentUser _user;

        public PendeciaPrioridadeApplicationServiceBase(IPendeciaPrioridadeService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("PendeciaPrioridade");
            this._validatorAnnotations = new ValidatorAnnotations<PendeciaPrioridadeDto>();
            this._service = service;
			      this._user = user;
        }

        protected override PendeciaPrioridade MapperDtoToDomain<TDS>(TDS dto)
        {
			      var _dto = dto as PendeciaPrioridadeDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
			      var domain = new PendeciaPrioridade.PendeciaPrioridadeFactory().GetDefaultInstance(_dto, this._user);
            return domain;
        }

        protected override async Task<PendeciaPrioridade> AlterDomainWithDto<TDS>(TDS dto)
        {
			      var pendeciaprioridade = dto as PendeciaPrioridadeDto;
            var result = await this._serviceBase.GetOne(new PendeciaPrioridadeFilter { PendeciaPrioridadeId = pendeciaprioridade.PendeciaPrioridadeId });
            return result;
        }

    }
}
