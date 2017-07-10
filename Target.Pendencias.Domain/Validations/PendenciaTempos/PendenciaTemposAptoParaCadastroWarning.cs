using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaTemposAptoParaCadastroWarning : WarningSpecification<PendenciaTempos>
    {
        public PendenciaTemposAptoParaCadastroWarning(IPendenciaTemposRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<PendenciaTempos>(Instance of RuleClassName,"message for user"));
        }

    }
}
