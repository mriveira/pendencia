using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public abstract class ProjetoMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<Projeto> type);

        public ProjetoMapBase(EntityTypeBuilder<Projeto> type)
        {
            
            type.ToTable("Projeto");
            type.Property(t => t.ProjetoId).HasColumnName("Id");
           

            type.Property(t => t.Nome).HasColumnName("Nome").HasColumnType("varchar(1)");
            type.Property(t => t.Descricao).HasColumnName("Descricao").HasColumnType("varchar(max)");
            type.Property(t => t.Visao).HasColumnName("Visao").HasColumnType("varchar(max)");
            type.Property(t => t.ClienteId).HasColumnName("ClienteId");
            type.Property(t => t.UsuarioId).HasColumnName("UsuarioId");
            type.Property(t => t.ChaveUnica).HasColumnName("ChaveUnica").HasColumnType("varchar(1)");
            type.Property(t => t.Inicio).HasColumnName("Inicio");
            type.Property(t => t.Fim).HasColumnName("Fim");
            type.Property(t => t.UserCreateId).HasColumnName("UserCreateId");
            type.Property(t => t.UserCreateDate).HasColumnName("UserCreateDate");
            type.Property(t => t.UserAlterId).HasColumnName("UserAlterId");
            type.Property(t => t.UserAlterDate).HasColumnName("UserAlterDate");


            type.HasKey(d => new { d.ProjetoId, }); 

			CustomConfig(type);
        }
		
    }
}