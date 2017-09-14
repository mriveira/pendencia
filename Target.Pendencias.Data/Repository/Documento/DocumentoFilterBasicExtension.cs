using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class DocumentoFilterBasicExtension
    {

        public static IQueryable<Documento> WithBasicFilters(this IQueryable<Documento> queryBase, DocumentoFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.DocumentoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.DocumentoId == filters.DocumentoId);
			}
            if (filters.Arquivo.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Arquivo.Contains(filters.Arquivo));
			}
            if (filters.ext.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ext.Contains(filters.ext));
			}


            return queryFilter;
        }

		
    }
}