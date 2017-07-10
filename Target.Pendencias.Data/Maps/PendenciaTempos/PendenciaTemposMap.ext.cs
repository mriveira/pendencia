using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class PendenciaTemposMap : PendenciaTemposMapBase
    {
        public PendenciaTemposMap(EntityTypeBuilder<PendenciaTempos> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<PendenciaTempos> type)
        {

        }

    }
}