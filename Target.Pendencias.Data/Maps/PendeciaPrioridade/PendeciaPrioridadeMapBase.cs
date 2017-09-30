using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class PendeciaPrioridadeMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<PendeciaPrioridade> type);

        public PendeciaPrioridadeMapBase(EntityTypeBuilder<PendeciaPrioridade> type)
        {
            
            type.ToTable("PendeciaPrioridade");
            type.Property(t => t.PendeciaPrioridadeId).HasColumnName("Id");
           

            type.Property(t => t.Nome).HasColumnName("Nome").HasColumnType("varchar(1)");


            type.HasKey(d => new { d.PendeciaPrioridadeId, }); 

			CustomConfig(type);
        }
		
    }
}