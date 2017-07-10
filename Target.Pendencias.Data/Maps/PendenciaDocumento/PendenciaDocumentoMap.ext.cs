using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class PendenciaDocumentoMap : PendenciaDocumentoMapBase
    {
        public PendenciaDocumentoMap(EntityTypeBuilder<PendenciaDocumento> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<PendenciaDocumento> type)
        {

        }

    }
}