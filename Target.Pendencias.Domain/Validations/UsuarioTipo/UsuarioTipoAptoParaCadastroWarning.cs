using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class UsuarioTipoAptoParaCadastroWarning : WarningSpecification<UsuarioTipo>
    {
        public UsuarioTipoAptoParaCadastroWarning(IUsuarioTipoRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<UsuarioTipo>(Instance of RuleClassName,"message for user"));
        }

    }
}
