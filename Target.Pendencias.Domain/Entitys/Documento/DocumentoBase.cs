using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class DocumentoBase : DomainBaseWithUserCreate
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

        public virtual int DocumentoId { get; protected set; }
        public virtual string Arquivo { get; protected set; }
        public virtual string ext { get; protected set; }
        public virtual string Tags { get; protected set; }


		public virtual void SetarTags(string tags)
		{
			this.Tags = tags;
		}


    }
}
