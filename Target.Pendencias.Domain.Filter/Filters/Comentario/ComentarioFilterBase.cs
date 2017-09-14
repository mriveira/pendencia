using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class ComentarioFilterBase : FilterBase
    {

        public virtual int ComentarioId { get; set;} 
        public virtual string Descricao { get; set;} 
        public virtual DateTime DataStart { get; set;} 
        public virtual DateTime DataEnd { get; set;} 
        public virtual DateTime Data { get; set;} 
        public virtual int UsuarioId { get; set;} 
        public virtual int PendenciaId { get; set;} 
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
