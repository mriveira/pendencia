using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class FluxoTrabalhoStatusFilterBasicExtension
    {

        public static IQueryable<FluxoTrabalhoStatus> WithBasicFilters(this IQueryable<FluxoTrabalhoStatus> queryBase, FluxoTrabalhoStatusFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.FluxoTrabalhoStatusId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.FluxoTrabalhoStatusId == filters.FluxoTrabalhoStatusId);
			};
            if (filters.Nome.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Nome.Contains(filters.Nome));
			};
            if (filters.FluxoTrabalhoTipoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.FluxoTrabalhoTipoId == filters.FluxoTrabalhoTipoId);
			};
            if (filters.CorFundo.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.CorFundo.Contains(filters.CorFundo));
			};
            if (filters.CorFonte.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.CorFonte.Contains(filters.CorFonte));
			};
            if (filters.Ordem.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Ordem != null && _.Ordem.Value == filters.Ordem);
			};


            return queryFilter;
        }

    }
}