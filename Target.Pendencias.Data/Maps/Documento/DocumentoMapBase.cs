using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class DocumentoMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<Documento> type);

        public DocumentoMapBase(EntityTypeBuilder<Documento> type)
        {
            
            type.ToTable("Documento");
            type.Property(t => t.DocumentoId).HasColumnName("Id");
           

            type.Property(t => t.Arquivo).HasColumnName("Arquivo").HasColumnType("varchar(200)");
            type.Property(t => t.ext).HasColumnName("ext").HasColumnType("varchar(4)");
            type.Property(t => t.Tags).HasColumnName("Tags").HasColumnType("varchar(1000)");
            type.Property(t => t.UserCreateId).HasColumnName("UserCreateId");
            type.Property(t => t.UserCreateDate).HasColumnName("UserCreateDate");
            type.Property(t => t.UserAlterId).HasColumnName("UserAlterId");
            type.Property(t => t.UserAlterDate).HasColumnName("UserAlterDate");


            type.HasKey(d => new { d.DocumentoId, }); 

			CustomConfig(type);
        }
		
    }
}