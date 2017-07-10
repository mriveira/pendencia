using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class ProjetoDto  : DtoBase
	{
	
        

        public virtual int ProjetoId {get; set;}

        [Required(ErrorMessage="Projeto - Campo Nome é Obrigatório")]
        [MaxLength(200, ErrorMessage = "Projeto - Quantidade de caracteres maior que o permitido para o campo Nome")]
        public virtual string Nome {get; set;}

        [Required(ErrorMessage="Projeto - Campo Descricao é Obrigatório")]
        public virtual string Descricao {get; set;}

        

        public virtual string Visao {get; set;}

        

        public virtual int ClienteId {get; set;}

        

        public virtual int UsuarioId {get; set;}

        [Required(ErrorMessage="Projeto - Campo ChaveUnica é Obrigatório")]
        [MaxLength(10, ErrorMessage = "Projeto - Quantidade de caracteres maior que o permitido para o campo ChaveUnica")]
        public virtual string ChaveUnica {get; set;}

        

        public virtual DateTime? Inicio {get; set;}

        

        public virtual DateTime? Fim {get; set;}


		
	}
}