using Common.Domain.Interfaces;
using Target.Pendencias.Application.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using Target.Pendencias.Domain.Interfaces.Services;
using Target.Pendencias.Dto;
using System.Linq;
using System.Collections.Generic;
using Common.Domain.Base;
using Common.Domain.Model;
using System.Threading.Tasks;

namespace Target.Pendencias.Application
{
    public class PendenciaApplicationService : PendenciaApplicationServiceBase
    {

        public PendenciaApplicationService(IPendenciaService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache, user)
        {

        }

        protected override System.Collections.Generic.IEnumerable<TDS> MapperDomainToResult<TDS>(FilterBase filter, PaginateResult<Pendencia> dataList)
        {
            return base.MapperDomainToResult<PendenciaDtoSpecializedResult>(filter, dataList) as IEnumerable<TDS>;
        }


        //protected override async Task<Pendencia> AlterDomainWithDto<TDS>(TDS dto)
        //{
        //    var _pendencia = dto as PendenciaDtoSpecialized;

        //    if (_pendencia.AttributeBehavior == "Play")
        //    {
        //        var result = await this._serviceBase.GetOne(new PendenciaFilter
        //        {
        //            PendenciaId = _pendencia.PendenciaId,
        //            QueryOptimizerBehavior = "Play"
        //        });

        //        result.SetAttributeBehavior("Play");
        //        this._service.Play(result);
        //        return result;
        //    }

        //    if (_pendencia.AttributeBehavior == "Stop")
        //    {
        //        var result = await this._serviceBase.GetOne(new PendenciaFilter
        //        {
        //            PendenciaId = _pendencia.PendenciaId,
        //            QueryOptimizerBehavior = "Stop"
        //        });

        //        this._service.Stop(result, _pendencia.Nota);
        //        return result;
        //    }

        //    if (_pendencia.AttributeBehavior == "ConcluirPendencia")
        //    {
        //        var result = await this._serviceBase.GetOne(new PendenciaFilter
        //        {
        //            PendenciaId = _pendencia.PendenciaId,
        //            QueryOptimizerBehavior = "ConcluirPendencia"
        //        });

        //        var comentario = _pendencia.CollectionComentario.FirstOrDefault().Descricao;
        //        this._service.Concluir(result, _pendencia.Nota, comentario);
        //        return result;
        //    }

        //    if (_pendencia.AttributeBehavior == "ComentarPendencia")
        //    {
        //        var result = await this._serviceBase.GetOne(new PendenciaFilter
        //        {
        //            PendenciaId = _pendencia.PendenciaId,
        //            QueryOptimizerBehavior = "ComentarPendencia"
        //        });

        //        var comentario = _pendencia.CollectionComentario.FirstOrDefault().Descricao;
        //        this._service.Comentar(result, comentario);
        //        return result;
        //    }

        //    if (_pendencia.AttributeBehavior == "Reclassificar")
        //    {
        //        var result = await this._serviceBase.GetOne(new PendenciaFilter
        //        {
        //            PendenciaId = _pendencia.PendenciaId,
        //            QueryOptimizerBehavior = "Reclassificar"
        //        });

        //        var comentario = _pendencia.CollectionComentario.FirstOrDefault().Descricao;
        //        this._service.Reclassificar(result, comentario, _pendencia.FluxoTrabalhoStatusId);
        //        return result;
        //    }


        //    var resultDefault = await this._serviceBase.GetOne(new PendenciaFilter { PendenciaId = _pendencia.PendenciaId });
        //    return resultDefault;
        //}

    }
}
