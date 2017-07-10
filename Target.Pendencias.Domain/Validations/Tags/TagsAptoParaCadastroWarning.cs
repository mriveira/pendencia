using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class TagsAptoParaCadastroWarning : WarningSpecification<Tags>
    {
        public TagsAptoParaCadastroWarning(ITagsRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Tags>(Instance of RuleClassName,"message for user"));
        }

    }
}
