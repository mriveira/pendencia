using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaTipoFilterCustomExtension
    {

        public static IQueryable<PendenciaTipo> WithCustomFilters(this IQueryable<PendenciaTipo> queryBase, PendenciaTipoFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<PendenciaTipo> WithLimitTenant(this IQueryable<PendenciaTipo> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

