using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ProjetoOrderCustomExtension
    {

        public static IQueryable<Projeto> OrderByDomain(this IQueryable<Projeto> queryBase, ProjetoFilter filters)
        {
            return queryBase.OrderBy(_ => _.ProjetoId);
        }

    }
}

