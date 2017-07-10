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
    public class ProjetoFluxoTrabalhoStatusApplicationServiceBase : ApplicationServiceBase<ProjetoFluxoTrabalhoStatus, ProjetoFluxoTrabalhoStatusDto, ProjetoFluxoTrabalhoStatusFilter>, IProjetoFluxoTrabalhoStatusApplicationService
    {
        protected readonly ValidatorAnnotations<ProjetoFluxoTrabalhoStatusDto> _validatorAnnotations;
        protected readonly IProjetoFluxoTrabalhoStatusService _service;
		protected readonly CurrentUser _user;

        public ProjetoFluxoTrabalhoStatusApplicationServiceBase(IProjetoFluxoTrabalhoStatusService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("ProjetoFluxoTrabalhoStatus");
            this._validatorAnnotations = new ValidatorAnnotations<ProjetoFluxoTrabalhoStatusDto>();
            this._service = service;
			this._user = user;
        }


        protected override ProjetoFluxoTrabalhoStatus MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as ProjetoFluxoTrabalhoStatusDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());

			var domain = new ProjetoFluxoTrabalhoStatus.ProjetoFluxoTrabalhoStatusFactory().GetDefaaultInstance(_dto, this._user);
            return domain;
        }


        protected override async Task<ProjetoFluxoTrabalhoStatus> AlterDomainWithDto<TDS>(TDS dto)
        {
			var projetofluxotrabalhostatus = dto as ProjetoFluxoTrabalhoStatusDto;
            var result = await this._serviceBase.GetOne(new ProjetoFluxoTrabalhoStatusFilter { ProjetoId = projetofluxotrabalhostatus.ProjetoId, FluxoTrabalhoStatusId = projetofluxotrabalhostatus.FluxoTrabalhoStatusId });

            //Inicio da Transferencia dos valores
           

            //Fim da Transferencia dos valores

            return result;
        }

    }
}
