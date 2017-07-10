using Common.Validation;
using System;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Specifications;

namespace Target.Pendencias.Domain.Validations
{
    public class PendenciaTemposAptoParaCadastroValidation : ValidatorSpecification<PendenciaTempos>
    {
        public PendenciaTemposAptoParaCadastroValidation(IPendenciaTemposRepository rep)
        {
            base.Add(Guid.NewGuid().ToString(), new Rule<PendenciaTempos>(new PendenciaDeveApenasUmCronometroAtivoSpecification(rep), "Você já tem um cronometro Ativo"));
        }

    }
}
