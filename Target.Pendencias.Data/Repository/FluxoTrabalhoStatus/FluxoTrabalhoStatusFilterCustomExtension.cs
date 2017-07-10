using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class FluxoTrabalhoStatusFilterCustomExtension
    {

        public static IQueryable<FluxoTrabalhoStatus> WithCustomFilters(this IQueryable<FluxoTrabalhoStatus> queryBase, FluxoTrabalhoStatusFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<FluxoTrabalhoStatus> WithLimitTenant(this IQueryable<FluxoTrabalhoStatus> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

