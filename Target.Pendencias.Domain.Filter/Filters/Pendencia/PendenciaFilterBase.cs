using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class PendenciaFilterBase : FilterBase
    {

        public int ProjetoId { get; set;} 
        public int PendenciaId { get; set;} 
        public string Resumo { get; set;} 
        public string Descricao { get; set;} 
        public string RequisitadoPor { get; set;} 
        public int? TempoEstimado { get; set;} 
        public int? PontosEstimados { get; set;} 
        public DateTime? PrazoStart { get; set;} 
        public DateTime? PrazoEnd { get; set;} 
        public DateTime? Prazo { get; set;} 
        public int UsuarioId { get; set;} 
        public int PendenciaTipoId { get; set;} 
        public int FluxoTrabalhoStatusId { get; set;} 
        public int PendenciaPrioridadeId { get; set;} 
        public string Tags { get; set;} 
        public DateTime? DataConclusaoStart { get; set;} 
        public DateTime? DataConclusaoEnd { get; set;} 
        public DateTime? DataConclusao { get; set;} 
        public int UserCreateId { get; set;} 
        public DateTime UserCreateDateStart { get; set;} 
        public DateTime UserCreateDateEnd { get; set;} 
        public DateTime UserCreateDate { get; set;} 
        public int? UserAlterId { get; set;} 
        public DateTime? UserAlterDateStart { get; set;} 
        public DateTime? UserAlterDateEnd { get; set;} 
        public DateTime? UserAlterDate { get; set;} 


    }
}
