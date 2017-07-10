using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IAcompanhadoresRepository : IRepository<Acompanhadores>
    {
        IQueryable<Acompanhadores> GetBySimplefilters(AcompanhadoresFilter filters);

        Task<Acompanhadores> GetById(AcompanhadoresFilter acompanhadores);
		
        Task<IEnumerable<dynamic>> GetDataItem(AcompanhadoresFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(AcompanhadoresFilter filters);

        Task<dynamic> GetDataCustom(AcompanhadoresFilter filters);
    }
}
