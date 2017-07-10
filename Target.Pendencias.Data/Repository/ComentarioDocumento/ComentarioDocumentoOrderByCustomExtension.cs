using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ComentarioDocumentoOrderCustomExtension
    {

        public static IQueryable<ComentarioDocumento> OrderByDomain(this IQueryable<ComentarioDocumento> queryBase, ComentarioDocumentoFilter filters)
        {
            return queryBase.OrderBy(_ => _.DocumentoId).ThenBy(_ => _.ComentarioId);
        }

    }
}

