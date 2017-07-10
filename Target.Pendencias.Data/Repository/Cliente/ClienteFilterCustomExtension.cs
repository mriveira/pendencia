using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;
using System;

namespace Target.Pendencias.Data.Repository
{
    public static class ClienteFilterCustomExtension
    {

        public static IQueryable<Cliente> WithCustomFilters(this IQueryable<Cliente> queryBase, ClienteFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

        public static IQueryable<Cliente> WithLimitTenant(this IQueryable<Cliente> queryBase, CurrentUser user)
        {

            var queryFilter = queryBase;
            if (user.IsTenant())
            {
                var tenantId = user.GetTenantId<int>();
                var tenantOwnerId = user.GetTenantOwnerId<int>();

                queryFilter = queryFilter.Where(_ => _.UsuarioId == tenantId || _.UsuarioId == tenantOwnerId || (_.Usuario != null && _.Usuario.UsuarioDonoId == tenantOwnerId));

            }


            return queryFilter;
        }

    }
}

