using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class ComentarioMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<Comentario> type);

        public ComentarioMapBase(EntityTypeBuilder<Comentario> type)
        {
            
            type.ToTable("Comentario");
            type.Property(t => t.ComentarioId).HasColumnName("Id");
           

            type.Property(t => t.Descricao).HasColumnName("Descricao");
            type.Property(t => t.Data).HasColumnName("Data");
            type.Property(t => t.UsuarioId).HasColumnName("UsuarioId");
            type.Property(t => t.PendenciaId).HasColumnName("PendenciaId");
            type.Property(t => t.UserCreateId).HasColumnName("UserCreateId");
            type.Property(t => t.UserCreateDate).HasColumnName("UserCreateDate");
            type.Property(t => t.UserAlterId).HasColumnName("UserAlterId");
            type.Property(t => t.UserAlterDate).HasColumnName("UserAlterDate");


            type.HasKey(d => new { d.ComentarioId, }); 

			CustomConfig(type);
        }
		
    }
}