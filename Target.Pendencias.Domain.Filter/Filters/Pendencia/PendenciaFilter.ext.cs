using System.Collections.Generic;

namespace Target.Pendencias.Domain.Filter
{
    public class PendenciaFilter : PendenciaFilterBase
    {
        public IEnumerable<int> CollectionProjetoId { get; set; }
    }
}
