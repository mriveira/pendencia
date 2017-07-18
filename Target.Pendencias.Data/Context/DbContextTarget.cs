using Microsoft.EntityFrameworkCore;
using Target.Pendencias.Data.Map;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Context
{
    public class DbContextTarget : DbContext
    {

        public DbContextTarget(DbContextOptions<DbContextTarget> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new UsuarioMap(modelBuilder.Entity<Usuario>());

        }


    }
}
