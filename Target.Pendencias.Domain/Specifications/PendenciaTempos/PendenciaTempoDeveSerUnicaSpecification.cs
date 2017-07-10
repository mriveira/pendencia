using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Specifications
{
    public class PendenciaDeveApenasUmCronometroAtivoSpecification : ISpecification<PendenciaTempos>
    {
        private IPendenciaTemposRepository _rep;
        public PendenciaDeveApenasUmCronometroAtivoSpecification(IPendenciaTemposRepository rep)
        {
            this._rep = rep;
        }
        public bool IsSatisfiedBy(PendenciaTempos entity)
        {
            var exists = this._rep.ExisteCronometroAtivo();
            if (exists)
                return false;

            return true;
        }
    }
}
