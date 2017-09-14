using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class ProjetoFilterBase : FilterBase
    {

        public virtual int ProjetoId { get; set;} 
        public virtual string Nome { get; set;} 
        public virtual string Descricao { get; set;} 
        public virtual string Visao { get; set;} 
        public virtual int ClienteId { get; set;} 
        public virtual int UsuarioId { get; set;} 
        public virtual string ChaveUnica { get; set;} 
        public virtual DateTime? InicioStart { get; set;} 
        public virtual DateTime? InicioEnd { get; set;} 
        public virtual DateTime? Inicio { get; set;} 
        public virtual DateTime? FimStart { get; set;} 
        public virtual DateTime? FimEnd { get; set;} 
        public virtual DateTime? Fim { get; set;} 
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
