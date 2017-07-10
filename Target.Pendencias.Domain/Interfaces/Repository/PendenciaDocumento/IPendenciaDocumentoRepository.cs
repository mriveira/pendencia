using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IPendenciaDocumentoRepository : IRepository<PendenciaDocumento>
    {
        IQueryable<PendenciaDocumento> GetBySimplefilters(PendenciaDocumentoFilter filters);

        Task<PendenciaDocumento> GetById(PendenciaDocumentoFilter pendenciadocumento);
		
        Task<IEnumerable<dynamic>> GetDataItem(PendenciaDocumentoFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaDocumentoFilter filters);

        Task<dynamic> GetDataCustom(PendenciaDocumentoFilter filters);
    }
}
