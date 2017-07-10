using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class ComentarioDocumentoDtoSpecializedReport : ComentarioDocumentoDto
	{

        public  ComentarioDto Comentario { get; set;} 
        public  PendenciaDto Pendencia { get; set;} 

		
	}
}