using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class PendenciaDocumentoDtoSpecializedResult : PendenciaDocumentoDto
	{

        public  DocumentoDto Documento { get; set;} 
        public  PendenciaDto Pendencia { get; set;} 

		
	}
}