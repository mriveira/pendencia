using System;
using Common.Domain.Interfaces;
using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Interfaces.Services;
using System.Linq;
using Common.Domain;

namespace Target.Pendencias.Domain.Services
{
    public class PendenciaTemposService : PendenciaTemposServiceBase, IPendenciaTemposService
    {

        public PendenciaTemposService(IPendenciaTemposRepository rep, ICache cache, CurrentUser user)
            : base(rep, cache, user)
        {


        }

        public void EditarTempo(PendenciaTempos entity, DateTime inicio, DateTime? fim, string nota)
        {
            entity.EditarTempo(inicio, fim, nota);
        }

        public override Summary GetSummary(PaginateResult<PendenciaTempos> paginateResult)
        {
            var result = new TimeSpan(paginateResult.ResultPaginatedData.Sum(_ => _.CalcularDiferencaTimeSheet().Ticks));

            return new Summary
            {   
                Total = paginateResult.TotalCount,
                AdditionalSummary = new {
                    TotalHoras = result.ToString(@"hh\:mm")
                }
            };
        }
    }
}
