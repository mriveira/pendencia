using Common.Validation;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Domain.Validations
{
    public class FluxoTrabalhoTipoEstaConsistenteValidation : ValidatorSpecification<FluxoTrabalhoTipo>
    {
        public FluxoTrabalhoTipoEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<FluxoTrabalhoTipo>(Instance of RuleClassName,"message for user"));
        }

    }
}
