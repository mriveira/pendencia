using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class PendeciaPrioridadeEstaConsistenteValidation : ValidatorSpecification<PendeciaPrioridade>
    {
        public PendeciaPrioridadeEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<PendeciaPrioridade>(Instance of RuleClassName,"message for user"));
        }

    }
}
