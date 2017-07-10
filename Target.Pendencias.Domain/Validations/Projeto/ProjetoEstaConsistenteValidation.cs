using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class ProjetoEstaConsistenteValidation : ValidatorSpecification<Projeto>
    {
        public ProjetoEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Projeto>(Instance of RuleClassName,"message for user"));
        }

    }
}
