using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class PendenciaTipoMap : PendenciaTipoMapBase
    {
        public PendenciaTipoMap(EntityTypeBuilder<PendenciaTipo> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<PendenciaTipo> type)
        {

        }

    }
}