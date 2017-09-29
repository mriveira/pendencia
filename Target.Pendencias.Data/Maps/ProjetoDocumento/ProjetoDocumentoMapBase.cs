using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class ProjetoDocumentoMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<ProjetoDocumento> type);

        public ProjetoDocumentoMapBase(EntityTypeBuilder<ProjetoDocumento> type)
        {
            
            type.ToTable("ProjetoDocumento");
            type.Property(t => t.ProjetoId).HasColumnName("ProjetoId");
            type.Property(t => t.DocumentoId).HasColumnName("DocumentoId");
           



            type.HasKey(d => new { d.ProjetoId,d.DocumentoId, }); 

			CustomConfig(type);
        }
		
    }
}