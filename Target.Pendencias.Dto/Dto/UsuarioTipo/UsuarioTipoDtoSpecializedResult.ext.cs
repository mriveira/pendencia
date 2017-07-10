using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class UsuarioTipoDtoSpecializedResult : UsuarioTipoDto
	{

        public IEnumerable<UsuarioDto> CollectionUsuario { get; set;} 

		
	}
}