using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class PendeciaPrioridadeAptoParaCadastroWarning : WarningSpecification<PendeciaPrioridade>
    {
        public PendeciaPrioridadeAptoParaCadastroWarning(IPendeciaPrioridadeRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<PendeciaPrioridade>(Instance of RuleClassName,"message for user"));
        }

    }
}
