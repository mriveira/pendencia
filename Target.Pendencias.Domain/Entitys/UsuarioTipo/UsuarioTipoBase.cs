using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class UsuarioTipoBase : DomainBase
    {
        public UsuarioTipoBase()
        {

        }
        public UsuarioTipoBase(int usuariotipoid, string nome)
        {
            this.UsuarioTipoId = usuariotipoid;
            this.Nome = nome;

        }

        public virtual int UsuarioTipoId { get; protected set; }
        public virtual string Nome { get; protected set; }




    }
}
