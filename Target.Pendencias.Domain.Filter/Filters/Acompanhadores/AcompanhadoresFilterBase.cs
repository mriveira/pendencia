using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class AcompanhadoresFilterBase : FilterBase
    {

        public int PendenciaId { get; set;} 
        public int UsuarioId { get; set;} 


    }
}
