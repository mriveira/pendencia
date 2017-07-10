using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendeciaPrioridadeFilterCustomExtension
    {

        public static IQueryable<PendeciaPrioridade> WithCustomFilters(this IQueryable<PendeciaPrioridade> queryBase, PendeciaPrioridadeFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<PendeciaPrioridade> WithLimitTenant(this IQueryable<PendeciaPrioridade> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

