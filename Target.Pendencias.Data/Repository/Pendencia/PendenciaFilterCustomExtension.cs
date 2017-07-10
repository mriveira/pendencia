using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaFilterCustomExtension
    {

        public static IQueryable<Pendencia> WithCustomFilters(this IQueryable<Pendencia> queryBase, PendenciaFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<Pendencia> WithLimitTenant(this IQueryable<Pendencia> queryBase, CurrentUser user)
        {
            var queryFilter = queryBase;
            if (user.IsTenant())
            {
                var tenantId = user.GetTenantId<int>();
                var tenantOwnerId = user.GetTenantOwnerId<int>();

                queryFilter = queryFilter.Where(_ => _.UsuarioId == tenantId || (_.Usuario != null && _.Usuario.UsuarioDonoId == tenantOwnerId));

            }

            return queryFilter;
        }

    }
}

