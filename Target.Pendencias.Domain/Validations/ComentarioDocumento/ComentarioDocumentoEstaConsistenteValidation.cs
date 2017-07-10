using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class ComentarioDocumentoEstaConsistenteValidation : ValidatorSpecification<ComentarioDocumento>
    {
        public ComentarioDocumentoEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<ComentarioDocumento>(Instance of RuleClassName,"message for user"));
        }

    }
}
