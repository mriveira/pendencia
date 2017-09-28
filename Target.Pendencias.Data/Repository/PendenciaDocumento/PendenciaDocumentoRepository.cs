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
    public class PendenciaDocumentoRepository : Repository<PendenciaDocumento>, IPendenciaDocumentoRepository
    {
        public PendenciaDocumentoRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<PendenciaDocumento> GetBySimplefilters(PendenciaDocumentoFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
								.WithCustomFilters(filters);
            return querybase;
        }

        public async Task<PendenciaDocumento> GetById(PendenciaDocumentoFilter model)
        {
            var _pendenciadocumento = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.PendenciaId == model.PendenciaId).Where(_=>_.DocumentoId == model.DocumentoId));

            return _pendenciadocumento;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(PendenciaDocumentoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaId

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaDocumentoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(PendenciaDocumentoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<PendenciaDocumento> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<PendenciaDocumento> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.PendenciaDocumentoId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.PendenciaDocumentoId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.PendenciaDocumentoId);

            return source;
        }

        protected override IQueryable<PendenciaDocumento> MapperGetByFiltersToDomainFields(IQueryable<PendenciaDocumento> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new PendenciaDocumento
                {

                }).AsQueryable();
            }

            return result.Select(_ => (PendenciaDocumento)_).AsQueryable();

        }

        protected override PendenciaDocumento MapperGetOneToDomainFields(IQueryable<PendenciaDocumento> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new PendenciaDocumento
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<PendenciaDocumento, object>>[] DataAgregation(Expression<Func<PendenciaDocumento, object>>[] includes, FilterBase filter)
        {
            return includes.Add(_ => _.Documento);
        }

    }
}
