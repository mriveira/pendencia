using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class ComentarioEstaConsistenteValidation : ValidatorSpecification<Comentario>
    {
        public ComentarioEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Comentario>(Instance of RuleClassName,"message for user"));
        }

    }
}
