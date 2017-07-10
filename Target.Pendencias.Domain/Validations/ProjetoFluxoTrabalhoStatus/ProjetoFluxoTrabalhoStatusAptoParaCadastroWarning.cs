using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class ProjetoFluxoTrabalhoStatusAptoParaCadastroWarning : WarningSpecification<ProjetoFluxoTrabalhoStatus>
    {
        public ProjetoFluxoTrabalhoStatusAptoParaCadastroWarning(IProjetoFluxoTrabalhoStatusRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<ProjetoFluxoTrabalhoStatus>(Instance of RuleClassName,"message for user"));
        }

    }
}
