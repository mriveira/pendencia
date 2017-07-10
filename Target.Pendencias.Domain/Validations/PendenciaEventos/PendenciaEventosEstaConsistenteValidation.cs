using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaEventosEstaConsistenteValidation : ValidatorSpecification<PendenciaEventos>
    {
        public PendenciaEventosEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<PendenciaEventos>(Instance of RuleClassName,"message for user"));
        }

    }
}
