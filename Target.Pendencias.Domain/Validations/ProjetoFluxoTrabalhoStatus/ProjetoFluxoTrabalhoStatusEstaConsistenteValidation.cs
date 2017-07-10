using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class ProjetoFluxoTrabalhoStatusEstaConsistenteValidation : ValidatorSpecification<ProjetoFluxoTrabalhoStatus>
    {
        public ProjetoFluxoTrabalhoStatusEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<ProjetoFluxoTrabalhoStatus>(Instance of RuleClassName,"message for user"));
        }

    }
}
