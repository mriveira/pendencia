using Common.Domain.Base;
using Common.Orm;
using Target.Pendencias.Data.Context;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using Target.Pendencias.Domain.Interfaces.Repository;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System;

namespace Target.Pendencias.Data.Repository
{
    public class TagsRepository : Repository<Tags>, ITagsRepository
    {
        public TagsRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<Tags> GetBySimplefilters(TagsFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
								.WithCustomFilters(filters);
            return querybase;
        }

        public async Task<Tags> GetById(TagsFilter model)
        {
            var _tags = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.TagsId == model.TagsId));

            return _tags;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(TagsFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.TagsId

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(TagsFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.TagsId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(TagsFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.TagsId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<Tags> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<Tags> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.TagsId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.TagsId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.TagsId);

            return source;
        }

        protected override IQueryable<Tags> MapperGetByFiltersToDomainFields(IQueryable<Tags> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new Tags
                {

                }).AsQueryable();
            }

            return result.Select(_ => (Tags)_).AsQueryable();

        }

        protected override Tags MapperGetOneToDomainFields(IQueryable<Tags> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new Tags
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<Tags, object>>[] DataAgregation(Expression<Func<Tags, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
