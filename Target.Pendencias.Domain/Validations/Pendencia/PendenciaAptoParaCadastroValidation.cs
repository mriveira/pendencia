using Common.Validation;
using System;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Specifications;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaAptoParaCadastroValidation : ValidatorSpecification<Pendencia>
    {
        public PendenciaAptoParaCadastroValidation(IPendenciaRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<Pendencia>(Instance of RuleClassName,"message for user"));
        }

    }
}
