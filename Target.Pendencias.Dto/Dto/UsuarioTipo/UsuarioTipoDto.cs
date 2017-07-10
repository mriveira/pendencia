using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class UsuarioTipoDto  : DtoBase
	{
	
        

        public virtual int UsuarioTipoId {get; set;}

        [Required(ErrorMessage="UsuarioTipo - Campo Nome é Obrigatório")]
        [MaxLength(200, ErrorMessage = "UsuarioTipo - Quantidade de caracteres maior que o permitido para o campo Nome")]
        public virtual string Nome {get; set;}


		
	}
}