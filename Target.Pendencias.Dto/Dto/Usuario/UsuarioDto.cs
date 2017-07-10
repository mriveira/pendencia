using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class UsuarioDto  : DtoBase
	{
	
        

        public virtual int UsuarioId {get; set;}

        [Required(ErrorMessage="Usuario - Campo Nome é Obrigatório")]
        [MaxLength(200, ErrorMessage = "Usuario - Quantidade de caracteres maior que o permitido para o campo Nome")]
        public virtual string Nome {get; set;}

        

        public virtual string Foto {get; set;}

        [Required(ErrorMessage="Usuario - Campo Email é Obrigatório")]
        [MaxLength(200, ErrorMessage = "Usuario - Quantidade de caracteres maior que o permitido para o campo Email")]
        public virtual string Email {get; set;}

        [Required(ErrorMessage="Usuario - Campo Senha é Obrigatório")]
        [MaxLength(10, ErrorMessage = "Usuario - Quantidade de caracteres maior que o permitido para o campo Senha")]
        public virtual string Senha {get; set;}

        

        public virtual int UsuarioTipoId {get; set;}

        [Required(ErrorMessage="Usuario - Campo Ativo é Obrigatório")]
        public virtual bool Ativo {get; set;}

        

        public virtual int? UsuarioDonoId {get; set;}


		
	}
}