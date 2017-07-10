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

        public int FluxoTrabalhoTipoId { get; protected set; }
        public string Nome { get; protected set; }




    }
}
