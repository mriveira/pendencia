using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class ComentarioDtoSpecializedDetails : ComentarioDto
	{

        public IEnumerable<ComentarioDocumentoDto> CollectionComentarioDocumento { get; set;} 
        public  PendenciaDto Pendencia { get; set;} 
        public  UsuarioDto Usuario { get; set;} 

		
	}
}