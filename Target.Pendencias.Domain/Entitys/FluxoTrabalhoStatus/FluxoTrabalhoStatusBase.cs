using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class FluxoTrabalhoStatusBase : DomainBase
    {
        public FluxoTrabalhoStatusBase()
        {

        }
        public FluxoTrabalhoStatusBase(int fluxotrabalhostatusid, string nome, int fluxotrabalhotipoid)
        {
            this.FluxoTrabalhoStatusId = fluxotrabalhostatusid;
            this.Nome = nome;
            this.FluxoTrabalhoTipoId = fluxotrabalhotipoid;

        }

        public int FluxoTrabalhoStatusId { get; protected set; }
        public string Nome { get; protected set; }
        public int FluxoTrabalhoTipoId { get; protected set; }
        public string CorFundo { get; protected set; }
        public string CorFonte { get; protected set; }
        public int? Ordem { get; protected set; }


		public virtual void SetarCorFundo(string corfundo)
		{
			this.CorFundo = corfundo;
		}
		public virtual void SetarCorFonte(string corfonte)
		{
			this.CorFonte = corfonte;
		}
		public virtual void SetarOrdem(int? ordem)
		{
			this.Ordem = ordem;
		}


    }
}
