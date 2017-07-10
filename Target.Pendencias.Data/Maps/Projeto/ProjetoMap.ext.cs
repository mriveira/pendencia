using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class ProjetoMap : ProjetoMapBase
    {
        public ProjetoMap(EntityTypeBuilder<Projeto> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<Projeto> type)
        {

        }

    }
}