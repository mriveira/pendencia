using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class UsuarioTipoFilterCustomExtension
    {

        public static IQueryable<UsuarioTipo> WithCustomFilters(this IQueryable<UsuarioTipo> queryBase, UsuarioTipoFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<UsuarioTipo> WithLimitTenant(this IQueryable<UsuarioTipo> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

