using Common.Domain.Interfaces;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Interfaces.Repository
{
    public interface ITagsRepository : IRepository<Tags>
    {
        IQueryable<Tags> GetBySimplefilters(TagsFilter filters);

        Task<Tags> GetById(TagsFilter tags);
		
        Task<IEnumerable<dynamic>> GetDataItem(TagsFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(TagsFilter filters);

        Task<dynamic> GetDataCustom(TagsFilter filters);
    }
}
