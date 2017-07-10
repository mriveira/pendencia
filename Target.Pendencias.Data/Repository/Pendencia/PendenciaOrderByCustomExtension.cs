using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaOrderCustomExtension
    {

        public static IQueryable<Pendencia> OrderByDomain(this IQueryable<Pendencia> queryBase, PendenciaFilter filters)
        {
            return queryBase.OrderBy(_ => _.PendenciaId);
        }

    }
}

