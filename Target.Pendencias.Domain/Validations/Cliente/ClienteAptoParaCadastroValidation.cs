using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class ClienteAptoParaCadastroValidation : ValidatorSpecification<Cliente>
    {
        public ClienteAptoParaCadastroValidation(IClienteRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Cliente>(Instance of RuleClassName,"message for user"));
        }

    }
}
