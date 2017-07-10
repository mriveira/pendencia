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
    public class PendenciaTemposRepository : Repository<PendenciaTempos>, IPendenciaTemposRepository
    {

        private readonly CurrentUser _user;
        public PendenciaTemposRepository(DbContextTarget ctx, CurrentUser user) : base(ctx)
        {
            this._user = user;

        }

      
        public IQueryable<PendenciaTempos> GetBySimplefilters(PendenciaTemposFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
                                .WithBasicFilters(filters)
                                .WithCustomFilters(filters)
                                .WithLimitTenant(this._user);
            return querybase;
        }

        public async Task<PendenciaTempos> GetById(PendenciaTemposFilter model)
        {
            var _pendenciatempos = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.PendenciaTemposId == model.PendenciaTemposId));

            return _pendenciatempos;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(PendenciaTemposFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaTemposId

            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaTemposFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaTemposId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(PendenciaTemposFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.PendenciaTemposId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<PendenciaTempos> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<PendenciaTempos> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.PendenciaTemposId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.PendenciaTemposId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.PendenciaTemposId);

            return source;
        }

        protected override IQueryable<PendenciaTempos> MapperGetByFiltersToDomainFields(IQueryable<PendenciaTempos> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new PendenciaTempos
                {

                }).AsQueryable();
            }

            return result.Select(_ => (PendenciaTempos)_).AsQueryable();

        }

        protected override PendenciaTempos MapperGetOneToDomainFields(IQueryable<PendenciaTempos> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new PendenciaTempos
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<PendenciaTempos, object>>[] DataAgregation(Expression<Func<PendenciaTempos, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

        public bool ExisteCronometroAtivo()
        {
            return this.GetAll()
                .Where(_ => _.UsuarioId == this._user.GetTenantId<int>())
                .Where(_ => _.Fim == null).Any();
        }
    }
}
