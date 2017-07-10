using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class TagsMap : TagsMapBase
    {
        public TagsMap(EntityTypeBuilder<Tags> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<Tags> type)
        {

        }

    }
}