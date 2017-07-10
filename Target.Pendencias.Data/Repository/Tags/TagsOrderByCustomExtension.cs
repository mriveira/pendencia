using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class TagsOrderCustomExtension
    {

        public static IQueryable<Tags> OrderByDomain(this IQueryable<Tags> queryBase, TagsFilter filters)
        {
            return queryBase.OrderBy(_ => _.TagsId);
        }

    }
}

