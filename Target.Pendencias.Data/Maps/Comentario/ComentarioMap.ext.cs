using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class ComentarioMap : ComentarioMapBase
    {
        public ComentarioMap(EntityTypeBuilder<Comentario> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<Comentario> type)
        {

        }

    }
}