using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class PendenciaEventosMap : PendenciaEventosMapBase
    {
        public PendenciaEventosMap(EntityTypeBuilder<PendenciaEventos> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<PendenciaEventos> type)
        {

        }

    }
}