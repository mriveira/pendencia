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
    public class ProjetoFluxoTrabalhoStatusRepository : Repository<ProjetoFluxoTrabalhoStatus>, IProjetoFluxoTrabalhoStatusRepository
    {
        public ProjetoFluxoTrabalhoStatusRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<ProjetoFluxoTrabalhoStatus> GetBySimplefilters(ProjetoFluxoTrabalhoStatusFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
								.WithCustomFilters(filters);
            return querybase;
        }

        public async Task<ProjetoFluxoTrabalhoStatus> GetById(ProjetoFluxoTrabalhoStatusFilter model)
        {
            var _projetofluxotrabalhostatus = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.ProjetoId == model.ProjetoId).Where(_=>_.FluxoTrabalhoStatusId == model.FluxoTrabalhoStatusId));

            return _projetofluxotrabalhostatus;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(ProjetoFluxoTrabalhoStatusFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ProjetoId

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(ProjetoFluxoTrabalhoStatusFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ProjetoId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(ProjetoFluxoTrabalhoStatusFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ProjetoId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<ProjetoFluxoTrabalhoStatus> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<ProjetoFluxoTrabalhoStatus> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.ProjetoFluxoTrabalhoStatusId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.ProjetoFluxoTrabalhoStatusId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.ProjetoFluxoTrabalhoStatusId);

            return source;
        }

        protected override IQueryable<ProjetoFluxoTrabalhoStatus> MapperGetByFiltersToDomainFields(IQueryable<ProjetoFluxoTrabalhoStatus> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new ProjetoFluxoTrabalhoStatus
                {

                }).AsQueryable();
            }

            return result.Select(_ => (ProjetoFluxoTrabalhoStatus)_).AsQueryable();

        }

        protected override ProjetoFluxoTrabalhoStatus MapperGetOneToDomainFields(IQueryable<ProjetoFluxoTrabalhoStatus> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new ProjetoFluxoTrabalhoStatus
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<ProjetoFluxoTrabalhoStatus, object>>[] DataAgregation(Expression<Func<ProjetoFluxoTrabalhoStatus, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
