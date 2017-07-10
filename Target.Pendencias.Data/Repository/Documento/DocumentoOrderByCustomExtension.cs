using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class DocumentoOrderCustomExtension
    {

        public static IQueryable<Documento> OrderByDomain(this IQueryable<Documento> queryBase, DocumentoFilter filters)
        {
            return queryBase.OrderBy(_ => _.DocumentoId);
        }

    }
}

