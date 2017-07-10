using Common.Validation;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Target.Pendencias.Domain.Specifications
{
    public class UsuarioDeveTerUmUsuarioUnicoSpecification : ISpecification<Usuario>
    {
        private IUsuarioRepository _rep;
        public UsuarioDeveTerUmUsuarioUnicoSpecification(IUsuarioRepository rep)
        {
            this._rep = rep;
        }
        public bool IsSatisfiedBy(Usuario entity)
        {
            var result = this._rep.ObterPorEmail(entity.Email);
            if (result.IsNotNull())
                return result.UsuarioId == entity.UsuarioId;

            return true;
        }
    }
}
