using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class PendenciaTipoMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<PendenciaTipo> type);

        public PendenciaTipoMapBase(EntityTypeBuilder<PendenciaTipo> type)
        {
            
            type.ToTable("PendenciaTipo");
            type.Property(t => t.PendenciaTipoId).HasColumnName("Id");
           

            type.Property(t => t.Nome).HasColumnName("Nome").HasColumnType("varchar(200)");


            type.HasKey(d => new { d.PendenciaTipoId, }); 

			CustomConfig(type);
        }
		
    }
}