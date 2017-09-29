using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class ProjetoDocumentoBase : DomainBase
    {
        public ProjetoDocumentoBase()
        {

        }
        public ProjetoDocumentoBase(int projetoid, int documentoid)
        {
            this.ProjetoId = projetoid;
            this.DocumentoId = documentoid;

        }

        public virtual int ProjetoId { get; protected set; }
        public virtual int DocumentoId { get; protected set; }




    }
}
