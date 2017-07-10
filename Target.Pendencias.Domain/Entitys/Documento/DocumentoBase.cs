using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class DocumentoBase : DomainBase
    {
        public DocumentoBase()
        {

        }
        public DocumentoBase(int documentoid, string arquivo, string ext)
        {
            this.DocumentoId = documentoid;
            this.Arquivo = arquivo;
            this.ext = ext;

        }

        public int DocumentoId { get; protected set; }
        public string Arquivo { get; protected set; }
        public string ext { get; protected set; }




    }
}
