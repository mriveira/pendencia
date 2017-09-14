using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class FluxoTrabalhoTipoBase : DomainBase
    {
        public FluxoTrabalhoTipoBase()
        {

        }
        public FluxoTrabalhoTipoBase(int fluxotrabalhotipoid, string nome)
        {
            this.FluxoTrabalhoTipoId = fluxotrabalhotipoid;
            this.Nome = nome;

        }

        public virtual int FluxoTrabalhoTipoId { get; protected set; }
        public virtual string Nome { get; protected set; }
        public virtual string Descricao { get; protected set; }


		public virtual void SetarDescricao(string descricao)
		{
			this.Descricao = descricao;
		}


    }
}
