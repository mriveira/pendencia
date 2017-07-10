using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class ComentarioFilterBase : FilterBase
    {

        public int ComentarioId { get; set;} 
        public string Descricao { get; set;} 
        public DateTime DataStart { get; set;} 
        public DateTime DataEnd { get; set;} 
        public DateTime Data { get; set;} 
        public int UsuarioId { get; set;} 
        public int PendenciaId { get; set;} 
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
