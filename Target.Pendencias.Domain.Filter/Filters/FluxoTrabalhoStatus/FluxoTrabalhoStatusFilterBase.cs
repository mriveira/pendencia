using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class FluxoTrabalhoStatusFilterBase : FilterBase
    {

        public virtual int FluxoTrabalhoStatusId { get; set;} 
        public virtual string Nome { get; set;} 
        public virtual int FluxoTrabalhoTipoId { get; set;} 
        public virtual string CorFundo { get; set;} 
        public virtual string CorFonte { get; set;} 
        public virtual int? Ordem { get; set;} 


    }
}
