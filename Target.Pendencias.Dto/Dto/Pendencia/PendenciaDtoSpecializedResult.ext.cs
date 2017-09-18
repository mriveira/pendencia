using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class PendenciaDtoSpecializedResult : PendenciaDto
	{
        public ProjetoDto Projeto { get; set; }
    }
}