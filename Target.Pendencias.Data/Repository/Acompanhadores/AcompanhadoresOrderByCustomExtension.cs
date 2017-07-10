using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class AcompanhadoresOrderCustomExtension
    {

        public static IQueryable<Acompanhadores> OrderByDomain(this IQueryable<Acompanhadores> queryBase, AcompanhadoresFilter filters)
        {
            return queryBase.OrderBy(_ => _.PendenciaId).ThenBy(_ => _.UsuarioId);
        }

    }
}

