using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class ProjetoFluxoTrabalhoStatusDtoSpecialized : ProjetoFluxoTrabalhoStatusDto
	{

        public  FluxoTrabalhoStatusDto FluxoTrabalhoStatus { get; set;} 
        public  ProjetoDto Projeto { get; set;} 

		
	}
}