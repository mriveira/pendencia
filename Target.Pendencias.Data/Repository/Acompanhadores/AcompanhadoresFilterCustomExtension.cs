using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class AcompanhadoresFilterCustomExtension
    {

        public static IQueryable<Acompanhadores> WithCustomFilters(this IQueryable<Acompanhadores> queryBase, AcompanhadoresFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<Acompanhadores> WithLimitTenant(this IQueryable<Acompanhadores> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

