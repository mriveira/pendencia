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
    public class AcompanhadoresApplicationServiceBase : ApplicationServiceBase<Acompanhadores, AcompanhadoresDto, AcompanhadoresFilter>, IAcompanhadoresApplicationService
    {
        protected readonly ValidatorAnnotations<AcompanhadoresDto> _validatorAnnotations;
        protected readonly IAcompanhadoresService _service;
		protected readonly CurrentUser _user;

        public AcompanhadoresApplicationServiceBase(IAcompanhadoresService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("Acompanhadores");
            this._validatorAnnotations = new ValidatorAnnotations<AcompanhadoresDto>();
            this._service = service;
			this._user = user;
        }


        protected override Acompanhadores MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as AcompanhadoresDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());

			var domain = new Acompanhadores.AcompanhadoresFactory().GetDefaaultInstance(_dto, this._user);
            return domain;
        }


        protected override async Task<Acompanhadores> AlterDomainWithDto<TDS>(TDS dto)
        {
			var acompanhadores = dto as AcompanhadoresDto;
            var result = await this._serviceBase.GetOne(new AcompanhadoresFilter { PendenciaId = acompanhadores.PendenciaId, UsuarioId = acompanhadores.UsuarioId });

            //Inicio da Transferencia dos valores
           

            //Fim da Transferencia dos valores

            return result;
        }

    }
}
