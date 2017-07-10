using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaTemposEstaConsistenteValidation : ValidatorSpecification<PendenciaTempos>
    {
        public PendenciaTemposEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<PendenciaTempos>(Instance of RuleClassName,"message for user"));
        }

    }
}
