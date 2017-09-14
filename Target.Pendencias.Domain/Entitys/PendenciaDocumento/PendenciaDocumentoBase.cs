using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendenciaDocumentoBase : DomainBase
    {
        public PendenciaDocumentoBase()
        {

        }
        public PendenciaDocumentoBase(int pendenciaid, int documentoid)
        {
            this.PendenciaId = pendenciaid;
            this.DocumentoId = documentoid;

        }

        public virtual int PendenciaId { get; protected set; }
        public virtual int DocumentoId { get; protected set; }




    }
}
