using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class ComentarioDocumentoMap : ComentarioDocumentoMapBase
    {
        public ComentarioDocumentoMap(EntityTypeBuilder<ComentarioDocumento> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<ComentarioDocumento> type)
        {

        }

    }
}