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
    public class PendenciaApplicationServiceBase : ApplicationServiceBase<Pendencia, PendenciaDto, PendenciaFilter>, IPendenciaApplicationService
    {
        protected readonly ValidatorAnnotations<PendenciaDto> _validatorAnnotations;
        protected readonly IPendenciaService _service;
		protected readonly CurrentUser _user;

        public PendenciaApplicationServiceBase(IPendenciaService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("Pendencia");
            this._validatorAnnotations = new ValidatorAnnotations<PendenciaDto>();
            this._service = service;
			this._user = user;
        }


        protected override Pendencia MapperDtoToDomain<TDS>(TDS dto)
        {
			var _pendencia = dto as PendenciaDtoSpecialized;
            this._validatorAnnotations.Validate(_pendencia);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());

			var domain = new Pendencia.PendenciaFactory().GetDefaaultInstance(_pendencia, this._user);
            return domain;
        }


        protected override async Task<Pendencia> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _pendencia = dto as PendenciaDto;
				//var result = await this._serviceBase.GetOne(new PendenciaFilter { PendenciaId = pendencia.PendenciaId });
				var result = new Pendencia.PendenciaFactory().GetDefaaultInstance(_pendencia, this._user);
				//Inicio da Transferencia dos valores
           

				//Fim da Transferencia dos valores

				return result;
			});

        }

    }
}
