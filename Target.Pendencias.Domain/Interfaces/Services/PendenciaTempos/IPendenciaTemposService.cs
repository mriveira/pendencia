using Common.Domain.Interfaces;
using System;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;

namespace Target.Pendencias.Domain.Interfaces.Services
{
    public interface IPendenciaTemposService : IServiceBase<PendenciaTempos, PendenciaTemposFilter>
    {
        void EditarTempo(PendenciaTempos entity, DateTime inicio, DateTime? fim, string nota);
    }
}
