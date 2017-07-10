using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class TagsDto  : DtoBase
	{
	
        

        public virtual int TagsId {get; set;}

        [Required(ErrorMessage="Tags - Campo Nome é Obrigatório")]
        [MaxLength(250, ErrorMessage = "Tags - Quantidade de caracteres maior que o permitido para o campo Nome")]
        public virtual string Nome {get; set;}

        

        public virtual int ProjetoId {get; set;}

        

        public virtual int PendenciaId {get; set;}


		
	}
}