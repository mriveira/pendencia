using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class UsuarioAptoParaCadastroWarning : WarningSpecification<Usuario>
    {
        public UsuarioAptoParaCadastroWarning(IUsuarioRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Usuario>(Instance of RuleClassName,"message for user"));
        }

    }
}
