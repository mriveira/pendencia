using System.Collections.Generic;

namespace Target.Pendencias.Domain.Filter
{
    public class ProjetoFilter  : ProjetoFilterBase
    {
        public string Tags { get; set; }
        public IEnumerable<int> CollectionProjetoId { get; set; }
    }
}
