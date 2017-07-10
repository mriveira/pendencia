using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaDocumentoFilterBasicExtension
    {

        public static IQueryable<PendenciaDocumento> WithBasicFilters(this IQueryable<PendenciaDocumento> queryBase, PendenciaDocumentoFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.PendenciaId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PendenciaId == filters.PendenciaId);
			};
            if (filters.DocumentoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.DocumentoId == filters.DocumentoId);
			};


            return queryFilter;
        }

    }
}