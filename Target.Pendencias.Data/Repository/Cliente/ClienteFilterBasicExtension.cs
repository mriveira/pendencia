using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ClienteFilterBasicExtension
    {

        public static IQueryable<Cliente> WithBasicFilters(this IQueryable<Cliente> queryBase, ClienteFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.ClienteId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ClienteId == filters.ClienteId);
			}
            if (filters.Nome.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Nome.Contains(filters.Nome));
			}
            if (filters.TelefoneDeContato.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.TelefoneDeContato.Contains(filters.TelefoneDeContato));
			}
            if (filters.EmailDeContato.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.EmailDeContato.Contains(filters.EmailDeContato));
			}
            if (filters.CPFCNPJ.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.CPFCNPJ.Contains(filters.CPFCNPJ));
			}
            if (filters.UsuarioId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UsuarioId == filters.UsuarioId);
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