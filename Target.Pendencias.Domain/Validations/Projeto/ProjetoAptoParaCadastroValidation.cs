using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class ProjetoAptoParaCadastroValidation : ValidatorSpecification<Projeto>
    {
        public ProjetoAptoParaCadastroValidation(IProjetoRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Projeto>(Instance of RuleClassName,"message for user"));
        }

    }
}
