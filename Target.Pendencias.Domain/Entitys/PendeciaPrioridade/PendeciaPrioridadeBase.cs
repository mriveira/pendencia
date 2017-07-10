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

        public int PendeciaPrioridadeId { get; protected set; }
        public string Nome { get; protected set; }




    }
}
