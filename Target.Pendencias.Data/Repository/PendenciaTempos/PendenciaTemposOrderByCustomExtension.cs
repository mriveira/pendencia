using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaTemposOrderCustomExtension
    {

        public static IQueryable<PendenciaTempos> OrderByDomain(this IQueryable<PendenciaTempos> queryBase, PendenciaTemposFilter filters)
        {
            return queryBase.OrderBy(_ => _.PendenciaTemposId);
        }

    }
}

