using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class ComentarioDto  : DtoBase
	{
	
        

        public virtual int ComentarioId {get; set;}

        [Required(ErrorMessage="Comentario - Campo Descricao é Obrigatório")]
        public virtual string Descricao {get; set;}

        [Required(ErrorMessage="Comentario - Campo Data é Obrigatório")]
        public virtual DateTime Data {get; set;}

        

        public virtual int UsuarioId {get; set;}

        

        public virtual int PendenciaId {get; set;}


		
	}
}