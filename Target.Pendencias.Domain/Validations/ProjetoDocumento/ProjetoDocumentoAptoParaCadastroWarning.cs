using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class ProjetoDocumentoAptoParaCadastroWarning : WarningSpecification<ProjetoDocumento>
    {
        public ProjetoDocumentoAptoParaCadastroWarning(IProjetoDocumentoRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<ProjetoDocumento>(Instance of RuleClassName,"message for user"));
        }

    }
}
