using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class ComentarioDocumentoBase : DomainBase
    {
        public ComentarioDocumentoBase()
        {

        }
        public ComentarioDocumentoBase(int documentoid, int comentarioid)
        {
            this.DocumentoId = documentoid;
            this.ComentarioId = comentarioid;

        }

        public virtual int DocumentoId { get; protected set; }
        public virtual int ComentarioId { get; protected set; }




    }
}
