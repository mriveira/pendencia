using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class UsuarioFilterBase : FilterBase
    {

        public virtual int UsuarioId { get; set;} 
        public virtual string Nome { get; set;} 
        public virtual string Foto { get; set;} 
        public virtual string Email { get; set;} 
        public virtual string Senha { get; set;} 
        public virtual int UsuarioTipoId { get; set;} 
        public virtual bool? Ativo { get; set;} 
        public virtual int? UsuarioDonoId { get; set;} 
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
