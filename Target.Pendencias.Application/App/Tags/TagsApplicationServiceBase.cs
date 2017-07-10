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
    public class TagsApplicationServiceBase : ApplicationServiceBase<Tags, TagsDto, TagsFilter>, ITagsApplicationService
    {
        protected readonly ValidatorAnnotations<TagsDto> _validatorAnnotations;
        protected readonly ITagsService _service;
		protected readonly CurrentUser _user;

        public TagsApplicationServiceBase(ITagsService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("Tags");
            this._validatorAnnotations = new ValidatorAnnotations<TagsDto>();
            this._service = service;
			this._user = user;
        }


        protected override Tags MapperDtoToDomain<TDS>(TDS dto)
        {
			var _dto = dto as TagsDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());

			var domain = new Tags.TagsFactory().GetDefaaultInstance(_dto, this._user);
            return domain;
        }


        protected override async Task<Tags> AlterDomainWithDto<TDS>(TDS dto)
        {
			var tags = dto as TagsDto;
            var result = await this._serviceBase.GetOne(new TagsFilter { TagsId = tags.TagsId });

            //Inicio da Transferencia dos valores
           

            //Fim da Transferencia dos valores

            return result;
        }

    }
}
