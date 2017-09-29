using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ProjetoDocumentoFilterCustomExtension
    {

        public static IQueryable<ProjetoDocumento> WithCustomFilters(this IQueryable<ProjetoDocumento> queryBase, ProjetoDocumentoFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<ProjetoDocumento> WithLimitTenant(this IQueryable<ProjetoDocumento> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

