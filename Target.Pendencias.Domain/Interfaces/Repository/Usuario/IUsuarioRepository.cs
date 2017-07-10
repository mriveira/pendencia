using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface IUsuarioRepository : IRepository<Usuario>
    {
        IQueryable<Usuario> GetBySimplefilters(UsuarioFilter filters);

        Task<Usuario> GetById(UsuarioFilter usuario);
		
        Task<IEnumerable<dynamic>> GetDataItem(UsuarioFilter filters);

        Usuario ObterPorEmail(string email);

        Task<IEnumerable<dynamic>> GetDataListCustom(UsuarioFilter filters);

        Task<dynamic> GetDataCustom(UsuarioFilter filters);
    }
}
