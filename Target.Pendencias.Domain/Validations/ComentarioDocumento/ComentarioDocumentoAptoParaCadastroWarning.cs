using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class ComentarioDocumentoAptoParaCadastroWarning : WarningSpecification<ComentarioDocumento>
    {
        public ComentarioDocumentoAptoParaCadastroWarning(IComentarioDocumentoRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<ComentarioDocumento>(Instance of RuleClassName,"message for user"));
        }

    }
}
