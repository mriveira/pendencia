using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class FluxoTrabalhoStatusOrderCustomExtension
    {

        public static IQueryable<FluxoTrabalhoStatus> OrderByDomain(this IQueryable<FluxoTrabalhoStatus> queryBase, FluxoTrabalhoStatusFilter filters)
        {
            return queryBase.OrderBy(_ => _.FluxoTrabalhoStatusId);
        }

    }
}

