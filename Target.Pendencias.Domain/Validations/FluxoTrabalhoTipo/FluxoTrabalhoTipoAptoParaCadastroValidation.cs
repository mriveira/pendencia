using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Validations
{
    public class FluxoTrabalhoTipoAptoParaCadastroValidation : ValidatorSpecification<FluxoTrabalhoTipo>
    {
        public FluxoTrabalhoTipoAptoParaCadastroValidation(IFluxoTrabalhoTipoRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<FluxoTrabalhoTipo>(Instance of RuleClassName,"message for user"));
        }

    }
}
