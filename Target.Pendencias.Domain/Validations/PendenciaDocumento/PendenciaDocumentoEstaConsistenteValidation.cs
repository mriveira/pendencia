using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaDocumentoEstaConsistenteValidation : ValidatorSpecification<PendenciaDocumento>
    {
        public PendenciaDocumentoEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<PendenciaDocumento>(Instance of RuleClassName,"message for user"));
        }

    }
}
