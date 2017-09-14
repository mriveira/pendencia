using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;

namespace Target.Pendencias.Domain.Interfaces.Services
{
    public interface IPendenciaService : IServiceBase<Pendencia, PendenciaFilter>
    {
        //void Play(Pendencia entity);
        //void Stop(Pendencia entity, string nota);
        //void Concluir(Pendencia resultPlay, string nota, string comentario);
        //void Reclassificar(Pendencia resultPlay, string comentario, int fluxoTrabalhoStatusId);
        //void Comentar(Pendencia resultPlay, string comentario);
    }
}
