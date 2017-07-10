using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class TagsDtoSpecializedResult : TagsDto
	{

        public  PendenciaDto Pendencia { get; set;} 
        public  ProjetoDto Projeto { get; set;} 

		
	}
}