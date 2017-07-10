using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class AcompanhadoresAptoParaCadastroWarning : WarningSpecification<Acompanhadores>
    {
        public AcompanhadoresAptoParaCadastroWarning(IAcompanhadoresRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Acompanhadores>(Instance of RuleClassName,"message for user"));
        }

    }
}
