using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class DocumentoFilterBase : FilterBase
    {

        public virtual int DocumentoId { get; set;} 
        public virtual string Arquivo { get; set;} 
        public virtual string ext { get; set;} 
        public virtual string Tags { get; set;} 
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
