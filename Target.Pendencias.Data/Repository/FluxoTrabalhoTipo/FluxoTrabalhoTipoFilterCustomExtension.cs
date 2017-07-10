using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class FluxoTrabalhoTipoFilterCustomExtension
    {

        public static IQueryable<FluxoTrabalhoTipo> WithCustomFilters(this IQueryable<FluxoTrabalhoTipo> queryBase, FluxoTrabalhoTipoFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<FluxoTrabalhoTipo> WithLimitTenant(this IQueryable<FluxoTrabalhoTipo> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

