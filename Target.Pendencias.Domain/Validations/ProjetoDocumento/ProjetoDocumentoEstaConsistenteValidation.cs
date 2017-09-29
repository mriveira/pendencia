using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class ProjetoDocumentoEstaConsistenteValidation : ValidatorSpecification<ProjetoDocumento>
    {
        public ProjetoDocumentoEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<ProjetoDocumento>(Instance of RuleClassName,"message for user"));
        }

    }
}
