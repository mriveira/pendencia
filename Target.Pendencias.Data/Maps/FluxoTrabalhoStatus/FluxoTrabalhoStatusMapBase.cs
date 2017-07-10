using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class FluxoTrabalhoStatusMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<FluxoTrabalhoStatus> type);

        public FluxoTrabalhoStatusMapBase(EntityTypeBuilder<FluxoTrabalhoStatus> type)
        {
            
            type.ToTable("FluxoTrabalhoStatus");
            type.Property(t => t.FluxoTrabalhoStatusId).HasColumnName("Id");
           

            type.Property(t => t.Nome).HasColumnName("Nome");
            type.Property(t => t.FluxoTrabalhoTipoId).HasColumnName("FluxoTrabalhoTipoId");
            type.Property(t => t.CorFundo).HasColumnName("CorFundo");
            type.Property(t => t.CorFonte).HasColumnName("CorFonte");
            type.Property(t => t.Ordem).HasColumnName("Ordem");


            type.HasKey(d => new { d.FluxoTrabalhoStatusId, }); 

			CustomConfig(type);
        }
		
    }
}