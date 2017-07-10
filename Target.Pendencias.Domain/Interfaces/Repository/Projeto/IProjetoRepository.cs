using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IProjetoRepository : IRepository<Projeto>
    {
        IQueryable<Projeto> GetBySimplefilters(ProjetoFilter filters);

        Task<Projeto> GetById(ProjetoFilter projeto);
		
        Task<IEnumerable<dynamic>> GetDataItem(ProjetoFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(ProjetoFilter filters);

        Task<dynamic> GetDataCustom(ProjetoFilter filters);
    }
}
