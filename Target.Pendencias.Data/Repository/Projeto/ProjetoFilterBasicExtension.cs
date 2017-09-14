using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ProjetoFilterBasicExtension
    {

        public static IQueryable<Projeto> WithBasicFilters(this IQueryable<Projeto> queryBase, ProjetoFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.ProjetoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ProjetoId == filters.ProjetoId);
			}
            if (filters.Nome.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Nome.Contains(filters.Nome));
			}
            if (filters.Descricao.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Descricao.Contains(filters.Descricao));
			}
            if (filters.Visao.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Visao.Contains(filters.Visao));
			}
            if (filters.ClienteId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ClienteId == filters.ClienteId);
			}
            if (filters.UsuarioId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UsuarioId == filters.UsuarioId);
			}
            if (filters.ChaveUnica.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ChaveUnica.Contains(filters.ChaveUnica));
			}
            if (filters.InicioStart.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Inicio != null && _.Inicio.Value >= filters.InicioStart.Value);
			}
            if (filters.InicioEnd.IsSent()) 
			{ 
				filters.InicioEnd = filters.InicioEnd.Value.AddDays(1).AddMilliseconds(-1);
				queryFilter = queryFilter.Where(_=>_.Inicio != null &&  _.Inicio.Value <= filters.InicioEnd);
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