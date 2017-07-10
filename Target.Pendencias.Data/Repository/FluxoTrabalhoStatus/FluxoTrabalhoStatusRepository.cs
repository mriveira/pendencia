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
    public class FluxoTrabalhoStatusRepository : Repository<FluxoTrabalhoStatus>, IFluxoTrabalhoStatusRepository
    {
        public FluxoTrabalhoStatusRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<FluxoTrabalhoStatus> GetBySimplefilters(FluxoTrabalhoStatusFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
								.WithCustomFilters(filters);
            return querybase;
        }

        public async Task<FluxoTrabalhoStatus> GetById(FluxoTrabalhoStatusFilter model)
        {
            var _fluxotrabalhostatus = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.FluxoTrabalhoStatusId == model.FluxoTrabalhoStatusId));

            return _fluxotrabalhostatus;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(FluxoTrabalhoStatusFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.FluxoTrabalhoStatusId,
                Name = _.Nome,

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(FluxoTrabalhoStatusFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.FluxoTrabalhoStatusId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(FluxoTrabalhoStatusFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.FluxoTrabalhoStatusId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<FluxoTrabalhoStatus> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<FluxoTrabalhoStatus> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.FluxoTrabalhoStatusId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.FluxoTrabalhoStatusId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.FluxoTrabalhoStatusId);

            return source;
        }

        protected override IQueryable<FluxoTrabalhoStatus> MapperGetByFiltersToDomainFields(IQueryable<FluxoTrabalhoStatus> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new FluxoTrabalhoStatus
                {

                }).AsQueryable();
            }

            return result.Select(_ => (FluxoTrabalhoStatus)_).AsQueryable();

        }

        protected override FluxoTrabalhoStatus MapperGetOneToDomainFields(IQueryable<FluxoTrabalhoStatus> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new FluxoTrabalhoStatus
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<FluxoTrabalhoStatus, object>>[] DataAgregation(Expression<Func<FluxoTrabalhoStatus, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
