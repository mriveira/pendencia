using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IFluxoTrabalhoStatusRepository : IRepository<FluxoTrabalhoStatus>
    {
        IQueryable<FluxoTrabalhoStatus> GetBySimplefilters(FluxoTrabalhoStatusFilter filters);

        Task<FluxoTrabalhoStatus> GetById(FluxoTrabalhoStatusFilter fluxotrabalhostatus);
		
        Task<IEnumerable<dynamic>> GetDataItem(FluxoTrabalhoStatusFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(FluxoTrabalhoStatusFilter filters);

        Task<dynamic> GetDataCustom(FluxoTrabalhoStatusFilter filters);
    }
}
