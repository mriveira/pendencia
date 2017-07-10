using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IComentarioDocumentoRepository : IRepository<ComentarioDocumento>
    {
        IQueryable<ComentarioDocumento> GetBySimplefilters(ComentarioDocumentoFilter filters);

        Task<ComentarioDocumento> GetById(ComentarioDocumentoFilter comentariodocumento);
		
        Task<IEnumerable<dynamic>> GetDataItem(ComentarioDocumentoFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(ComentarioDocumentoFilter filters);

        Task<dynamic> GetDataCustom(ComentarioDocumentoFilter filters);
    }
}
