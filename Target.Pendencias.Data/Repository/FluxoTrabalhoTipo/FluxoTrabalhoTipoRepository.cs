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
    public class FluxoTrabalhoTipoRepository : Repository<FluxoTrabalhoTipo>, IFluxoTrabalhoTipoRepository
    {
        public FluxoTrabalhoTipoRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<FluxoTrabalhoTipo> GetBySimplefilters(FluxoTrabalhoTipoFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
								.WithCustomFilters(filters);
            return querybase;
        }

        public async Task<FluxoTrabalhoTipo> GetById(FluxoTrabalhoTipoFilter model)
        {
            var _fluxotrabalhotipo = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.FluxoTrabalhoTipoId == model.FluxoTrabalhoTipoId));

            return _fluxotrabalhotipo;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(FluxoTrabalhoTipoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.FluxoTrabalhoTipoId,
                Name = _.Nome
            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(FluxoTrabalhoTipoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.FluxoTrabalhoTipoId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(FluxoTrabalhoTipoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.FluxoTrabalhoTipoId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<FluxoTrabalhoTipo> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<FluxoTrabalhoTipo> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.FluxoTrabalhoTipoId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.FluxoTrabalhoTipoId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.FluxoTrabalhoTipoId);

            return source;
        }

        protected override IQueryable<FluxoTrabalhoTipo> MapperGetByFiltersToDomainFields(IQueryable<FluxoTrabalhoTipo> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new FluxoTrabalhoTipo
                {

                }).AsQueryable();
            }

            return result.Select(_ => (FluxoTrabalhoTipo)_).AsQueryable();

        }

        protected override FluxoTrabalhoTipo MapperGetOneToDomainFields(IQueryable<FluxoTrabalhoTipo> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new FluxoTrabalhoTipo
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<FluxoTrabalhoTipo, object>>[] DataAgregation(Expression<Func<FluxoTrabalhoTipo, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
