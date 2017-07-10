using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ComentarioOrderCustomExtension
    {

        public static IQueryable<Comentario> OrderByDomain(this IQueryable<Comentario> queryBase, ComentarioFilter filters)
        {
            return queryBase.OrderBy(_ => _.ComentarioId);
        }

    }
}

