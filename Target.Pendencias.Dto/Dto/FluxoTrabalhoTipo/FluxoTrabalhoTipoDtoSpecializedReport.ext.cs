using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class FluxoTrabalhoTipoDtoSpecializedReport : FluxoTrabalhoTipoDto
	{

        public IEnumerable<FluxoTrabalhoStatusDto> CollectionFluxoTrabalhoStatus { get; set;} 

		
	}
}