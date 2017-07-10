using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class ProjetoFluxoTrabalhoStatusBase : DomainBase
    {
        public ProjetoFluxoTrabalhoStatusBase()
        {

        }
        public ProjetoFluxoTrabalhoStatusBase(int projetoid, int fluxotrabalhostatusid)
        {
            this.ProjetoId = projetoid;
            this.FluxoTrabalhoStatusId = fluxotrabalhostatusid;

        }

        public int ProjetoId { get; protected set; }
        public int FluxoTrabalhoStatusId { get; protected set; }




    }
}
