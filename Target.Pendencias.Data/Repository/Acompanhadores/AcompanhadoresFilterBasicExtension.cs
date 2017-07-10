using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class AcompanhadoresFilterBasicExtension
    {

        public static IQueryable<Acompanhadores> WithBasicFilters(this IQueryable<Acompanhadores> queryBase, AcompanhadoresFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.PendenciaId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PendenciaId == filters.PendenciaId);
			};
            if (filters.UsuarioId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UsuarioId == filters.UsuarioId);
			};


            return queryFilter;
        }

    }
}