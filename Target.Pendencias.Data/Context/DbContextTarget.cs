using Microsoft.EntityFrameworkCore;
using Target.Pendencias.Data.Map;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Context
{
    public class DbContextTarget : DbContext
    {

        public DbContextTarget(DbContextOptions<DbContextTarget> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new PendenciaMap(modelBuilder.Entity<Pendencia>());
            new UsuarioMap(modelBuilder.Entity<Usuario>());
            new AcompanhadoresMap(modelBuilder.Entity<Acompanhadores>());
            new ClienteMap(modelBuilder.Entity<Cliente>());
            new ComentarioMap(modelBuilder.Entity<Comentario>());
            new ComentarioDocumentoMap(modelBuilder.Entity<ComentarioDocumento>());
            new DocumentoMap(modelBuilder.Entity<Documento>());
            new FluxoTrabalhoStatusMap(modelBuilder.Entity<FluxoTrabalhoStatus>());
            new FluxoTrabalhoTipoMap(modelBuilder.Entity<FluxoTrabalhoTipo>());
            new PendeciaPrioridadeMap(modelBuilder.Entity<PendeciaPrioridade>());
            new PendenciaEventosMap(modelBuilder.Entity<PendenciaEventos>());
            new PendenciaTipoMap(modelBuilder.Entity<PendenciaTipo>());
            new ProjetoMap(modelBuilder.Entity<Projeto>());
            new ProjetoFluxoTrabalhoStatusMap(modelBuilder.Entity<ProjetoFluxoTrabalhoStatus>());
            new PendenciaTemposMap(modelBuilder.Entity<PendenciaTempos>());
            new UsuarioTipoMap(modelBuilder.Entity<UsuarioTipo>());
            new ProjetoDocumentoMap(modelBuilder.Entity<ProjetoDocumento>());
            new PendenciaDocumentoMap(modelBuilder.Entity<PendenciaDocumento>());

        }


    }
}
