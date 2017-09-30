using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class PendenciaTemposMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<PendenciaTempos> type);

        public PendenciaTemposMapBase(EntityTypeBuilder<PendenciaTempos> type)
        {
            
            type.ToTable("PendenciaTempos");
            type.Property(t => t.PendenciaTemposId).HasColumnName("Id");
           

            type.Property(t => t.PendenciaId).HasColumnName("PendenciaId");
            type.Property(t => t.UsuarioId).HasColumnName("UsuarioId");
            type.Property(t => t.Inicio).HasColumnName("Inicio");
            type.Property(t => t.Fim).HasColumnName("Fim");
            type.Property(t => t.Nota).HasColumnName("Nota").HasColumnType("varchar(max)");
            type.Property(t => t.UserCreateId).HasColumnName("UserCreateId");
            type.Property(t => t.UserCreateDate).HasColumnName("UserCreateDate");
            type.Property(t => t.UserAlterId).HasColumnName("UserAlterId");
            type.Property(t => t.UserAlterDate).HasColumnName("UserAlterDate");


            type.HasKey(d => new { d.PendenciaTemposId, }); 

			CustomConfig(type);
        }
		
    }
}