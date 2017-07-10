using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class ProjetoFluxoTrabalhoStatusFilterBase : FilterBase
    {

        public int ProjetoId { get; set;} 
        public int FluxoTrabalhoStatusId { get; set;} 


    }
}
