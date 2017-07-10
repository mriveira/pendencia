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

namespace Target.Pendencias.Application
{
    public class PendenciaEventosApplicationService : PendenciaEventosApplicationServiceBase
    {

        public PendenciaEventosApplicationService(IPendenciaEventosService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache, user)
        {
  
        }

        protected override System.Collections.Generic.IEnumerable<TDS> MapperDomainToResult<TDS>(FilterBase filter, PaginateResult<PendenciaEventos> dataList)
        {
            return base.MapperDomainToResult<PendenciaEventosDtoSpecializedResult>(filter, dataList) as IEnumerable<TDS>;
        }


    }
}
