using Common.Validation;
using System;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Specifications;

namespace Target.Pendencias.Domain.Validations
{
    public class UsuarioAptoParaCadastroValidation : ValidatorSpecification<Usuario>
    {
        public UsuarioAptoParaCadastroValidation(IUsuarioRepository rep)
        {
            base.Add(Guid.NewGuid().ToString(), new Rule<Usuario>(new UsuarioDeveTerUmUsuarioUnicoSpecification(rep), "Email não esta disponivel"));
        }

    }
}
