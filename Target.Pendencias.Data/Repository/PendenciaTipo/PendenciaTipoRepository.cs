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
    public class PendenciaTipoRepository : Repository<PendenciaTipo>, IPendenciaTipoRepository
    {
        public PendenciaTipoRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<PendenciaTipo> GetBySimplefilters(PendenciaTipoFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
                                .WithCustomFilters(filters)
                                .OrderByDomain(filters)
                                .OrderByProperty(filters);

            return querybase;
        }

        public async Task<PendenciaTipo> GetById(PendenciaTipoFilter model)
        {
            var _pendenciatipo = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.PendenciaTipoId == model.PendenciaTipoId));

            return _pendenciatipo;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(PendenciaTipoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaTipoId,
                Name = _.Nome,

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaTipoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaTipoId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(PendenciaTipoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaTipoId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<PendenciaTipo> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<PendenciaTipo> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.PendenciaTipoId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.PendenciaTipoId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.PendenciaTipoId);

            return source;
        }

        protected override IQueryable<PendenciaTipo> MapperGetByFiltersToDomainFields(IQueryable<PendenciaTipo> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new PendenciaTipo
                {

                }).AsQueryable();
            }

            return result.Select(_ => (PendenciaTipo)_).AsQueryable();

        }

        protected override PendenciaTipo MapperGetOneToDomainFields(IQueryable<PendenciaTipo> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new PendenciaTipo
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<PendenciaTipo, object>>[] DataAgregation(Expression<Func<PendenciaTipo, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
