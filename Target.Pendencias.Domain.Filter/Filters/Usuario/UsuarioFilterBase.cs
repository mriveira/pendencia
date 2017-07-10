using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class UsuarioFilterBase : FilterBase
    {

        public int UsuarioId { get; set;} 
        public string Nome { get; set;} 
        public string Foto { get; set;} 
        public string Email { get; set;} 
        public string Senha { get; set;} 
        public int UsuarioTipoId { get; set;} 
        public bool? Ativo { get; set;} 
        public int? UsuarioDonoId { get; set;} 
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
