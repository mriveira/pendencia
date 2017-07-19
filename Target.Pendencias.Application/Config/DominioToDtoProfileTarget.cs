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
            CreateMap(typeof(Acompanhadores), typeof(AcompanhadoresDto)).ReverseMap();
            CreateMap(typeof(Acompanhadores), typeof(AcompanhadoresDtoSpecialized));
            CreateMap(typeof(Acompanhadores), typeof(AcompanhadoresDtoSpecializedResult));
            CreateMap(typeof(Acompanhadores), typeof(AcompanhadoresDtoSpecializedReport));
            CreateMap(typeof(Acompanhadores), typeof(AcompanhadoresDtoSpecializedDetails));
            CreateMap(typeof(Cliente), typeof(ClienteDto)).ReverseMap();
            CreateMap(typeof(Cliente), typeof(ClienteDtoSpecialized));
            CreateMap(typeof(Cliente), typeof(ClienteDtoSpecializedResult));
            CreateMap(typeof(Cliente), typeof(ClienteDtoSpecializedReport));
            CreateMap(typeof(Cliente), typeof(ClienteDtoSpecializedDetails));
            CreateMap(typeof(Comentario), typeof(ComentarioDto)).ReverseMap();
            CreateMap(typeof(Comentario), typeof(ComentarioDtoSpecialized));
            CreateMap(typeof(Comentario), typeof(ComentarioDtoSpecializedResult));
            CreateMap(typeof(Comentario), typeof(ComentarioDtoSpecializedReport));
            CreateMap(typeof(Comentario), typeof(ComentarioDtoSpecializedDetails));
            CreateMap(typeof(ComentarioDocumento), typeof(ComentarioDocumentoDto)).ReverseMap();
            CreateMap(typeof(ComentarioDocumento), typeof(ComentarioDocumentoDtoSpecialized));
            CreateMap(typeof(ComentarioDocumento), typeof(ComentarioDocumentoDtoSpecializedResult));
            CreateMap(typeof(ComentarioDocumento), typeof(ComentarioDocumentoDtoSpecializedReport));
            CreateMap(typeof(ComentarioDocumento), typeof(ComentarioDocumentoDtoSpecializedDetails));
            CreateMap(typeof(Documento), typeof(DocumentoDto)).ReverseMap();
            CreateMap(typeof(Documento), typeof(DocumentoDtoSpecialized));
            CreateMap(typeof(Documento), typeof(DocumentoDtoSpecializedResult));
            CreateMap(typeof(Documento), typeof(DocumentoDtoSpecializedReport));
            CreateMap(typeof(Documento), typeof(DocumentoDtoSpecializedDetails));
            CreateMap(typeof(FluxoTrabalhoStatus), typeof(FluxoTrabalhoStatusDto)).ReverseMap();
            CreateMap(typeof(FluxoTrabalhoStatus), typeof(FluxoTrabalhoStatusDtoSpecialized));
            CreateMap(typeof(FluxoTrabalhoStatus), typeof(FluxoTrabalhoStatusDtoSpecializedResult));
            CreateMap(typeof(FluxoTrabalhoStatus), typeof(FluxoTrabalhoStatusDtoSpecializedReport));
            CreateMap(typeof(FluxoTrabalhoStatus), typeof(FluxoTrabalhoStatusDtoSpecializedDetails));
            CreateMap(typeof(FluxoTrabalhoTipo), typeof(FluxoTrabalhoTipoDto)).ReverseMap();
            CreateMap(typeof(FluxoTrabalhoTipo), typeof(FluxoTrabalhoTipoDtoSpecialized));
            CreateMap(typeof(FluxoTrabalhoTipo), typeof(FluxoTrabalhoTipoDtoSpecializedResult));
            CreateMap(typeof(FluxoTrabalhoTipo), typeof(FluxoTrabalhoTipoDtoSpecializedReport));
            CreateMap(typeof(FluxoTrabalhoTipo), typeof(FluxoTrabalhoTipoDtoSpecializedDetails));
            CreateMap(typeof(PendeciaPrioridade), typeof(PendeciaPrioridadeDto)).ReverseMap();
            CreateMap(typeof(PendeciaPrioridade), typeof(PendeciaPrioridadeDtoSpecialized));
            CreateMap(typeof(PendeciaPrioridade), typeof(PendeciaPrioridadeDtoSpecializedResult));
            CreateMap(typeof(PendeciaPrioridade), typeof(PendeciaPrioridadeDtoSpecializedReport));
            CreateMap(typeof(PendeciaPrioridade), typeof(PendeciaPrioridadeDtoSpecializedDetails));
            CreateMap(typeof(PendenciaEventos), typeof(PendenciaEventosDto)).ReverseMap();
            CreateMap(typeof(PendenciaEventos), typeof(PendenciaEventosDtoSpecialized));
            CreateMap(typeof(PendenciaEventos), typeof(PendenciaEventosDtoSpecializedResult));
            CreateMap(typeof(PendenciaEventos), typeof(PendenciaEventosDtoSpecializedReport));
            CreateMap(typeof(PendenciaEventos), typeof(PendenciaEventosDtoSpecializedDetails));
            CreateMap(typeof(Pendencia), typeof(PendenciaDto)).ReverseMap();
            CreateMap(typeof(Pendencia), typeof(PendenciaDtoSpecialized));
            CreateMap(typeof(Pendencia), typeof(PendenciaDtoSpecializedResult));
            CreateMap(typeof(Pendencia), typeof(PendenciaDtoSpecializedReport));
            CreateMap(typeof(Pendencia), typeof(PendenciaDtoSpecializedDetails));
            CreateMap(typeof(PendenciaDocumento), typeof(PendenciaDocumentoDto)).ReverseMap();
            CreateMap(typeof(PendenciaDocumento), typeof(PendenciaDocumentoDtoSpecialized));
            CreateMap(typeof(PendenciaDocumento), typeof(PendenciaDocumentoDtoSpecializedResult));
            CreateMap(typeof(PendenciaDocumento), typeof(PendenciaDocumentoDtoSpecializedReport));
            CreateMap(typeof(PendenciaDocumento), typeof(PendenciaDocumentoDtoSpecializedDetails));
            CreateMap(typeof(PendenciaTipo), typeof(PendenciaTipoDto)).ReverseMap();
            CreateMap(typeof(PendenciaTipo), typeof(PendenciaTipoDtoSpecialized));
            CreateMap(typeof(PendenciaTipo), typeof(PendenciaTipoDtoSpecializedResult));
            CreateMap(typeof(PendenciaTipo), typeof(PendenciaTipoDtoSpecializedReport));
            CreateMap(typeof(PendenciaTipo), typeof(PendenciaTipoDtoSpecializedDetails));
            CreateMap(typeof(Projeto), typeof(ProjetoDto)).ReverseMap();
            CreateMap(typeof(Projeto), typeof(ProjetoDtoSpecialized));
            CreateMap(typeof(Projeto), typeof(ProjetoDtoSpecializedResult));
            CreateMap(typeof(Projeto), typeof(ProjetoDtoSpecializedReport));
            CreateMap(typeof(Projeto), typeof(ProjetoDtoSpecializedDetails));
            CreateMap(typeof(ProjetoFluxoTrabalhoStatus), typeof(ProjetoFluxoTrabalhoStatusDto)).ReverseMap();
            CreateMap(typeof(ProjetoFluxoTrabalhoStatus), typeof(ProjetoFluxoTrabalhoStatusDtoSpecialized));
            CreateMap(typeof(ProjetoFluxoTrabalhoStatus), typeof(ProjetoFluxoTrabalhoStatusDtoSpecializedResult));
            CreateMap(typeof(ProjetoFluxoTrabalhoStatus), typeof(ProjetoFluxoTrabalhoStatusDtoSpecializedReport));
            CreateMap(typeof(ProjetoFluxoTrabalhoStatus), typeof(ProjetoFluxoTrabalhoStatusDtoSpecializedDetails));
            CreateMap(typeof(PendenciaTempos), typeof(PendenciaTemposDto)).ReverseMap();
            CreateMap(typeof(PendenciaTempos), typeof(PendenciaTemposDtoSpecialized));
            CreateMap(typeof(PendenciaTempos), typeof(PendenciaTemposDtoSpecializedResult));
            CreateMap(typeof(PendenciaTempos), typeof(PendenciaTemposDtoSpecializedReport));
            CreateMap(typeof(PendenciaTempos), typeof(PendenciaTemposDtoSpecializedDetails));
            CreateMap(typeof(UsuarioTipo), typeof(UsuarioTipoDto)).ReverseMap();
            CreateMap(typeof(UsuarioTipo), typeof(UsuarioTipoDtoSpecialized));
            CreateMap(typeof(UsuarioTipo), typeof(UsuarioTipoDtoSpecializedResult));
            CreateMap(typeof(UsuarioTipo), typeof(UsuarioTipoDtoSpecializedReport));
            CreateMap(typeof(UsuarioTipo), typeof(UsuarioTipoDtoSpecializedDetails));

        }

    }
}
