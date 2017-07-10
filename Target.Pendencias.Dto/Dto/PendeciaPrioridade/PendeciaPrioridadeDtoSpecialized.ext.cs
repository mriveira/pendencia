using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class PendeciaPrioridadeDtoSpecialized : PendeciaPrioridadeDto
	{

        public IEnumerable<PendenciaDto> CollectionPendencia { get; set;} 

		
	}
}