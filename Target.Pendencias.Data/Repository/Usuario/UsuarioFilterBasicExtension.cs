using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class UsuarioFilterBasicExtension
    {

        public static IQueryable<Usuario> WithBasicFilters(this IQueryable<Usuario> queryBase, UsuarioFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.UsuarioId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UsuarioId == filters.UsuarioId);
			}
            if (filters.Nome.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Nome.Contains(filters.Nome));
			}
            if (filters.Foto.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Foto.Contains(filters.Foto));
			}
            if (filters.Email.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Email.Contains(filters.Email));
			}
            if (filters.Senha.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Senha.Contains(filters.Senha));
			}
            if (filters.UsuarioTipoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UsuarioTipoId == filters.UsuarioTipoId);
			}
            if (filters.Ativo.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Ativo == filters.Ativo);
			}
            if (filters.UsuarioDonoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UsuarioDonoId != null && _.UsuarioDonoId.Value == filters.UsuarioDonoId);
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