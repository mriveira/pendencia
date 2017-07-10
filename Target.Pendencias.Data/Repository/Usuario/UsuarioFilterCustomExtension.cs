using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class UsuarioFilterCustomExtension
    {

        public static IQueryable<Usuario> WithCustomFilters(this IQueryable<Usuario> queryBase, UsuarioFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

        public static IQueryable<Usuario> WithLimitTenant(this IQueryable<Usuario> queryBase, CurrentUser user)
        {
            var queryFilter = queryBase;
            if (user.IsTenant())
            {
                var tenantId = user.GetTenantId<int>();
                var tenantOwnerId = user.GetTenantOwnerId<int>();

                queryFilter = queryFilter.Where(_ => _.UsuarioId == tenantId || (_.UsuarioDonoId == tenantOwnerId));

            }
            else {
                queryFilter = queryFilter.Where(_ => _.UsuarioDonoId == null);
            }

            return queryFilter;
        }

    }
}

