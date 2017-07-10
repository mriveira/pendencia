using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class UsuarioTipoMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<UsuarioTipo> type);

        public UsuarioTipoMapBase(EntityTypeBuilder<UsuarioTipo> type)
        {
            
            type.ToTable("UsuarioTipo");
            type.Property(t => t.UsuarioTipoId).HasColumnName("Id");
           

            type.Property(t => t.Nome).HasColumnName("Nome");


            type.HasKey(d => new { d.UsuarioTipoId, }); 

			CustomConfig(type);
        }
		
    }
}