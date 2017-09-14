using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IPendenciaTemposRepository : IRepository<PendenciaTempos>
    {
        IQueryable<PendenciaTempos> GetBySimplefilters(PendenciaTemposFilter filters);

        Task<PendenciaTempos> GetById(PendenciaTemposFilter pendenciatempos);
		
        Task<IEnumerable<dynamic>> GetDataItem(PendenciaTemposFilter filters);


        Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaTemposFilter filters);

        Task<dynamic> GetDataCustom(PendenciaTemposFilter filters);

        bool ExisteCronometroAtivo();
    }
}
