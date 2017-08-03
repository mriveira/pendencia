using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto.Transaction
{
	public class UsuarioTipoDto  : DtoBase
	{
	
        public int UsuarioTipoId { get; set;} 
        public string Nome { get; set;} 

		
	}
}