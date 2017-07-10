using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ProjetoFluxoTrabalhoStatusFilterBasicExtension
    {

        public static IQueryable<ProjetoFluxoTrabalhoStatus> WithBasicFilters(this IQueryable<ProjetoFluxoTrabalhoStatus> queryBase, ProjetoFluxoTrabalhoStatusFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.ProjetoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ProjetoId == filters.ProjetoId);
			};
            if (filters.FluxoTrabalhoStatusId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.FluxoTrabalhoStatusId == filters.FluxoTrabalhoStatusId);
			};


            return queryFilter;
        }

    }
}