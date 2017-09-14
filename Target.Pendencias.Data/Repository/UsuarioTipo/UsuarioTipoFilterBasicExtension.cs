using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class UsuarioTipoFilterBasicExtension
    {

        public static IQueryable<UsuarioTipo> WithBasicFilters(this IQueryable<UsuarioTipo> queryBase, UsuarioTipoFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.UsuarioTipoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UsuarioTipoId == filters.UsuarioTipoId);
			}
            if (filters.Nome.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Nome.Contains(filters.Nome));
			}


            return queryFilter;
        }

		
    }
}