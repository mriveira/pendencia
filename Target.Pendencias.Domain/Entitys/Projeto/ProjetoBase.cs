using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class ProjetoBase : DomainBaseWithUserCreate
    {
        public ProjetoBase()
        {

        }
        public ProjetoBase(int projetoid, string nome, string descricao, int clienteid, int usuarioid, string chaveunica)
        {
            this.ProjetoId = projetoid;
            this.Nome = nome;
            this.Descricao = descricao;
            this.ClienteId = clienteid;
            this.UsuarioId = usuarioid;
            this.ChaveUnica = chaveunica;

        }

        public int ProjetoId { get; protected set; }
        public string Nome { get; protected set; }
        public string Descricao { get; protected set; }
        public string Visao { get; protected set; }
        public int ClienteId { get; protected set; }
        public int UsuarioId { get; protected set; }
        public string ChaveUnica { get; protected set; }
        public DateTime? Inicio { get; protected set; }
        public DateTime? Fim { get; protected set; }


		public virtual void SetarVisao(string visao)
		{
			this.Visao = visao;
		}
		public virtual void SetarInicio(DateTime? inicio)
		{
			this.Inicio = inicio;
		}
		public virtual void SetarFim(DateTime? fim)
		{
			this.Fim = fim;
		}


    }
}
