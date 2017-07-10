using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class PendenciaDocumentoFilterBase : FilterBase
    {

        public int PendenciaId { get; set;} 
        public int DocumentoId { get; set;} 


    }
}
