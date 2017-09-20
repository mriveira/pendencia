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
    public class PendenciaTemposApplicationService : PendenciaTemposApplicationServiceBase
    {

        public PendenciaTemposApplicationService(IPendenciaTemposService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache, user)
        {

        }

        protected override System.Collections.Generic.IEnumerable<TDS> MapperDomainToResult<TDS>(FilterBase filter, PaginateResult<PendenciaTempos> dataList)
        {
            return base.MapperDomainToResult<PendenciaTemposDtoSpecializedResult>(filter, dataList) as IEnumerable<TDS>;
        }

        //protected override async Task<PendenciaTempos> AlterDomainWithDto<TDS>(TDS dto)
        //{
        //    var _pendenciatempos = dto as PendenciaTemposDto;
        //    var resultDefault = await this._serviceBase.GetOne(new PendenciaTemposFilter { PendenciaTemposId = _pendenciatempos.PendenciaTemposId });

        //    //Inicio da Transferencia dos valores
        //    if (_pendenciatempos.AttributeBehavior == "EditarTempo")
        //    {
        //        var result = await this._serviceBase.GetOne(new PendenciaTemposFilter
        //        {
        //            PendenciaTemposId = _pendenciatempos.PendenciaTemposId,
        //            QueryOptimizerBehavior = "EditarTempo"
        //        });
        //        result.SetAttributeBehavior("EditarTempo");

        //        this._service.EditarTempo(result, _pendenciatempos.Inicio, _pendenciatempos.Fim, _pendenciatempos.Nota);
        //        return result;
        //    }

        //    //Fim da Transferencia dos valores

        //    return resultDefault;
        //}

    }
}
