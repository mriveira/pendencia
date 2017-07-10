using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendeciaPrioridadeOrderCustomExtension
    {

        public static IQueryable<PendeciaPrioridade> OrderByDomain(this IQueryable<PendeciaPrioridade> queryBase, PendeciaPrioridadeFilter filters)
        {
            return queryBase.OrderBy(_ => _.PendeciaPrioridadeId);
        }

    }
}

