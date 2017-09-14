using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class ProjetoFluxoTrabalhoStatusFilterBase : FilterBase
    {

        public virtual int ProjetoId { get; set;} 
        public virtual int FluxoTrabalhoStatusId { get; set;} 


    }
}
