using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class PendenciaTipoFilterBase : FilterBase
    {

        public virtual int PendenciaTipoId { get; set;} 
        public virtual string Nome { get; set;} 


    }
}
