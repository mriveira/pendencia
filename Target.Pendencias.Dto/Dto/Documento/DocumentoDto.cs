using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class DocumentoDto  : DtoBase
	{
	
        

        public virtual int DocumentoId {get; set;}

        [Required(ErrorMessage="Documento - Campo Arquivo é Obrigatório")]
        [MaxLength(200, ErrorMessage = "Documento - Quantidade de caracteres maior que o permitido para o campo Arquivo")]
        public virtual string Arquivo {get; set;}

        [Required(ErrorMessage="Documento - Campo ext é Obrigatório")]
        [MaxLength(3, ErrorMessage = "Documento - Quantidade de caracteres maior que o permitido para o campo ext")]
        public virtual string ext {get; set;}


		
	}
}