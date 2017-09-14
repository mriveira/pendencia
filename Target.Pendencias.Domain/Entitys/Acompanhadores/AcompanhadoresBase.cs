using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class AcompanhadoresBase : DomainBase
    {
        public AcompanhadoresBase()
        {

        }
        public AcompanhadoresBase(int pendenciaid, int usuarioid)
        {
            this.PendenciaId = pendenciaid;
            this.UsuarioId = usuarioid;

        }

        public virtual int PendenciaId { get; protected set; }
        public virtual int UsuarioId { get; protected set; }




    }
}
