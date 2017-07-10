using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class AcompanhadoresEstaConsistenteValidation : ValidatorSpecification<Acompanhadores>
    {
        public AcompanhadoresEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Acompanhadores>(Instance of RuleClassName,"message for user"));
        }

    }
}
