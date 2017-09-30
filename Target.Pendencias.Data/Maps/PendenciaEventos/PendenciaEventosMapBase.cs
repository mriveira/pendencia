using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class PendenciaEventosMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<PendenciaEventos> type);

        public PendenciaEventosMapBase(EntityTypeBuilder<PendenciaEventos> type)
        {
            
            type.ToTable("PendenciaEventos");
            type.Property(t => t.PendenciaEventosId).HasColumnName("Id");
           

            type.Property(t => t.PendenciaId).HasColumnName("PendenciaId");
            type.Property(t => t.Descricao).HasColumnName("Descricao").HasColumnType("varchar(1)");
            type.Property(t => t.Data).HasColumnName("Data");
            type.Property(t => t.UserCreateId).HasColumnName("UserCreateId");
            type.Property(t => t.UserCreateDate).HasColumnName("UserCreateDate");
            type.Property(t => t.UserAlterId).HasColumnName("UserAlterId");
            type.Property(t => t.UserAlterDate).HasColumnName("UserAlterDate");


            type.HasKey(d => new { d.PendenciaEventosId, }); 

			CustomConfig(type);
        }
		
    }
}