using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class AcompanhadoresDto  : DtoBase
	{
	
        

        public virtual int PendenciaId {get; set;}

        

        public virtual int UsuarioId {get; set;}


		
	}
}