using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;
using System;
using Common.Domain;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaTemposFilterCustomExtension
    {

        public static IQueryable<PendenciaTempos> WithCustomFilters(this IQueryable<PendenciaTempos> queryBase, PendenciaTemposFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.AttributeBehavior == "TimeSheet")
            {
                queryFilter = queryFilter.Where(_ => _.Inicio >= DateTime.Now.TodayZeroHours());
                queryFilter = queryFilter.Where(_ => _.Inicio <= DateTime.Now.TomorrowZeroHours());

            }

            return queryFilter;
        }

        public static IQueryable<PendenciaTempos> WithLimitTenant(this IQueryable<PendenciaTempos> queryBase, CurrentUser user)
        {
            var queryFilter = queryBase;
            if (user.IsTenant())
            {
                var tenantId = user.GetTenantId<int>();
                queryFilter = queryFilter.Where(_ => _.UsuarioId == tenantId);

            }

            return queryFilter;
        }

    }
}

