using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class ComentarioAptoParaCadastroWarning : WarningSpecification<Comentario>
    {
        public ComentarioAptoParaCadastroWarning(IComentarioRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Comentario>(Instance of RuleClassName,"message for user"));
        }

    }
}
