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
    public class ProjetoApplicationServiceBase : ApplicationServiceBase<Projeto, ProjetoDto, ProjetoFilter>, IProjetoApplicationService
    {
        protected readonly ValidatorAnnotations<ProjetoDto> _validatorAnnotations;
        protected readonly IProjetoService _service;
		protected readonly CurrentUser _user;

        public ProjetoApplicationServiceBase(IProjetoService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("Projeto");
            this._validatorAnnotations = new ValidatorAnnotations<ProjetoDto>();
            this._service = service;
			this._user = user;
        }

        protected override Projeto MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as ProjetoDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
			var domain = new Projeto.ProjetoFactory().GetDefaultInstance(_dto, this._user);
            return domain;
        }

        protected override async Task<Projeto> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as ProjetoDto;
				var domain = new Projeto.ProjetoFactory().GetDefaultInstance(_dto, this._user);
				return domain;
			});
        }

    }
}
