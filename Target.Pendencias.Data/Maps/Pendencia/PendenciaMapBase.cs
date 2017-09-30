using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class PendenciaMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<Pendencia> type);

        public PendenciaMapBase(EntityTypeBuilder<Pendencia> type)
        {
            
            type.ToTable("Pendencia");
            type.Property(t => t.PendenciaId).HasColumnName("Id");
           

            type.Property(t => t.Resumo).HasColumnName("Resumo").HasColumnType("varchar(1)");
            type.Property(t => t.Descricao).HasColumnName("Descricao").HasColumnType("varchar(max)");
            type.Property(t => t.RequisitadoPor).HasColumnName("RequisitadoPor").HasColumnType("varchar(1)");
            type.Property(t => t.TempoEstimado).HasColumnName("TempoEstimado");
            type.Property(t => t.PontosEstimados).HasColumnName("PontosEstimados");
            type.Property(t => t.Prazo).HasColumnName("Prazo");
            type.Property(t => t.ProjetoId).HasColumnName("ProjetoId");
            type.Property(t => t.UsuarioId).HasColumnName("UsuarioId");
            type.Property(t => t.PendenciaTipoId).HasColumnName("PendenciaTipoId");
            type.Property(t => t.FluxoTrabalhoStatusId).HasColumnName("FluxoTrabalhoStatusId");
            type.Property(t => t.PendenciaPrioridadeId).HasColumnName("PendenciaPrioridadeId");
            type.Property(t => t.Tags).HasColumnName("Tags").HasColumnType("varchar(1)");
            type.Property(t => t.DataConclusao).HasColumnName("DataConclusao");
            type.Property(t => t.UserCreateId).HasColumnName("UserCreateId");
            type.Property(t => t.UserCreateDate).HasColumnName("UserCreateDate");
            type.Property(t => t.UserAlterId).HasColumnName("UserAlterId");
            type.Property(t => t.UserAlterDate).HasColumnName("UserAlterDate");


            type.HasKey(d => new { d.PendenciaId, }); 

			CustomConfig(type);
        }
		
    }
}