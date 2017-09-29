using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class ProjetoDocumentoDtoSpecializedResult : ProjetoDocumentoDto
	{

        public  DocumentoDto Documento { get; set;} 
        public  ProjetoDto Projeto { get; set;} 

		
	}
}