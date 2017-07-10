using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class UsuarioDtoSpecializedDetails : UsuarioDto
	{

        public IEnumerable<ClienteDto> CollectionCliente { get; set;} 
        public IEnumerable<ComentarioDto> CollectionComentario { get; set;} 
        public IEnumerable<PendenciaDto> CollectionPendencia { get; set;} 
        public IEnumerable<ProjetoDto> CollectionProjeto { get; set;} 
        public  UsuarioTipoDto UsuarioTipo { get; set;} 

		
	}
}