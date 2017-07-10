using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class TagsFilterBasicExtension
    {

        public static IQueryable<Tags> WithBasicFilters(this IQueryable<Tags> queryBase, TagsFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.TagsId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.TagsId == filters.TagsId);
			};
            if (filters.Nome.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Nome.Contains(filters.Nome));
			};
            if (filters.ProjetoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ProjetoId == filters.ProjetoId);
			};
            if (filters.PendenciaId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PendenciaId == filters.PendenciaId);
			};


            return queryFilter;
        }

    }
}