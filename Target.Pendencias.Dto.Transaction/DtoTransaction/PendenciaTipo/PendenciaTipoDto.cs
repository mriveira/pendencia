using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto.Transaction
{
	public class PendenciaTipoDto  : DtoBase
	{
	
        public int PendenciaTipoId { get; set;} 
        public string Nome { get; set;} 

		
	}
}