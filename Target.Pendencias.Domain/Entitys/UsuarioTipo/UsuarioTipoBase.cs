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

        public int UsuarioTipoId { get; protected set; }
        public string Nome { get; protected set; }




    }
}
