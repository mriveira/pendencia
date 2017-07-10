using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class UsuarioEstaConsistenteValidation : ValidatorSpecification<Usuario>
    {
        public UsuarioEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Usuario>(Instance of RuleClassName,"message for user"));
        }

    }
}
