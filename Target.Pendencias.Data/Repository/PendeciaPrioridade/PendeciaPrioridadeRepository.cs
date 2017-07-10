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
    public class PendeciaPrioridadeRepository : Repository<PendeciaPrioridade>, IPendeciaPrioridadeRepository
    {
        public PendeciaPrioridadeRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<PendeciaPrioridade> GetBySimplefilters(PendeciaPrioridadeFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
								.WithCustomFilters(filters);
            return querybase;
        }

        public async Task<PendeciaPrioridade> GetById(PendeciaPrioridadeFilter model)
        {
            var _pendeciaprioridade = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.PendeciaPrioridadeId == model.PendeciaPrioridadeId));

            return _pendeciaprioridade;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(PendeciaPrioridadeFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendeciaPrioridadeId,
                Name = _.Nome,

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(PendeciaPrioridadeFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendeciaPrioridadeId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(PendeciaPrioridadeFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendeciaPrioridadeId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<PendeciaPrioridade> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<PendeciaPrioridade> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.PendeciaPrioridadeId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.PendeciaPrioridadeId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.PendeciaPrioridadeId);

            return source;
        }

        protected override IQueryable<PendeciaPrioridade> MapperGetByFiltersToDomainFields(IQueryable<PendeciaPrioridade> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new PendeciaPrioridade
                {

                }).AsQueryable();
            }

            return result.Select(_ => (PendeciaPrioridade)_).AsQueryable();

        }

        protected override PendeciaPrioridade MapperGetOneToDomainFields(IQueryable<PendeciaPrioridade> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new PendeciaPrioridade
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<PendeciaPrioridade, object>>[] DataAgregation(Expression<Func<PendeciaPrioridade, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
