using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class DocumentoFilterBase : FilterBase
    {

        public int DocumentoId { get; set;} 
        public string Arquivo { get; set;} 
        public string ext { get; set;} 


    }
}
