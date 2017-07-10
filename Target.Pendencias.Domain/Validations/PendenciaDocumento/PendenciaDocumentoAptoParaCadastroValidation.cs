using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaDocumentoAptoParaCadastroValidation : ValidatorSpecification<PendenciaDocumento>
    {
        public PendenciaDocumentoAptoParaCadastroValidation(IPendenciaDocumentoRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<PendenciaDocumento>(Instance of RuleClassName,"message for user"));
        }

    }
}
