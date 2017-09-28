using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class PendenciaDocumentoDto  : DtoBase
	{
	
        

        public virtual int PendenciaId {get; set;}

        

        public virtual int DocumentoId {get; set;}


		
	}
}