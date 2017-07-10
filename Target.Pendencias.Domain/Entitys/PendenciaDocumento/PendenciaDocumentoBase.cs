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

        public int PendenciaId { get; protected set; }
        public int DocumentoId { get; protected set; }




    }
}
