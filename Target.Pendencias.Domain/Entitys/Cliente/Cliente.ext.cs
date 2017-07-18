using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class Cliente : ClienteBase
    {

        public Cliente()
        {

        }

        public Cliente(int clienteid, string nome, int usuarioid) :
            base(clienteid, nome, usuarioid)
        {

        }

		public class ClienteFactory
        {
            public Cliente GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var _usuarioId = user.GetTenantOwnerId<int>();

                var construction = new Cliente(data.ClienteId,
                                        data.Nome,
                                        _usuarioId);

                construction.SetarTelefoneDeContato(data.TelefoneDeContato);
                construction.SetarEmailDeContato(data.EmailDeContato);
                construction.SetarCPFCNPJ(data.CPFCNPJ);


				return construction;
            }

        }

        public virtual Usuario Usuario { get; protected set; }

        public bool IsValid()
        {
            base._validationResult = new ClienteEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
