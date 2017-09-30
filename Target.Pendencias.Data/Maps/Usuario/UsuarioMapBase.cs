using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class UsuarioMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<Usuario> type);

        public UsuarioMapBase(EntityTypeBuilder<Usuario> type)
        {
            
            type.ToTable("Usuario");
            type.Property(t => t.UsuarioId).HasColumnName("Id");
           

            type.Property(t => t.Nome).HasColumnName("Nome").HasColumnType("varchar(1)");
            type.Property(t => t.Foto).HasColumnName("Foto").HasColumnType("varchar(1)");
            type.Property(t => t.Email).HasColumnName("Email").HasColumnType("varchar(1)");
            type.Property(t => t.Senha).HasColumnName("Senha").HasColumnType("varchar(1)");
            type.Property(t => t.UsuarioTipoId).HasColumnName("UsuarioTipoId");
            type.Property(t => t.Ativo).HasColumnName("Ativo");
            type.Property(t => t.UsuarioDonoId).HasColumnName("UsuarioDonoId");
            type.Property(t => t.UserCreateId).HasColumnName("UserCreateId");
            type.Property(t => t.UserCreateDate).HasColumnName("UserCreateDate");
            type.Property(t => t.UserAlterId).HasColumnName("UserAlterId");
            type.Property(t => t.UserAlterDate).HasColumnName("UserAlterDate");


            type.HasKey(d => new { d.UsuarioId, }); 

			CustomConfig(type);
        }
		
    }
}