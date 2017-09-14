using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendenciaTipoBase : DomainBase
    {
        public PendenciaTipoBase()
        {

        }
        public PendenciaTipoBase(int pendenciatipoid, string nome)
        {
            this.PendenciaTipoId = pendenciatipoid;
            this.Nome = nome;

        }

        public virtual int PendenciaTipoId { get; protected set; }
        public virtual string Nome { get; protected set; }




    }
}
