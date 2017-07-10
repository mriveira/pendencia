using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IClienteRepository : IRepository<Cliente>
    {
        IQueryable<Cliente> GetBySimplefilters(ClienteFilter filters);

        Task<Cliente> GetById(ClienteFilter cliente);
		
        Task<IEnumerable<dynamic>> GetDataItem(ClienteFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(ClienteFilter filters);

        Task<dynamic> GetDataCustom(ClienteFilter filters);
    }
}
