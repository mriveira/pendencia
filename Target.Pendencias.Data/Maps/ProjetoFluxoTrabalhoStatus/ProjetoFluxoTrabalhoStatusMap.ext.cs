using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class ProjetoFluxoTrabalhoStatusMap : ProjetoFluxoTrabalhoStatusMapBase
    {
        public ProjetoFluxoTrabalhoStatusMap(EntityTypeBuilder<ProjetoFluxoTrabalhoStatus> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<ProjetoFluxoTrabalhoStatus> type)
        {

        }

    }
}