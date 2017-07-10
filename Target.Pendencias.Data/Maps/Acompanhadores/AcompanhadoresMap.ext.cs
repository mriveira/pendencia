using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class AcompanhadoresMap : AcompanhadoresMapBase
    {
        public AcompanhadoresMap(EntityTypeBuilder<Acompanhadores> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<Acompanhadores> type)
        {

        }

    }
}