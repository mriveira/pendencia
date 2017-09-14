using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendenciaEventosBase : DomainBaseWithUserCreate
    {
        public PendenciaEventosBase()
        {

        }
        public PendenciaEventosBase(int pendenciaeventosid, int pendenciaid, string descricao)
        {
            this.PendenciaEventosId = pendenciaeventosid;
            this.PendenciaId = pendenciaid;
            this.Descricao = descricao;

        }

        public virtual int PendenciaEventosId { get; protected set; }
        public virtual int PendenciaId { get; protected set; }
        public virtual string Descricao { get; protected set; }
        public virtual DateTime? Data { get; protected set; }


		public virtual void SetarData(DateTime? data)
		{
			this.Data = data;
		}


    }
}
