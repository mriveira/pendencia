using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class PendenciaTipoDto  : DtoBase
	{
	
        

        public virtual int PendenciaTipoId {get; set;}

        [Required(ErrorMessage="PendenciaTipo - Campo Nome é Obrigatório")]
        [MaxLength(200, ErrorMessage = "PendenciaTipo - Quantidade de caracteres maior que o permitido para o campo Nome")]
        public virtual string Nome {get; set;}


		
	}
}