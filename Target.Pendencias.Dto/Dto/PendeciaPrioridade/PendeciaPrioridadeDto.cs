using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class PendeciaPrioridadeDto  : DtoBase
	{
	
        

        public virtual int PendeciaPrioridadeId {get; set;}

        [Required(ErrorMessage="PendeciaPrioridade - Campo Nome é Obrigatório")]
        [MaxLength(200, ErrorMessage = "PendeciaPrioridade - Quantidade de caracteres maior que o permitido para o campo Nome")]
        public virtual string Nome {get; set;}


		
	}
}