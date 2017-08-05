using Target.Pendencias.Domain.Filter.Transaction;
using Target.Pendencias.Dto.Transaction;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Target.Pendencias.Data.Repository.Transaction
{
    public interface PendenciaTipoIRepository
    {
		
        Task<IEnumerable<dynamic>> GetDataItem(PendenciaTipoFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaTipoFilter filters);

        Task<dynamic> GetDataCustom(PendenciaTipoFilter filters);

		Task<dynamic> Save(PendenciaTipoDtoSpecialized dto);

		Task<dynamic> SavePartial(PendenciaTipoDtoSpecialized dto);

		Task<bool> Remove(PendenciaTipoDto dto);

    }
}
