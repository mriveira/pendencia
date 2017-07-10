using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class FluxoTrabalhoStatusDtoSpecialized : FluxoTrabalhoStatusDto
	{

        public IEnumerable<ProjetoFluxoTrabalhoStatusDto> CollectionProjetoFluxoTrabalhoStatus { get; set;} 
        public  FluxoTrabalhoTipoDto FluxoTrabalhoTipo { get; set;} 

		
	}
}