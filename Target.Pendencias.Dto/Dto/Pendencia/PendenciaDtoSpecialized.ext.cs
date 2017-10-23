using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class PendenciaDtoSpecialized : PendenciaDto
	{

        public IEnumerable<ComentarioDto> CollectionComentarios { get; set;}
        public string Nota { get; set; }
        public DocumentoDto Documento { get; set; }

    }
}