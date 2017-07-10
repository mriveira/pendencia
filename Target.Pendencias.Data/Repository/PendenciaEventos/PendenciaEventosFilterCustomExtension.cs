using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaEventosFilterCustomExtension
    {

        public static IQueryable<PendenciaEventos> WithCustomFilters(this IQueryable<PendenciaEventos> queryBase, PendenciaEventosFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<PendenciaEventos> WithLimitTenant(this IQueryable<PendenciaEventos> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

