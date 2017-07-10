using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IPendeciaPrioridadeRepository : IRepository<PendeciaPrioridade>
    {
        IQueryable<PendeciaPrioridade> GetBySimplefilters(PendeciaPrioridadeFilter filters);

        Task<PendeciaPrioridade> GetById(PendeciaPrioridadeFilter pendeciaprioridade);
		
        Task<IEnumerable<dynamic>> GetDataItem(PendeciaPrioridadeFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(PendeciaPrioridadeFilter filters);

        Task<dynamic> GetDataCustom(PendeciaPrioridadeFilter filters);
    }
}
