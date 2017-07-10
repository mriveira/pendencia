using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaEventosAptoParaCadastroValidation : ValidatorSpecification<PendenciaEventos>
    {
        public PendenciaEventosAptoParaCadastroValidation(IPendenciaEventosRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<PendenciaEventos>(Instance of RuleClassName,"message for user"));
        }

    }
}
