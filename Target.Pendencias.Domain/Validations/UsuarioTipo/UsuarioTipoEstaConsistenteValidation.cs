using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class UsuarioTipoEstaConsistenteValidation : ValidatorSpecification<UsuarioTipo>
    {
        public UsuarioTipoEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<UsuarioTipo>(Instance of RuleClassName,"message for user"));
        }

    }
}
