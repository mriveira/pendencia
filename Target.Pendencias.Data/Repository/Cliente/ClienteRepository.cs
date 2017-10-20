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
    public class ClienteRepository : Repository<Cliente>, IClienteRepository
    {

        private readonly CurrentUser _user;
        public ClienteRepository(DbContextTarget ctx, CurrentUser user) : base(ctx)
        {
            this._user = user;

        }

      
        public IQueryable<Cliente> GetBySimplefilters(ClienteFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
                                .WithBasicFilters(filters)
                                .WithLimitTenant(this._user)
                                .WithCustomFilters(filters)
                                .OrderByDomain(filters)
                                .OrderByProperty(filters);

            return querybase;
        }

        public async Task<Cliente> GetById(ClienteFilter model)
        {
            var _cliente = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.ClienteId == model.ClienteId));

            return _cliente;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(ClienteFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ClienteId,
                Name = _.Nome
            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(ClienteFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ClienteId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(ClienteFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.ClienteId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<Cliente> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<Cliente> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.ClienteId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.ClienteId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.ClienteId);

            return source;
        }

        protected override IQueryable<Cliente> MapperGetByFiltersToDomainFields(IQueryable<Cliente> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new Cliente
                {

                }).AsQueryable();
            }

            return result.Select(_ => (Cliente)_).AsQueryable();

        }

        protected override Cliente MapperGetOneToDomainFields(IQueryable<Cliente> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new Cliente
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<Cliente, object>>[] DataAgregation(Expression<Func<Cliente, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
