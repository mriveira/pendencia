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
using Common.Domain.Model;

namespace Target.Pendencias.Data.Repository
{
    public class ProjetoDocumentoRepository : Repository<ProjetoDocumento>, IProjetoDocumentoRepository
    {
        private CurrentUser _user;
        public ProjetoDocumentoRepository(DbContextTarget ctx, CurrentUser user) : base(ctx)
        {
			this._user = user;
        }

      
        public IQueryable<ProjetoDocumento> GetBySimplefilters(ProjetoDocumentoFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
                                .WithCustomFilters(filters)
                                .OrderByDomain(filters)
                                .OrderByProperty(filters);

            return querybase;
        }

        public async Task<ProjetoDocumento> GetById(ProjetoDocumentoFilter model)
        {
            var _projetodocumento = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
                .Where(_ => _.ProjetoId == model.ProjetoId).Where(_ => _.DocumentoId == model.DocumentoId));

            return _projetodocumento;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(ProjetoDocumentoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(ProjetoDocumentoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
               

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(ProjetoDocumentoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
               

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<ProjetoDocumento> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<ProjetoDocumento> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.ProjetoDocumentoId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.ProjetoDocumentoId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.ProjetoDocumentoId);

            return source;
        }

        protected override IQueryable<ProjetoDocumento> MapperGetByFiltersToDomainFields(IQueryable<ProjetoDocumento> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new ProjetoDocumento
                {

                }).AsQueryable();
            }

            return result.Select(_ => (ProjetoDocumento)_).AsQueryable();

        }

        protected override ProjetoDocumento MapperGetOneToDomainFields(IQueryable<ProjetoDocumento> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new ProjetoDocumento
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<ProjetoDocumento, object>>[] DataAgregation(Expression<Func<ProjetoDocumento, object>>[] includes, FilterBase filter)
        {
            return includes.Add(_ => _.Documento);
        }

    }
}
