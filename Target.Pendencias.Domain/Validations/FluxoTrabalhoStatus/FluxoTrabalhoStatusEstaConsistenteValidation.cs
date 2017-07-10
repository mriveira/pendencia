using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class FluxoTrabalhoStatusEstaConsistenteValidation : ValidatorSpecification<FluxoTrabalhoStatus>
    {
        public FluxoTrabalhoStatusEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<FluxoTrabalhoStatus>(Instance of RuleClassName,"message for user"));
        }

    }
}
