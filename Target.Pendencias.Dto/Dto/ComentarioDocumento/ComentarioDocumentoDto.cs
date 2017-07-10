using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class ComentarioDocumentoDto  : DtoBase
	{
	
        

        public virtual int DocumentoId {get; set;}

        

        public virtual int ComentarioId {get; set;}


		
	}
}