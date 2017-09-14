using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ComentarioFilterBasicExtension
    {

        public static IQueryable<Comentario> WithBasicFilters(this IQueryable<Comentario> queryBase, ComentarioFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.ComentarioId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ComentarioId == filters.ComentarioId);
			}
            if (filters.Descricao.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Descricao.Contains(filters.Descricao));
			}
            if (filters.DataStart.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Data >= filters.DataStart );
			}
            if (filters.DataEnd.IsSent()) 
			{ 
				filters.DataEnd = filters.DataEnd.AddDays(1).AddMilliseconds(-1);
				queryFilter = queryFilter.Where(_=>_.Data  <= filters.DataEnd);
			}

            if (filters.UsuarioId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UsuarioId == filters.UsuarioId);
			}
            if (filters.PendenciaId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PendenciaId == filters.PendenciaId);
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