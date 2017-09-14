using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class PendeciaPrioridadeFilterBase : FilterBase
    {

        public virtual int PendeciaPrioridadeId { get; set;} 
        public virtual string Nome { get; set;} 


    }
}
