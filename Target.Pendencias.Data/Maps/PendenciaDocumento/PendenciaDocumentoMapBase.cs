using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class PendenciaDocumentoMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<PendenciaDocumento> type);

        public PendenciaDocumentoMapBase(EntityTypeBuilder<PendenciaDocumento> type)
        {
            
            type.ToTable("PendenciaDocumento");
            type.Property(t => t.PendenciaId).HasColumnName("PendenciaId");
            type.Property(t => t.DocumentoId).HasColumnName("DocumentoId");
           



            type.HasKey(d => new { d.PendenciaId,d.DocumentoId, }); 

			CustomConfig(type);
        }
		
    }
}