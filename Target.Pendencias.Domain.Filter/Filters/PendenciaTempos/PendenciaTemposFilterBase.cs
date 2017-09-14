using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class PendenciaTemposFilterBase : FilterBase
    {

        public virtual int PendenciaTemposId { get; set;} 
        public virtual int PendenciaId { get; set;} 
        public virtual int UsuarioId { get; set;} 
        public virtual DateTime InicioStart { get; set;} 
        public virtual DateTime InicioEnd { get; set;} 
        public virtual DateTime Inicio { get; set;} 
        public virtual DateTime? FimStart { get; set;} 
        public virtual DateTime? FimEnd { get; set;} 
        public virtual DateTime? Fim { get; set;} 
        public virtual string Nota { get; set;} 
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
