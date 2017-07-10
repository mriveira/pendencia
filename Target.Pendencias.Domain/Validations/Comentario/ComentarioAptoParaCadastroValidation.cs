using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class ComentarioAptoParaCadastroValidation : ValidatorSpecification<Comentario>
    {
        public ComentarioAptoParaCadastroValidation(IComentarioRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Comentario>(Instance of RuleClassName,"message for user"));
        }

    }
}
