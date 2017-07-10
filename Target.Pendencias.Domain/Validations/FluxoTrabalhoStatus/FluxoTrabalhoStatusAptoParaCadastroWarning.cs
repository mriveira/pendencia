using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class FluxoTrabalhoStatusAptoParaCadastroWarning : WarningSpecification<FluxoTrabalhoStatus>
    {
        public FluxoTrabalhoStatusAptoParaCadastroWarning(IFluxoTrabalhoStatusRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<FluxoTrabalhoStatus>(Instance of RuleClassName,"message for user"));
        }

    }
}
