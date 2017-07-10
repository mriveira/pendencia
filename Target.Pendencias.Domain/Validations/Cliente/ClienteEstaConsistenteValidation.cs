using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class ClienteEstaConsistenteValidation : ValidatorSpecification<Cliente>
    {
        public ClienteEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Cliente>(Instance of RuleClassName,"message for user"));
        }

    }
}
