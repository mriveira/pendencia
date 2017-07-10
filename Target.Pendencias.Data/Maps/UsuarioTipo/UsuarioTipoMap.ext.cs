using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Data.Map
{
    public class UsuarioTipoMap : UsuarioTipoMapBase
    {
        public UsuarioTipoMap(EntityTypeBuilder<UsuarioTipo> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<UsuarioTipo> type)
        {

        }

    }
}