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
    public class ComentarioApplicationServiceBase : ApplicationServiceBase<Comentario, ComentarioDto, ComentarioFilter>, IComentarioApplicationService
    {
        protected readonly ValidatorAnnotations<ComentarioDto> _validatorAnnotations;
        protected readonly IComentarioService _service;
		    protected readonly CurrentUser _user;

        public ComentarioApplicationServiceBase(IComentarioService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("Comentario");
            this._validatorAnnotations = new ValidatorAnnotations<ComentarioDto>();
            this._service = service;
			      this._user = user;
        }

        protected override Comentario MapperDtoToDomain<TDS>(TDS dto)
        {
			      var _dto = dto as ComentarioDtoSpecialized;
            this._validatorAnnotations.Validate(_dto);
            this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
			      var domain = new Comentario.ComentarioFactory().GetDefaultInstance(_dto, this._user);
            return domain;
        }

        protected override async Task<Comentario> AlterDomainWithDto<TDS>(TDS dto)
        {
			      var comentario = dto as ComentarioDto;
            var result = await this._serviceBase.GetOne(new ComentarioFilter { ComentarioId = comentario.ComentarioId });
            return result;
        }

    }
}
