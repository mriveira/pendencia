using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class FluxoTrabalhoTipoOrderCustomExtension
    {

        public static IQueryable<FluxoTrabalhoTipo> OrderByDomain(this IQueryable<FluxoTrabalhoTipo> queryBase, FluxoTrabalhoTipoFilter filters)
        {
            return queryBase.OrderBy(_ => _.FluxoTrabalhoTipoId);
        }

    }
}

