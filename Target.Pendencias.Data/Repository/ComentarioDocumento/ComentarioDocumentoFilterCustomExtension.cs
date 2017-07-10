using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ComentarioDocumentoFilterCustomExtension
    {

        public static IQueryable<ComentarioDocumento> WithCustomFilters(this IQueryable<ComentarioDocumento> queryBase, ComentarioDocumentoFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<ComentarioDocumento> WithLimitTenant(this IQueryable<ComentarioDocumento> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

