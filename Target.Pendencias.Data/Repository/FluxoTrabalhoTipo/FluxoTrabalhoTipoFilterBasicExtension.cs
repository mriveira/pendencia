using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class FluxoTrabalhoTipoFilterBasicExtension
    {

        public static IQueryable<FluxoTrabalhoTipo> WithBasicFilters(this IQueryable<FluxoTrabalhoTipo> queryBase, FluxoTrabalhoTipoFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.FluxoTrabalhoTipoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.FluxoTrabalhoTipoId == filters.FluxoTrabalhoTipoId);
			};
            if (filters.Nome.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Nome.Contains(filters.Nome));
			};


            return queryFilter;
        }

    }
}