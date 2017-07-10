using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IDocumentoRepository : IRepository<Documento>
    {
        IQueryable<Documento> GetBySimplefilters(DocumentoFilter filters);

        Task<Documento> GetById(DocumentoFilter documento);
		
        Task<IEnumerable<dynamic>> GetDataItem(DocumentoFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(DocumentoFilter filters);

        Task<dynamic> GetDataCustom(DocumentoFilter filters);
    }
}
