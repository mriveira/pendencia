using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class PendenciaFilterBase : FilterBase
    {

        public virtual int PendenciaId { get; set;} 
        public virtual int? PendenciaIdPai { get; set;} 
        public virtual string Resumo { get; set;} 
        public virtual string Descricao { get; set;} 
        public virtual string RequisitadoPor { get; set;} 
        public virtual int? TempoEstimado { get; set;} 
        public virtual int? PontosEstimados { get; set;} 
        public virtual DateTime? PrazoStart { get; set;} 
        public virtual DateTime? PrazoEnd { get; set;} 
        public virtual DateTime? Prazo { get; set;} 
        public virtual int ProjetoId { get; set;} 
        public virtual int UsuarioId { get; set;} 
        public virtual int PendenciaTipoId { get; set;} 
        public virtual int FluxoTrabalhoStatusId { get; set;} 
        public virtual int PendenciaPrioridadeId { get; set;} 
        public virtual string Tags { get; set;} 
        public virtual DateTime? DataConclusaoStart { get; set;} 
        public virtual DateTime? DataConclusaoEnd { get; set;} 
        public virtual DateTime? DataConclusao { get; set;} 
        public virtual int UserCreateId { get; set;} 
        public virtual DateTime UserCreateDateStart { get; set;} 
        public virtual DateTime UserCreateDateEnd { get; set;} 
        public virtual DateTime UserCreateDate { get; set;} 
        public virtual int? UserAlterId { get; set;} 
        public virtual DateTime? UserAlterDateStart { get; set;} 
        public virtual DateTime? UserAlterDateEnd { get; set;} 
        public virtual DateTime? UserAlterDate { get; set;} 


    }
}
