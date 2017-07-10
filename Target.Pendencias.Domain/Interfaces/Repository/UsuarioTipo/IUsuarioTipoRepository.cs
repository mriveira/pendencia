using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IUsuarioTipoRepository : IRepository<UsuarioTipo>
    {
        IQueryable<UsuarioTipo> GetBySimplefilters(UsuarioTipoFilter filters);

        Task<UsuarioTipo> GetById(UsuarioTipoFilter usuariotipo);
		
        Task<IEnumerable<dynamic>> GetDataItem(UsuarioTipoFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(UsuarioTipoFilter filters);

        Task<dynamic> GetDataCustom(UsuarioTipoFilter filters);
    }
}
