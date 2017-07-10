using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class TagsFilterBase : FilterBase
    {

        public int TagsId { get; set;} 
        public string Nome { get; set;} 
        public int ProjetoId { get; set;} 
        public int PendenciaId { get; set;} 


    }
}
