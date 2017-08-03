using Target.Pendencias.Domain.Filter.Transaction;
using Target.Pendencias.Dto.Transaction;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Target.Pendencias.Data.Repository.Transaction
{
    public interface UsuarioTipoIRepository
    {
		
        Task<IEnumerable<dynamic>> GetDataItem(UsuarioTipoFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(UsuarioTipoFilter filters);

        Task<dynamic> GetDataCustom(UsuarioTipoFilter filters);

		Task<dynamic> Save(UsuarioTipoDtoSpecialized dto);

		Task<dynamic> SavePartial(UsuarioTipoDtoSpecialized dto);

		Task<bool> Remove(UsuarioTipoDto dto);

    }
}
