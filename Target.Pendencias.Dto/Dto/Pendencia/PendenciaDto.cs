using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Target.Pendencias.Dto
{
	public class PendenciaDto  : DtoBase
	{
	
        

        public virtual int PendenciaId {get; set;}

        

        public virtual int? PendenciaIdPai {get; set;}

        [Required(ErrorMessage="Pendencia - Campo Resumo é Obrigatório")]
        [MaxLength(250, ErrorMessage = "Pendencia - Quantidade de caracteres maior que o permitido para o campo Resumo")]
        public virtual string Resumo {get; set;}

        

        public virtual string Descricao {get; set;}

        

        public virtual string RequisitadoPor {get; set;}

        

        public virtual int? TempoEstimado {get; set;}

        

        public virtual int? PontosEstimados {get; set;}

        

        public virtual DateTime? Prazo {get; set;}

        

        public virtual int ProjetoId {get; set;}

        

        public virtual int UsuarioId {get; set;}

        

        public virtual int PendenciaTipoId {get; set;}

        

        public virtual int FluxoTrabalhoStatusId {get; set;}

        

        public virtual int PendenciaPrioridadeId {get; set;}

        

        public virtual string Tags {get; set;}

        

        public virtual DateTime? DataConclusao {get; set;}


		
	}
}