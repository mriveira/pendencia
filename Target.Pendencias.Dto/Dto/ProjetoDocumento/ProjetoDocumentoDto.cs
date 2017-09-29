using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class ProjetoDocumentoDto  : DtoBase
	{
	
        

        public virtual int ProjetoId {get; set;}

        

        public virtual int DocumentoId {get; set;}


		
	}
}