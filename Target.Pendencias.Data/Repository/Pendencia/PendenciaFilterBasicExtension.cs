using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class PendenciaFilterBasicExtension
    {

        public static IQueryable<Pendencia> WithBasicFilters(this IQueryable<Pendencia> queryBase, PendenciaFilter filters)
        {
            var queryFilter = queryBase;

            if (filters.ProjetoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.ProjetoId == filters.ProjetoId);
			};
            if (filters.PendenciaId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PendenciaId == filters.PendenciaId);
			};
            if (filters.Resumo.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Resumo.Contains(filters.Resumo));
			};
            if (filters.Descricao.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Descricao.Contains(filters.Descricao));
			};
            if (filters.RequisitadoPor.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.RequisitadoPor.Contains(filters.RequisitadoPor));
			};
            if (filters.TempoEstimado.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.TempoEstimado != null && _.TempoEstimado.Value == filters.TempoEstimado);
			};
            if (filters.PontosEstimados.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PontosEstimados != null && _.PontosEstimados.Value == filters.PontosEstimados);
			};
            if (filters.PrazoStart.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Prazo != null && _.Prazo.Value >= filters.PrazoStart.Value);
			};
            if (filters.PrazoEnd.IsSent()) 
			{ 
				filters.PrazoEnd = filters.PrazoEnd.Value.AddDays(1).AddMilliseconds(-1);
				queryFilter = queryFilter.Where(_=>_.Prazo != null &&  _.Prazo.Value <= filters.PrazoEnd);
			};

            if (filters.UsuarioId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UsuarioId == filters.UsuarioId);
			};
            if (filters.PendenciaTipoId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PendenciaTipoId == filters.PendenciaTipoId);
			};
            if (filters.FluxoTrabalhoStatusId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.FluxoTrabalhoStatusId == filters.FluxoTrabalhoStatusId);
			};
            if (filters.PendenciaPrioridadeId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.PendenciaPrioridadeId == filters.PendenciaPrioridadeId);
			};
            if (filters.Tags.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Tags.Contains(filters.Tags));
			};
            if (filters.DataConclusaoStart.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.DataConclusao != null && _.DataConclusao.Value >= filters.DataConclusaoStart.Value);
			};
            if (filters.DataConclusaoEnd.IsSent()) 
			{ 
				filters.DataConclusaoEnd = filters.DataConclusaoEnd.Value.AddDays(1).AddMilliseconds(-1);
				queryFilter = queryFilter.Where(_=>_.DataConclusao != null &&  _.DataConclusao.Value <= filters.DataConclusaoEnd);
			};

            if (filters.UserCreateId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UserCreateId == filters.UserCreateId);
			};
            if (filters.UserCreateDateStart.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UserCreateDate >= filters.UserCreateDateStart );
			};
            if (filters.UserCreateDateEnd.IsSent()) 
			{ 
				filters.UserCreateDateEnd = filters.UserCreateDateEnd.AddDays(1).AddMilliseconds(-1);
				queryFilter = queryFilter.Where(_=>_.UserCreateDate  <= filters.UserCreateDateEnd);
			};

            if (filters.UserAlterId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UserAlterId != null && _.UserAlterId.Value == filters.UserAlterId);
			};
            if (filters.UserAlterDateStart.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.UserAlterDate != null && _.UserAlterDate.Value >= filters.UserAlterDateStart.Value);
			};
            if (filters.UserAlterDateEnd.IsSent()) 
			{ 
				filters.UserAlterDateEnd = filters.UserAlterDateEnd.Value.AddDays(1).AddMilliseconds(-1);
				queryFilter = queryFilter.Where(_=>_.UserAlterDate != null &&  _.UserAlterDate.Value <= filters.UserAlterDateEnd);
			};



            return queryFilter;
        }

    }
}