using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class ProjetoDocumentoMap : ProjetoDocumentoMapBase
    {
        public ProjetoDocumentoMap(EntityTypeBuilder<ProjetoDocumento> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<ProjetoDocumento> type)
        {

        }

    }
}