using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class DocumentoFilterBasicExtension
    {

        public static IQueryable<Documento> WithBasicFilters(this IQueryable<Documento> queryBase, DocumentoFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.DocumentoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.DocumentoId == filters.DocumentoId);
			}
            if (filters.Arquivo.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Arquivo.Contains(filters.Arquivo));
			}
            if (filters.ext.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ext.Contains(filters.ext));
			}
            if (filters.Tags.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Tags.Contains(filters.Tags));
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