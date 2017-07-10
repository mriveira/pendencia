using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaTipoOrderCustomExtension
    {

        public static IQueryable<PendenciaTipo> OrderByDomain(this IQueryable<PendenciaTipo> queryBase, PendenciaTipoFilter filters)
        {
            return queryBase.OrderBy(_ => _.PendenciaTipoId);
        }

    }
}

