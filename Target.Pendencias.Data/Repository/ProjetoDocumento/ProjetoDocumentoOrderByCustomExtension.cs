using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ProjetoDocumentoOrderCustomExtension
    {

        public static IQueryable<ProjetoDocumento> OrderByDomain(this IQueryable<ProjetoDocumento> queryBase, ProjetoDocumentoFilter filters)
        {
            return queryBase;
        }

    }
}

