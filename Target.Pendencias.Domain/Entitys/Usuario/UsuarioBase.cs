using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class UsuarioBase : DomainBaseWithUserCreate
    {
        public UsuarioBase()
        {

        }
        public UsuarioBase(int usuarioid, string nome, string email, string senha, int usuariotipoid, bool ativo)
        {
            this.UsuarioId = usuarioid;
            this.Nome = nome;
            this.Email = email;
            this.Senha = senha;
            this.UsuarioTipoId = usuariotipoid;
            this.Ativo = ativo;

        }

        public virtual int UsuarioId { get; protected set; }
        public virtual string Nome { get; protected set; }
        public virtual string Foto { get; protected set; }
        public virtual string Email { get; protected set; }
        public virtual string Senha { get; protected set; }
        public virtual int UsuarioTipoId { get; protected set; }
        public virtual bool Ativo { get; protected set; }
        public virtual int? UsuarioDonoId { get; protected set; }


		public virtual void SetarFoto(string foto)
		{
			this.Foto = foto;
		}
		public virtual void SetarUsuarioDonoId(int? usuariodonoid)
		{
			this.UsuarioDonoId = usuariodonoid;
		}


    }
}
