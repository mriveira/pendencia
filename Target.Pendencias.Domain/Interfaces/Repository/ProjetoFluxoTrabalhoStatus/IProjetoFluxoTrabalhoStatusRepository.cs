using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IProjetoFluxoTrabalhoStatusRepository : IRepository<ProjetoFluxoTrabalhoStatus>
    {
        IQueryable<ProjetoFluxoTrabalhoStatus> GetBySimplefilters(ProjetoFluxoTrabalhoStatusFilter filters);

        Task<ProjetoFluxoTrabalhoStatus> GetById(ProjetoFluxoTrabalhoStatusFilter projetofluxotrabalhostatus);
		
        Task<IEnumerable<dynamic>> GetDataItem(ProjetoFluxoTrabalhoStatusFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(ProjetoFluxoTrabalhoStatusFilter filters);

        Task<dynamic> GetDataCustom(ProjetoFluxoTrabalhoStatusFilter filters);
    }
}
