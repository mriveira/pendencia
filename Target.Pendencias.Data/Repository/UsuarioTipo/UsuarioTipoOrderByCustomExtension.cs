using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class UsuarioTipoOrderCustomExtension
    {

        public static IQueryable<UsuarioTipo> OrderByDomain(this IQueryable<UsuarioTipo> queryBase, UsuarioTipoFilter filters)
        {
            return queryBase.OrderBy(_ => _.UsuarioTipoId);
        }

    }
}

