using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendenciaTemposBase : DomainBaseWithUserCreate
    {
        public PendenciaTemposBase()
        {

        }
        public PendenciaTemposBase(int pendenciatemposid, int pendenciaid, int usuarioid, DateTime inicio)
        {
            this.PendenciaTemposId = pendenciatemposid;
            this.PendenciaId = pendenciaid;
            this.UsuarioId = usuarioid;
            this.Inicio = inicio;

        }

        public virtual int PendenciaTemposId { get; protected set; }
        public virtual int PendenciaId { get; protected set; }
        public virtual int UsuarioId { get; protected set; }
        public virtual DateTime Inicio { get; protected set; }
        public virtual DateTime? Fim { get; protected set; }
        public virtual string Nota { get; protected set; }


		public virtual void SetarFim(DateTime? fim)
		{
			this.Fim = fim;
		}
		public virtual void SetarNota(string nota)
		{
			this.Nota = nota;
		}


    }
}
