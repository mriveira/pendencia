using Common.Domain.Interfaces;
using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Interfaces.Services;

namespace Target.Pendencias.Domain.Services
{
    public class TagsService : TagsServiceBase, ITagsService
    {

        public TagsService(ITagsRepository rep, ICache cache, CurrentUser user) 
            : base(rep, cache, user)
        {


        }
        
    }
}
