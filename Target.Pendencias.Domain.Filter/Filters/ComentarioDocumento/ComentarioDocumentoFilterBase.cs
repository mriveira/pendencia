using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class ComentarioDocumentoFilterBase : FilterBase
    {

        public virtual int DocumentoId { get; set;} 
        public virtual int ComentarioId { get; set;} 


    }
}
