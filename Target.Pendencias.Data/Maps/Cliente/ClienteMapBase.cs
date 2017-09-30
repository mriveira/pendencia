using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class ClienteMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<Cliente> type);

        public ClienteMapBase(EntityTypeBuilder<Cliente> type)
        {
            
            type.ToTable("Cliente");
            type.Property(t => t.ClienteId).HasColumnName("Id");
           

            type.Property(t => t.Nome).HasColumnName("Nome").HasColumnType("varchar(1)");
            type.Property(t => t.TelefoneDeContato).HasColumnName("TelefoneDeContato").HasColumnType("varchar(1)");
            type.Property(t => t.EmailDeContato).HasColumnName("EmailDeContato").HasColumnType("varchar(1)");
            type.Property(t => t.CPFCNPJ).HasColumnName("CPFCNPJ").HasColumnType("varchar(1)");
            type.Property(t => t.UsuarioId).HasColumnName("UsuarioId");
            type.Property(t => t.UserCreateId).HasColumnName("UserCreateId");
            type.Property(t => t.UserCreateDate).HasColumnName("UserCreateDate");
            type.Property(t => t.UserAlterId).HasColumnName("UserAlterId");
            type.Property(t => t.UserAlterDate).HasColumnName("UserAlterDate");


            type.HasKey(d => new { d.ClienteId, }); 

			CustomConfig(type);
        }
		
    }
}