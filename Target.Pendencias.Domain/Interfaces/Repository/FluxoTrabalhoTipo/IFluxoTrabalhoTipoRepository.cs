using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IFluxoTrabalhoTipoRepository : IRepository<FluxoTrabalhoTipo>
    {
        IQueryable<FluxoTrabalhoTipo> GetBySimplefilters(FluxoTrabalhoTipoFilter filters);

        Task<FluxoTrabalhoTipo> GetById(FluxoTrabalhoTipoFilter fluxotrabalhotipo);
		
        Task<IEnumerable<dynamic>> GetDataItem(FluxoTrabalhoTipoFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(FluxoTrabalhoTipoFilter filters);

        Task<dynamic> GetDataCustom(FluxoTrabalhoTipoFilter filters);
    }
}
