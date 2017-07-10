using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaEstaConsistenteValidation : ValidatorSpecification<Pendencia>
    {
        public PendenciaEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Pendencia>(Instance of RuleClassName,"message for user"));
        }

    }
}
