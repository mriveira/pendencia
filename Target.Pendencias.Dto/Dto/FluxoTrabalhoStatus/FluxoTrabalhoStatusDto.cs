using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class FluxoTrabalhoStatusDto  : DtoBase
	{
	
        

        public virtual int FluxoTrabalhoStatusId {get; set;}

        [Required(ErrorMessage="FluxoTrabalhoStatus - Campo Nome é Obrigatório")]
        [MaxLength(100, ErrorMessage = "FluxoTrabalhoStatus - Quantidade de caracteres maior que o permitido para o campo Nome")]
        public virtual string Nome {get; set;}

        

        public virtual int FluxoTrabalhoTipoId {get; set;}

        

        public virtual string CorFundo {get; set;}

        

        public virtual string CorFonte {get; set;}

        

        public virtual int? Ordem {get; set;}


		
	}
}