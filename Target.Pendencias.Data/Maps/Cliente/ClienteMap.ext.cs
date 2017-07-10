using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class ClienteMap : ClienteMapBase
    {
        public ClienteMap(EntityTypeBuilder<Cliente> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<Cliente> type)
        {

        }

    }
}