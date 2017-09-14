using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class PendenciaDocumentoFilterBase : FilterBase
    {

        public virtual int PendenciaId { get; set;} 
        public virtual int DocumentoId { get; set;} 


    }
}
