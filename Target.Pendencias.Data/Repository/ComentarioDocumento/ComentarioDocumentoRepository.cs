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
    public class ComentarioDocumentoRepository : Repository<ComentarioDocumento>, IComentarioDocumentoRepository
    {
        public ComentarioDocumentoRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<ComentarioDocumento> GetBySimplefilters(ComentarioDocumentoFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
                                .WithCustomFilters(filters)
                                .OrderByDomain(filters)
                                .OrderByProperty(filters);

            return querybase;
        }

        public async Task<ComentarioDocumento> GetById(ComentarioDocumentoFilter model)
        {
            var _comentariodocumento = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.DocumentoId == model.DocumentoId).Where(_=>_.ComentarioId == model.ComentarioId));

            return _comentariodocumento;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(ComentarioDocumentoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.DocumentoId

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(ComentarioDocumentoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.DocumentoId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(ComentarioDocumentoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.DocumentoId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<ComentarioDocumento> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<ComentarioDocumento> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.ComentarioDocumentoId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.ComentarioDocumentoId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.ComentarioDocumentoId);

            return source;
        }

        protected override IQueryable<ComentarioDocumento> MapperGetByFiltersToDomainFields(IQueryable<ComentarioDocumento> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new ComentarioDocumento
                {

                }).AsQueryable();
            }

            return result.Select(_ => (ComentarioDocumento)_).AsQueryable();

        }

        protected override ComentarioDocumento MapperGetOneToDomainFields(IQueryable<ComentarioDocumento> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new ComentarioDocumento
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<ComentarioDocumento, object>>[] DataAgregation(Expression<Func<ComentarioDocumento, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
