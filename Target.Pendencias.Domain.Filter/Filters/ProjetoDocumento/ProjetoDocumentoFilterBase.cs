using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class ProjetoDocumentoFilterBase : FilterBase
    {

        public virtual int ProjetoId { get; set;} 
        public virtual int DocumentoId { get; set;} 


    }
}
