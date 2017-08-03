using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class FluxoTrabalhoTipoDto  : DtoBase
	{
	
        

        public virtual int FluxoTrabalhoTipoId {get; set;}

        [Required(ErrorMessage="FluxoTrabalhoTipo - Campo Nome é Obrigatório")]
        [MaxLength(100, ErrorMessage = "FluxoTrabalhoTipo - Quantidade de caracteres maior que o permitido para o campo Nome")]
        public virtual string Nome {get; set;}

        

        public virtual string Descricao {get; set;}


		
	}
}