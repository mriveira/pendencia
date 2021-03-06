using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class ClienteBase : DomainBaseWithUserCreate
    {
        public ClienteBase()
        {

        }
        public ClienteBase(int clienteid, string nome, int usuarioid)
        {
            this.ClienteId = clienteid;
            this.Nome = nome;
            this.UsuarioId = usuarioid;

        }

        public virtual int ClienteId { get; protected set; }
        public virtual string Nome { get; protected set; }
        public virtual string TelefoneDeContato { get; protected set; }
        public virtual string EmailDeContato { get; protected set; }
        public virtual string CPFCNPJ { get; protected set; }
        public virtual int UsuarioId { get; protected set; }


		public virtual void SetarTelefoneDeContato(string telefonedecontato)
		{
			this.TelefoneDeContato = telefonedecontato;
		}
		public virtual void SetarEmailDeContato(string emaildecontato)
		{
			this.EmailDeContato = emaildecontato;
		}
		public virtual void SetarCPFCNPJ(string cpfcnpj)
		{
			this.CPFCNPJ = cpfcnpj;
		}


    }
}
