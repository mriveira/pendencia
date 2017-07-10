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

        public int DocumentoId { get; protected set; }
        public int ComentarioId { get; protected set; }




    }
}
