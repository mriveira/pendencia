using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IPendenciaRepository : IRepository<Pendencia>
    {
        IQueryable<Pendencia> GetBySimplefilters(PendenciaFilter filters);

        Task<Pendencia> GetById(PendenciaFilter pendencia);
		
        Task<IEnumerable<dynamic>> GetDataItem(PendenciaFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaFilter filters);

        Task<dynamic> GetDataCustom(PendenciaFilter filters);
    }
}
