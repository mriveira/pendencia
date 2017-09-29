using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IProjetoDocumentoRepository : IRepository<ProjetoDocumento>
    {
        IQueryable<ProjetoDocumento> GetBySimplefilters(ProjetoDocumentoFilter filters);

        Task<ProjetoDocumento> GetById(ProjetoDocumentoFilter projetodocumento);
		
        Task<IEnumerable<dynamic>> GetDataItem(ProjetoDocumentoFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(ProjetoDocumentoFilter filters);

        Task<dynamic> GetDataCustom(ProjetoDocumentoFilter filters);
    }
}
