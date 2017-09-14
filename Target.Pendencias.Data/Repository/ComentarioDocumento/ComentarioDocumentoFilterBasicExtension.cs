using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ComentarioDocumentoFilterBasicExtension
    {

        public static IQueryable<ComentarioDocumento> WithBasicFilters(this IQueryable<ComentarioDocumento> queryBase, ComentarioDocumentoFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.DocumentoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.DocumentoId == filters.DocumentoId);
			}
            if (filters.ComentarioId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ComentarioId == filters.ComentarioId);
			}


            return queryFilter;
        }

		
    }
}