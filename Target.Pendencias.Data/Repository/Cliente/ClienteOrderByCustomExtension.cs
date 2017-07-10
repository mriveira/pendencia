using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Linq;

namespace Target.Pendencias.Data.Repository
{
    public static class ClienteOrderCustomExtension
    {

        public static IQueryable<Cliente> OrderByDomain(this IQueryable<Cliente> queryBase, ClienteFilter filters)
        {
            return queryBase.OrderBy(_ => _.ClienteId);
        }

    }
}

