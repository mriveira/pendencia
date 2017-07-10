using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaTipoAptoParaCadastroWarning : WarningSpecification<PendenciaTipo>
    {
        public PendenciaTipoAptoParaCadastroWarning(IPendenciaTipoRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<PendenciaTipo>(Instance of RuleClassName,"message for user"));
        }

    }
}
