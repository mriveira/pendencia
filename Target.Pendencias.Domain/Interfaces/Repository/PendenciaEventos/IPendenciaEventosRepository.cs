using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IPendenciaEventosRepository : IRepository<PendenciaEventos>
    {
        IQueryable<PendenciaEventos> GetBySimplefilters(PendenciaEventosFilter filters);

        Task<PendenciaEventos> GetById(PendenciaEventosFilter pendenciaeventos);
		
        Task<IEnumerable<dynamic>> GetDataItem(PendenciaEventosFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaEventosFilter filters);

        Task<dynamic> GetDataCustom(PendenciaEventosFilter filters);
    }
}
