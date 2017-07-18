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
    public class PendenciaTipoApplicationServiceBase : ApplicationServiceBase<PendenciaTipo, PendenciaTipoDto, PendenciaTipoFilter>, IPendenciaTipoApplicationService
    {
        protected readonly ValidatorAnnotations<PendenciaTipoDto> _validatorAnnotations;
        protected readonly IPendenciaTipoService _service;
		protected readonly CurrentUser _user;

        public PendenciaTipoApplicationServiceBase(IPendenciaTipoService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("PendenciaTipo");
            this._validatorAnnotations = new ValidatorAnnotations<PendenciaTipoDto>();
            this._service = service;
			this._user = user;
        }


        protected override PendenciaTipo MapperDtoToDomain<TDS>(TDS dto)
        {
			var _pendenciatipo = dto as PendenciaTipoDtoSpecialized;
            this._validatorAnnotations.Validate(_pendenciatipo);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());

			var domain = new PendenciaTipo.PendenciaTipoFactory().GetDefaultInstance(_pendenciatipo, this._user);
            return domain;
        }


        protected override async Task<PendenciaTipo> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _pendenciatipo = dto as PendenciaTipoDto;
				//var result = await this._serviceBase.GetOne(new PendenciaTipoFilter { PendenciaTipoId = pendenciatipo.PendenciaTipoId });
				var result = new PendenciaTipo.PendenciaTipoFactory().GetDefaultInstance(_pendenciatipo, this._user);
				//Inicio da Transferencia dos valores
           

				//Fim da Transferencia dos valores

				return result;
			});

        }

    }
}
