using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ProjetoFluxoTrabalhoStatusOrderCustomExtension
    {

        public static IQueryable<ProjetoFluxoTrabalhoStatus> OrderByDomain(this IQueryable<ProjetoFluxoTrabalhoStatus> queryBase, ProjetoFluxoTrabalhoStatusFilter filters)
        {
            return queryBase.OrderBy(_ => _.ProjetoId).ThenBy(_ => _.FluxoTrabalhoStatusId);
        }

    }
}

