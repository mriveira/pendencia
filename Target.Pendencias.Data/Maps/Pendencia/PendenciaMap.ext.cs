using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class PendenciaMap : PendenciaMapBase
    {
        public PendenciaMap(EntityTypeBuilder<Pendencia> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<Pendencia> type)
        {

        }

    }
}