using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class FluxoTrabalhoTipoFilterBase : FilterBase
    {

        public virtual int FluxoTrabalhoTipoId { get; set;} 
        public virtual string Nome { get; set;} 
        public virtual string Descricao { get; set;} 


    }
}
