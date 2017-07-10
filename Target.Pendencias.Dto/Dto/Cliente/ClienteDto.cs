using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class ClienteDto  : DtoBase
	{
	
        

        public virtual int ClienteId {get; set;}

        [Required(ErrorMessage="Cliente - Campo Nome é Obrigatório")]
        [MaxLength(200, ErrorMessage = "Cliente - Quantidade de caracteres maior que o permitido para o campo Nome")]
        public virtual string Nome {get; set;}

        

        public virtual string TelefoneDeContato {get; set;}

        

        public virtual string EmailDeContato {get; set;}

        

        public virtual string CPFCNPJ {get; set;}

        

        public virtual int UsuarioId {get; set;}


		
	}
}