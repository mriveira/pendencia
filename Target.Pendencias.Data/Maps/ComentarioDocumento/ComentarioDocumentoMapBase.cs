using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class ComentarioDocumentoMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<ComentarioDocumento> type);

        public ComentarioDocumentoMapBase(EntityTypeBuilder<ComentarioDocumento> type)
        {
            
            type.ToTable("ComentarioDocumento");
            type.Property(t => t.DocumentoId).HasColumnName("DocumentoId");
            type.Property(t => t.ComentarioId).HasColumnName("ComentarioId");
           



            type.HasKey(d => new { d.DocumentoId,d.ComentarioId, }); 

			CustomConfig(type);
        }
		
    }
}