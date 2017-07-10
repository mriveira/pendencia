using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class DocumentoMap : DocumentoMapBase
    {
        public DocumentoMap(EntityTypeBuilder<Documento> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<Documento> type)
        {

        }

    }
}