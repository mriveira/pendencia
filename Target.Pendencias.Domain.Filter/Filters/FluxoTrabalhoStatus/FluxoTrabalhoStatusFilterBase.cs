using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class FluxoTrabalhoStatusFilterBase : FilterBase
    {

        public int FluxoTrabalhoStatusId { get; set;} 
        public string Nome { get; set;} 
        public int FluxoTrabalhoTipoId { get; set;} 
        public string CorFundo { get; set;} 
        public string CorFonte { get; set;} 
        public int? Ordem { get; set;} 


    }
}
