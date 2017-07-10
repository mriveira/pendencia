using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class UsuarioOrderCustomExtension
    {

        public static IQueryable<Usuario> OrderByDomain(this IQueryable<Usuario> queryBase, UsuarioFilter filters)
        {
            return queryBase.OrderBy(_ => _.UsuarioId);
        }

    }
}

