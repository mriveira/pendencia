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
    public class ComentarioRepository : Repository<Comentario>, IComentarioRepository
    {
        public ComentarioRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<Comentario> GetBySimplefilters(ComentarioFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
								.WithCustomFilters(filters);
            return querybase;
        }

        public async Task<Comentario> GetById(ComentarioFilter model)
        {
            var _comentario = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.ComentarioId == model.ComentarioId));

            return _comentario;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(ComentarioFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ComentarioId

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(ComentarioFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ComentarioId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(ComentarioFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ComentarioId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<Comentario> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<Comentario> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.ComentarioId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.ComentarioId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.ComentarioId);

            return source;
        }

        protected override IQueryable<Comentario> MapperGetByFiltersToDomainFields(IQueryable<Comentario> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new Comentario
                {

                }).AsQueryable();
            }

            return result.Select(_ => (Comentario)_).AsQueryable();

        }

        protected override Comentario MapperGetOneToDomainFields(IQueryable<Comentario> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new Comentario
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<Comentario, object>>[] DataAgregation(Expression<Func<Comentario, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
