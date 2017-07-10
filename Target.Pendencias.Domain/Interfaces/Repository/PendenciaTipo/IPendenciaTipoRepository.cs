using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IPendenciaTipoRepository : IRepository<PendenciaTipo>
    {
        IQueryable<PendenciaTipo> GetBySimplefilters(PendenciaTipoFilter filters);

        Task<PendenciaTipo> GetById(PendenciaTipoFilter pendenciatipo);
		
        Task<IEnumerable<dynamic>> GetDataItem(PendenciaTipoFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaTipoFilter filters);

        Task<dynamic> GetDataCustom(PendenciaTipoFilter filters);
    }
}
