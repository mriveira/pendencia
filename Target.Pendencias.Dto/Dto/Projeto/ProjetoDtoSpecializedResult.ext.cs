using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class ProjetoDtoSpecializedResult : ProjetoDto
	{

        public IEnumerable<PendenciaDto> CollectionPendencia { get; set;} 
        public IEnumerable<ProjetoFluxoTrabalhoStatusDto> CollectionProjetoFluxoTrabalhoStatus { get; set;} 
        public  ClienteDto Cliente { get; set;} 
        public  UsuarioDto Usuario { get; set;} 

		
	}
}