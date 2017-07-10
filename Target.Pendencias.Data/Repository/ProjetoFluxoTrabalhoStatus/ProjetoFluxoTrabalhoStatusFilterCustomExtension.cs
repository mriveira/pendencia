using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ProjetoFluxoTrabalhoStatusFilterCustomExtension
    {

        public static IQueryable<ProjetoFluxoTrabalhoStatus> WithCustomFilters(this IQueryable<ProjetoFluxoTrabalhoStatus> queryBase, ProjetoFluxoTrabalhoStatusFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<ProjetoFluxoTrabalhoStatus> WithLimitTenant(this IQueryable<ProjetoFluxoTrabalhoStatus> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

