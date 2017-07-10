using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class PendenciaTemposDto  : DtoBase
	{
	
        

        public virtual int PendenciaTemposId {get; set;}

        

        public virtual int PendenciaId {get; set;}

        

        public virtual int UsuarioId {get; set;}

        [Required(ErrorMessage="PendenciaTempos - Campo Inicio é Obrigatório")]
        public virtual DateTime Inicio {get; set;}

        

        public virtual DateTime? Fim {get; set;}

        

        public virtual string Nota {get; set;}


		
	}
}