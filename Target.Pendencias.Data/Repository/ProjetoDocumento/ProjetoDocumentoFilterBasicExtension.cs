using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ProjetoDocumentoFilterBasicExtension
    {

        public static IQueryable<ProjetoDocumento> WithBasicFilters(this IQueryable<ProjetoDocumento> queryBase, ProjetoDocumentoFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.ProjetoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ProjetoId == filters.ProjetoId);
			}
            if (filters.DocumentoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.DocumentoId == filters.DocumentoId);
			}


            return queryFilter;
        }

		
    }
}