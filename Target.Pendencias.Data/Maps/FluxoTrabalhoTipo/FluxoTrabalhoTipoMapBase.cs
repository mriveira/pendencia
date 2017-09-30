using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class FluxoTrabalhoTipoMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<FluxoTrabalhoTipo> type);

        public FluxoTrabalhoTipoMapBase(EntityTypeBuilder<FluxoTrabalhoTipo> type)
        {
            
            type.ToTable("FluxoTrabalhoTipo");
            type.Property(t => t.FluxoTrabalhoTipoId).HasColumnName("Id");
           

            type.Property(t => t.Nome).HasColumnName("Nome").HasColumnType("varchar(1)");
            type.Property(t => t.Descricao).HasColumnName("Descricao").HasColumnType("varchar(max)");


            type.HasKey(d => new { d.FluxoTrabalhoTipoId, }); 

			CustomConfig(type);
        }
		
    }
}