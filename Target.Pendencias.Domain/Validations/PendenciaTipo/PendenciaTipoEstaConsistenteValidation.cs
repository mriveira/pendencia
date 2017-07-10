using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaTipoEstaConsistenteValidation : ValidatorSpecification<PendenciaTipo>
    {
        public PendenciaTipoEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<PendenciaTipo>(Instance of RuleClassName,"message for user"));
        }

    }
}
