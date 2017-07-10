using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class PendenciaEventosDto  : DtoBase
	{
	
        

        public virtual int PendenciaEventosId {get; set;}

        

        public virtual int PendenciaId {get; set;}

        [Required(ErrorMessage="PendenciaEventos - Campo Descricao é Obrigatório")]
        [MaxLength(1000, ErrorMessage = "PendenciaEventos - Quantidade de caracteres maior que o permitido para o campo Descricao")]
        public virtual string Descricao {get; set;}

        

        public virtual DateTime? Data {get; set;}


		
	}
}