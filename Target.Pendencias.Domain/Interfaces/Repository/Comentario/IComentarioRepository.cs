using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IComentarioRepository : IRepository<Comentario>
    {
        IQueryable<Comentario> GetBySimplefilters(ComentarioFilter filters);

        Task<Comentario> GetById(ComentarioFilter comentario);
		
        Task<IEnumerable<dynamic>> GetDataItem(ComentarioFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(ComentarioFilter filters);

        Task<dynamic> GetDataCustom(ComentarioFilter filters);
    }
}
