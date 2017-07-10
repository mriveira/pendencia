using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaTipoFilterBasicExtension
    {

        public static IQueryable<PendenciaTipo> WithBasicFilters(this IQueryable<PendenciaTipo> queryBase, PendenciaTipoFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.PendenciaTipoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PendenciaTipoId == filters.PendenciaTipoId);
			};
            if (filters.Nome.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Nome.Contains(filters.Nome));
			};


            return queryFilter;
        }

    }
}