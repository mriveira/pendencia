using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Filter
{
    public class ClienteFilterBase : FilterBase
    {

        public int ClienteId { get; set;} 
        public string Nome { get; set;} 
        public string TelefoneDeContato { get; set;} 
        public string EmailDeContato { get; set;} 
        public string CPFCNPJ { get; set;} 
        public int UsuarioId { get; set;} 
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
