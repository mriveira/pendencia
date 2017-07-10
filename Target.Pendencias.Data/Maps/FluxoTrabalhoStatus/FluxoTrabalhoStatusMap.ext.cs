using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class FluxoTrabalhoStatusMap : FluxoTrabalhoStatusMapBase
    {
        public FluxoTrabalhoStatusMap(EntityTypeBuilder<FluxoTrabalhoStatus> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<FluxoTrabalhoStatus> type)
        {

        }

    }
}