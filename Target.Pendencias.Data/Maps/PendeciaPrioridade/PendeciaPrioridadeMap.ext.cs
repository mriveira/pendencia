using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class PendeciaPrioridadeMap : PendeciaPrioridadeMapBase
    {
        public PendeciaPrioridadeMap(EntityTypeBuilder<PendeciaPrioridade> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<PendeciaPrioridade> type)
        {

        }

    }
}