using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class DocumentoDtoSpecializedReport : DocumentoDto
	{

        public IEnumerable<PendenciaDocumentoDto> CollectionPendenciaDocumento { get; set;} 

		
	}
}