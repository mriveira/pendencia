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
    public class UsuarioTipoRepository : Repository<UsuarioTipo>, IUsuarioTipoRepository
    {
        public UsuarioTipoRepository(DbContextTarget ctx) : base(ctx)
        {


        }

      
        public IQueryable<UsuarioTipo> GetBySimplefilters(UsuarioTipoFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
								.WithCustomFilters(filters);
            return querybase;
        }

        public async Task<UsuarioTipo> GetById(UsuarioTipoFilter model)
        {
            var _usuariotipo = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.UsuarioTipoId == model.UsuarioTipoId));

            return _usuariotipo;
        }

		 public async Task<IEnumerable<dynamic>> GetDataItem(UsuarioTipoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.UsuarioTipoId,
                Name = _.Nome
            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(UsuarioTipoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.UsuarioTipoId,

            }));

            return querybase;
        }

        public async Task<dynamic> GetDataCustom(UsuarioTipoFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.UsuarioTipoId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<UsuarioTipo> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<UsuarioTipo> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.UsuarioTipoId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.UsuarioTipoId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.UsuarioTipoId);

            return source;
        }

        protected override IQueryable<UsuarioTipo> MapperGetByFiltersToDomainFields(IQueryable<UsuarioTipo> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new UsuarioTipo
                {

                }).AsQueryable();
            }

            return result.Select(_ => (UsuarioTipo)_).AsQueryable();

        }

        protected override UsuarioTipo MapperGetOneToDomainFields(IQueryable<UsuarioTipo> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new UsuarioTipo
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<UsuarioTipo, object>>[] DataAgregation(Expression<Func<UsuarioTipo, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
