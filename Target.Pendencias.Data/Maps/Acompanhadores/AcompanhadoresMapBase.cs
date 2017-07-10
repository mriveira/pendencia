using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class AcompanhadoresMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<Acompanhadores> type);

        public AcompanhadoresMapBase(EntityTypeBuilder<Acompanhadores> type)
        {
            
            type.ToTable("Acompanhadores");
            type.Property(t => t.PendenciaId).HasColumnName("PendenciaId");
            type.Property(t => t.UsuarioId).HasColumnName("UsuarioId");
           



            type.HasKey(d => new { d.PendenciaId,d.UsuarioId, }); 

			CustomConfig(type);
        }
		
    }
}