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
    public class PendenciaEventosRepository : Repository<PendenciaEventos>, IPendenciaEventosRepository
    {
        public PendenciaEventosRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<PendenciaEventos> GetBySimplefilters(PendenciaEventosFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
                                .WithCustomFilters(filters)
                                .OrderByDomain(filters)
                                .OrderByProperty(filters);

            return querybase;
        }

        public async Task<PendenciaEventos> GetById(PendenciaEventosFilter model)
        {
            var _pendenciaeventos = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.PendenciaEventosId == model.PendenciaEventosId));

            return _pendenciaeventos;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(PendenciaEventosFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaEventosId

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaEventosFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaEventosId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(PendenciaEventosFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaEventosId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<PendenciaEventos> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<PendenciaEventos> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.PendenciaEventosId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.PendenciaEventosId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.PendenciaEventosId);

            return source;
        }

        protected override IQueryable<PendenciaEventos> MapperGetByFiltersToDomainFields(IQueryable<PendenciaEventos> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new PendenciaEventos
                {

                }).AsQueryable();
            }

            return result.Select(_ => (PendenciaEventos)_).AsQueryable();

        }

        protected override PendenciaEventos MapperGetOneToDomainFields(IQueryable<PendenciaEventos> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new PendenciaEventos
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<PendenciaEventos, object>>[] DataAgregation(Expression<Func<PendenciaEventos, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
