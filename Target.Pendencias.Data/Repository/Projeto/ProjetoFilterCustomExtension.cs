using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ProjetoFilterCustomExtension
    {

        public static IQueryable<Projeto> WithCustomFilters(this IQueryable<Projeto> queryBase, ProjetoFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<Projeto> WithLimitTenant(this IQueryable<Projeto> queryBase, CurrentUser user)
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

