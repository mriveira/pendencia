using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Dto;

namespace Target.Pendencias.Application.Config
{
    public class DominioToDtoProfileTarget : AutoMapper.Profile
    {

        public DominioToDtoProfileTarget()
        {
            CreateMap(typeof(FluxoTrabalhoStatus), typeof(FluxoTrabalhoStatusDto)).ReverseMap();
            CreateMap(typeof(FluxoTrabalhoStatus), typeof(FluxoTrabalhoStatusDtoSpecialized));
            CreateMap(typeof(FluxoTrabalhoStatus), typeof(FluxoTrabalhoStatusDtoSpecializedResult));
            CreateMap(typeof(FluxoTrabalhoStatus), typeof(FluxoTrabalhoStatusDtoSpecializedReport));
            CreateMap(typeof(FluxoTrabalhoStatus), typeof(FluxoTrabalhoStatusDtoSpecializedDetails));

        }

    }
}
