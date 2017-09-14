using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class AcompanhadoresFilterBase : FilterBase
    {

        public virtual int PendenciaId { get; set;} 
        public virtual int UsuarioId { get; set;} 


    }
}
