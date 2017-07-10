using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class DocumentoEstaConsistenteValidation : ValidatorSpecification<Documento>
    {
        public DocumentoEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Documento>(Instance of RuleClassName,"message for user"));
        }

    }
}
