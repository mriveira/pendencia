using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class ProjetoFluxoTrabalhoStatusMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<ProjetoFluxoTrabalhoStatus> type);

        public ProjetoFluxoTrabalhoStatusMapBase(EntityTypeBuilder<ProjetoFluxoTrabalhoStatus> type)
        {
            
            type.ToTable("ProjetoFluxoTrabalhoStatus");
            type.Property(t => t.ProjetoId).HasColumnName("ProjetoId");
            type.Property(t => t.FluxoTrabalhoStatusId).HasColumnName("FluxoTrabalhoStatusId");
           



            type.HasKey(d => new { d.ProjetoId,d.FluxoTrabalhoStatusId, }); 

			CustomConfig(type);
        }
		
    }
}