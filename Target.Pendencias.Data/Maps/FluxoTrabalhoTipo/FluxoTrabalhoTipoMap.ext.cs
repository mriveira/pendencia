using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class FluxoTrabalhoTipoMap : FluxoTrabalhoTipoMapBase
    {
        public FluxoTrabalhoTipoMap(EntityTypeBuilder<FluxoTrabalhoTipo> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<FluxoTrabalhoTipo> type)
        {

        }

    }
}