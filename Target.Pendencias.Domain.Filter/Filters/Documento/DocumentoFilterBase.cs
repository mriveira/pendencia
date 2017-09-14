using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class DocumentoFilterBase : FilterBase
    {

        public virtual int DocumentoId { get; set;} 
        public virtual string Arquivo { get; set;} 
        public virtual string ext { get; set;} 


    }
}
