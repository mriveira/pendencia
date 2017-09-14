using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class UsuarioTipoFilterBase : FilterBase
    {

        public virtual int UsuarioTipoId { get; set;} 
        public virtual string Nome { get; set;} 


    }
}
