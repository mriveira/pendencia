using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaDocumentoFilterCustomExtension
    {

        public static IQueryable<PendenciaDocumento> WithCustomFilters(this IQueryable<PendenciaDocumento> queryBase, PendenciaDocumentoFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<PendenciaDocumento> WithLimitTenant(this IQueryable<PendenciaDocumento> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

