using Common.Cache;
using Common.Domain.Interfaces;
using Common.Orm;
using Microsoft.Extensions.DependencyInjection;
using Target.Pendencias.Application;
using Target.Pendencias.Application.Interfaces;
using Target.Pendencias.Data.Context;
using Target.Pendencias.Data.Repository;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Interfaces.Services;
using Target.Pendencias.Domain.Services;

namespace Target.Pendencias.Api
{
    public static partial class ConfigContainerTarget
    {

        public static void Config(IServiceCollection services)
        {
            services.AddScoped<ICache, RedisComponent>();
            services.AddScoped<IUnitOfWork, UnitOfWork<DbContextTarget>>();
            
			services.AddScoped<IPendenciaApplicationService, PendenciaApplicationService>();
			services.AddScoped<IPendenciaService, PendenciaService>();
			services.AddScoped<IPendenciaRepository, PendenciaRepository>();

			services.AddScoped<IUsuarioApplicationService, UsuarioApplicationService>();
			services.AddScoped<IUsuarioService, UsuarioService>();
			services.AddScoped<IUsuarioRepository, UsuarioRepository>();

			services.AddScoped<IAcompanhadoresApplicationService, AcompanhadoresApplicationService>();
			services.AddScoped<IAcompanhadoresService, AcompanhadoresService>();
			services.AddScoped<IAcompanhadoresRepository, AcompanhadoresRepository>();

			services.AddScoped<IClienteApplicationService, ClienteApplicationService>();
			services.AddScoped<IClienteService, ClienteService>();
			services.AddScoped<IClienteRepository, ClienteRepository>();

			services.AddScoped<IComentarioApplicationService, ComentarioApplicationService>();
			services.AddScoped<IComentarioService, ComentarioService>();
			services.AddScoped<IComentarioRepository, ComentarioRepository>();

			services.AddScoped<IComentarioDocumentoApplicationService, ComentarioDocumentoApplicationService>();
			services.AddScoped<IComentarioDocumentoService, ComentarioDocumentoService>();
			services.AddScoped<IComentarioDocumentoRepository, ComentarioDocumentoRepository>();

			services.AddScoped<IDocumentoApplicationService, DocumentoApplicationService>();
			services.AddScoped<IDocumentoService, DocumentoService>();
			services.AddScoped<IDocumentoRepository, DocumentoRepository>();

			services.AddScoped<IFluxoTrabalhoStatusApplicationService, FluxoTrabalhoStatusApplicationService>();
			services.AddScoped<IFluxoTrabalhoStatusService, FluxoTrabalhoStatusService>();
			services.AddScoped<IFluxoTrabalhoStatusRepository, FluxoTrabalhoStatusRepository>();

			services.AddScoped<IFluxoTrabalhoTipoApplicationService, FluxoTrabalhoTipoApplicationService>();
			services.AddScoped<IFluxoTrabalhoTipoService, FluxoTrabalhoTipoService>();
			services.AddScoped<IFluxoTrabalhoTipoRepository, FluxoTrabalhoTipoRepository>();

			services.AddScoped<IPendeciaPrioridadeApplicationService, PendeciaPrioridadeApplicationService>();
			services.AddScoped<IPendeciaPrioridadeService, PendeciaPrioridadeService>();
			services.AddScoped<IPendeciaPrioridadeRepository, PendeciaPrioridadeRepository>();

			services.AddScoped<IPendenciaEventosApplicationService, PendenciaEventosApplicationService>();
			services.AddScoped<IPendenciaEventosService, PendenciaEventosService>();
			services.AddScoped<IPendenciaEventosRepository, PendenciaEventosRepository>();

			services.AddScoped<IPendenciaDocumentoApplicationService, PendenciaDocumentoApplicationService>();
			services.AddScoped<IPendenciaDocumentoService, PendenciaDocumentoService>();
			services.AddScoped<IPendenciaDocumentoRepository, PendenciaDocumentoRepository>();

			services.AddScoped<IPendenciaTipoApplicationService, PendenciaTipoApplicationService>();
			services.AddScoped<IPendenciaTipoService, PendenciaTipoService>();
			services.AddScoped<IPendenciaTipoRepository, PendenciaTipoRepository>();

			services.AddScoped<IProjetoApplicationService, ProjetoApplicationService>();
			services.AddScoped<IProjetoService, ProjetoService>();
			services.AddScoped<IProjetoRepository, ProjetoRepository>();

			services.AddScoped<IProjetoFluxoTrabalhoStatusApplicationService, ProjetoFluxoTrabalhoStatusApplicationService>();
			services.AddScoped<IProjetoFluxoTrabalhoStatusService, ProjetoFluxoTrabalhoStatusService>();
			services.AddScoped<IProjetoFluxoTrabalhoStatusRepository, ProjetoFluxoTrabalhoStatusRepository>();

			services.AddScoped<IPendenciaTemposApplicationService, PendenciaTemposApplicationService>();
			services.AddScoped<IPendenciaTemposService, PendenciaTemposService>();
			services.AddScoped<IPendenciaTemposRepository, PendenciaTemposRepository>();

			services.AddScoped<IUsuarioTipoApplicationService, UsuarioTipoApplicationService>();
			services.AddScoped<IUsuarioTipoService, UsuarioTipoService>();
			services.AddScoped<IUsuarioTipoRepository, UsuarioTipoRepository>();



            RegisterOtherComponents(services);
        }
    }
}
