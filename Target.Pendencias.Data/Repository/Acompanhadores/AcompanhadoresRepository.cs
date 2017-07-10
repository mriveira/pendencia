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
    public class AcompanhadoresRepository : Repository<Acompanhadores>, IAcompanhadoresRepository
    {
        public AcompanhadoresRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<Acompanhadores> GetBySimplefilters(AcompanhadoresFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
								.WithCustomFilters(filters);
            return querybase;
        }

        public async Task<Acompanhadores> GetById(AcompanhadoresFilter model)
        {
            var _acompanhadores = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.PendenciaId == model.PendenciaId).Where(_=>_.UsuarioId == model.UsuarioId));

            return _acompanhadores;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(AcompanhadoresFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaId

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(AcompanhadoresFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(AcompanhadoresFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<Acompanhadores> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<Acompanhadores> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.AcompanhadoresId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.AcompanhadoresId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.AcompanhadoresId);

            return source;
        }

        protected override IQueryable<Acompanhadores> MapperGetByFiltersToDomainFields(IQueryable<Acompanhadores> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new Acompanhadores
                {

                }).AsQueryable();
            }

            return result.Select(_ => (Acompanhadores)_).AsQueryable();

        }

        protected override Acompanhadores MapperGetOneToDomainFields(IQueryable<Acompanhadores> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new Acompanhadores
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<Acompanhadores, object>>[] DataAgregation(Expression<Func<Acompanhadores, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
