using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class DocumentoAptoParaCadastroWarning : WarningSpecification<Documento>
    {
        public DocumentoAptoParaCadastroWarning(IDocumentoRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Documento>(Instance of RuleClassName,"message for user"));
        }

    }
}
