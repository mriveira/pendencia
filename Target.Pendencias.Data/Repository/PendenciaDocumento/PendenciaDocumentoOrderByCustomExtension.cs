using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaDocumentoOrderCustomExtension
    {

        public static IQueryable<PendenciaDocumento> OrderByDomain(this IQueryable<PendenciaDocumento> queryBase, PendenciaDocumentoFilter filters)
        {
            return queryBase.OrderBy(_ => _.PendenciaId).ThenBy(_ => _.DocumentoId);
        }

    }
}

