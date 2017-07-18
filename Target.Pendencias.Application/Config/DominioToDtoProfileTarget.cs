using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Dto;

namespace Target.Pendencias.Application.Config
{
    public class DominioToDtoProfileTarget : AutoMapper.Profile
    {

        public DominioToDtoProfileTarget()
        {
            CreateMap(typeof(Usuario), typeof(UsuarioDto)).ReverseMap();
            CreateMap(typeof(Usuario), typeof(UsuarioDtoSpecialized));
            CreateMap(typeof(Usuario), typeof(UsuarioDtoSpecializedResult));
            CreateMap(typeof(Usuario), typeof(UsuarioDtoSpecializedReport));
            CreateMap(typeof(Usuario), typeof(UsuarioDtoSpecializedDetails));

        }

    }
}
