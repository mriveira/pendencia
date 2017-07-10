using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class PendenciaTemposFilterBase : FilterBase
    {

        public int PendenciaTemposId { get; set;} 
        public int PendenciaId { get; set;} 
        public int UsuarioId { get; set;} 
        public DateTime InicioStart { get; set;} 
        public DateTime InicioEnd { get; set;} 
        public DateTime Inicio { get; set;} 
        public DateTime? FimStart { get; set;} 
        public DateTime? FimEnd { get; set;} 
        public DateTime? Fim { get; set;} 
        public string Nota { get; set;} 
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
