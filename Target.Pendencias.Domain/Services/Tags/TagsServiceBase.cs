using Common.Domain.Base;
using Common.Domain.Interfaces;
using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Validations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Services
{
    public class TagsServiceBase : ServiceBase<Tags>
    {
        protected readonly ITagsRepository _rep;

        public TagsServiceBase(ITagsRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<Tags> GetOne(TagsFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<Tags>> GetByFilters(TagsFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<Tags>> GetByFiltersPaging(TagsFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public virtual void Remove(Tags tags)
        {
            this._rep.Remove(tags);
        }

        public virtual Summary GetSummary(PaginateResult<Tags> paginateResult)
        {
            return new Summary
            {
                Total = paginateResult.TotalCount,
            };
        }

        public virtual ValidationSpecificationResult GetDomainValidation(FilterBase filters = null)
        {
            return base._validationResult;
        }

        public virtual ConfirmEspecificationResult GetDomainConfirm(FilterBase filters = null)
        {
            return base._validationConfirm;
        }

        public virtual WarningSpecificationResult GetDomainWarning(FilterBase filters = null)
        {
            return base._validationWarning;
        }

        public override async Task<Tags> Save(Tags tags, bool questionToContinue = false)
        {
            var tagsOld = await this.GetOne(new TagsFilter { TagsId = tags.TagsId });
            if (questionToContinue)
            {
                if (base.Continue(tags, tagsOld) == false)
                    return tags;
            }

            return this.SaveWithValidation(tags, tagsOld);
        }

        public override async Task<Tags> SavePartial(Tags tags, bool questionToContinue = false)
        {
            var tagsOld = await this.GetOne(new TagsFilter { TagsId = tags.TagsId });
            if (questionToContinue)
            {
                if (base.Continue(tags, tagsOld) == false)
                    return tags;
            }

            return SaveWithOutValidation(tags, tagsOld);
        }

        protected override Tags SaveWithOutValidation(Tags tags, Tags tagsOld)
        {
            tags = this.SaveDefault(tags, tagsOld);

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "tags Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return tags;

        }

		protected override Tags SaveWithValidation(Tags tags, Tags tagsOld)
        {
            if (!this.DataAnnotationIsValid())
                return tags;

            if (!tags.IsValid())
            {
                base._validationResult = tags.GetDomainValidation();
                return tags;
            }

            this.Specifications(tags);

            if (!base._validationResult.IsValid)
            {
                return tags;
            }
            
            tags = this.SaveDefault(tags, tagsOld);
            base._validationResult.Message = "Tags cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return tags;
        }

		protected virtual void Specifications(Tags tags)
        {
            base._validationResult  = new TagsAptoParaCadastroValidation(this._rep).Validate(tags);
			base._validationWarning  = new TagsAptoParaCadastroWarning(this._rep).Validate(tags);
        }

        protected virtual Tags SaveDefault(Tags tags, Tags tagsOld)
        {
			
			

            var isNew = tagsOld.IsNull();
            if (isNew)
                tags = this._rep.Add(tags);
            else
            {
                tags = this._rep.Update(tags);
            }


            return tags;
        }
    }
}
