using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class TagsEstaConsistenteValidation : ValidatorSpecification<Tags>
    {
        public TagsEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Tags>(Instance of RuleClassName,"message for user"));
        }

    }
}
