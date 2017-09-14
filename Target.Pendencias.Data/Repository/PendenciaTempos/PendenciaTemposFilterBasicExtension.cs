using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaTemposFilterBasicExtension
    {

        public static IQueryable<PendenciaTempos> WithBasicFilters(this IQueryable<PendenciaTempos> queryBase, PendenciaTemposFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.PendenciaTemposId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PendenciaTemposId == filters.PendenciaTemposId);
			}
            if (filters.PendenciaId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PendenciaId == filters.PendenciaId);
			}
            if (filters.UsuarioId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UsuarioId == filters.UsuarioId);
			}
            if (filters.InicioStart.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Inicio >= filters.InicioStart );
			}
            if (filters.InicioEnd.IsSent()) 
			{ 
				filters.InicioEnd = filters.InicioEnd.AddDays(1).AddMilliseconds(-1);
				queryFilter = queryFilter.Where(_=>_.Inicio  <= filters.InicioEnd);
			}

            if (filters.FimStart.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Fim != null && _.Fim.Value >= filters.FimStart.Value);
			}
            if (filters.FimEnd.IsSent()) 
			{ 
				filters.FimEnd = filters.FimEnd.Value.AddDays(1).AddMilliseconds(-1);
				queryFilter = queryFilter.Where(_=>_.Fim != null &&  _.Fim.Value <= filters.FimEnd);
			}

            if (filters.Nota.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Nota.Contains(filters.Nota));
			}
            if (filters.UserCreateId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UserCreateId == filters.UserCreateId);
			}
            if (filters.UserCreateDateStart.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UserCreateDate >= filters.UserCreateDateStart );
			}
            if (filters.UserCreateDateEnd.IsSent()) 
			{ 
				filters.UserCreateDateEnd = filters.UserCreateDateEnd.AddDays(1).AddMilliseconds(-1);
				queryFilter = queryFilter.Where(_=>_.UserCreateDate  <= filters.UserCreateDateEnd);
			}

            if (filters.UserAlterId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UserAlterId != null && _.UserAlterId.Value == filters.UserAlterId);
			}
            if (filters.UserAlterDateStart.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UserAlterDate != null && _.UserAlterDate.Value >= filters.UserAlterDateStart.Value);
			}
            if (filters.UserAlterDateEnd.IsSent()) 
			{ 
				filters.UserAlterDateEnd = filters.UserAlterDateEnd.Value.AddDays(1).AddMilliseconds(-1);
				queryFilter = queryFilter.Where(_=>_.UserAlterDate != null &&  _.UserAlterDate.Value <= filters.UserAlterDateEnd);
			}



            return queryFilter;
        }

		
    }
}