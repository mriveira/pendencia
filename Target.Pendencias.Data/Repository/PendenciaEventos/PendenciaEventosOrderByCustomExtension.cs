using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaEventosOrderCustomExtension
    {

        public static IQueryable<PendenciaEventos> OrderByDomain(this IQueryable<PendenciaEventos> queryBase, PendenciaEventosFilter filters)
        {
            return queryBase.OrderBy(_ => _.PendenciaEventosId);
        }

    }
}

