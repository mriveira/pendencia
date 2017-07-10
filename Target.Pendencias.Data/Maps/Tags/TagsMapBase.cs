using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class TagsMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<Tags> type);

        public TagsMapBase(EntityTypeBuilder<Tags> type)
        {
            
            type.ToTable("Tags");
            type.Property(t => t.TagsId).HasColumnName("Id");
           

            type.Property(t => t.Nome).HasColumnName("Nome");
            type.Property(t => t.ProjetoId).HasColumnName("ProjetoId");
            type.Property(t => t.PendenciaId).HasColumnName("PendenciaId");


            type.HasKey(d => new { d.TagsId, }); 

			CustomConfig(type);
        }
		
    }
}