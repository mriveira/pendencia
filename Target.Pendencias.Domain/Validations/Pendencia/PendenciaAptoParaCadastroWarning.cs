using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaAptoParaCadastroWarning : WarningSpecification<Pendencia>
    {
        public PendenciaAptoParaCadastroWarning(IPendenciaRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Pendencia>(Instance of RuleClassName,"message for user"));
        }

    }
}
