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
using System.Collections.Generic;

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

       protected override async Task<Projeto> MapperDtoToDomain<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as ProjetoDtoSpecialized;
				this._validatorAnnotations.Validate(_dto);
				this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
				var domain = this._service.GetNewInstance(_dto, this._user);
				return domain;
			});
        }

		protected override async Task<IEnumerable<Projeto>> MapperDtoToDomain<TDS>(IEnumerable<TDS> dtos)
        {
			var domains = new List<Projeto>();
			foreach (var dto in dtos)
			{
				var _dto = dto as ProjetoDtoSpecialized;
				this._validatorAnnotations.Validate(_dto);
				this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
				var domain = await this._service.GetNewInstance(_dto, this._user);
				domains.Add(domain);
			}
			return domains;
			
        }


        protected override async Task<Projeto> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as ProjetoDto;
				var domain = this._service.GetUpdateInstance(_dto, this._user);
				return domain;
			});
        }

    }
}
