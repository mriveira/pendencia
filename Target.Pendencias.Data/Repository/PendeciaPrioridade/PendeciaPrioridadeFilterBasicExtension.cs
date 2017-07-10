using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendeciaPrioridadeFilterBasicExtension
    {

        public static IQueryable<PendeciaPrioridade> WithBasicFilters(this IQueryable<PendeciaPrioridade> queryBase, PendeciaPrioridadeFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.PendeciaPrioridadeId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PendeciaPrioridadeId == filters.PendeciaPrioridadeId);
			};
            if (filters.Nome.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Nome.Contains(filters.Nome));
			};


            return queryFilter;
        }

    }
}