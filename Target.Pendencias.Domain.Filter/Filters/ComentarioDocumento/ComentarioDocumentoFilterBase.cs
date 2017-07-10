using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class ComentarioDocumentoFilterBase : FilterBase
    {

        public int DocumentoId { get; set;} 
        public int ComentarioId { get; set;} 


    }
}
