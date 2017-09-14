using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendeciaPrioridadeBase : DomainBase
    {
        public PendeciaPrioridadeBase()
        {

        }
        public PendeciaPrioridadeBase(int pendeciaprioridadeid, string nome)
        {
            this.PendeciaPrioridadeId = pendeciaprioridadeid;
            this.Nome = nome;

        }

        public virtual int PendeciaPrioridadeId { get; protected set; }
        public virtual string Nome { get; protected set; }




    }
}
