using Common.Domain.Base;
using Common.Domain.Interfaces;
using Common.Domain.Model;
using Target.Pendencias.Domain.Entitys;
using Target.Pendencias.Domain.Filter;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Validations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Target.Pendencias.Domain.Services
{
    public class UsuarioTipoServiceBase : ServiceBase<UsuarioTipo>
    {
        protected readonly IUsuarioTipoRepository _rep;

        public UsuarioTipoServiceBase(IUsuarioTipoRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<UsuarioTipo> GetOne(UsuarioTipoFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<UsuarioTipo>> GetByFilters(UsuarioTipoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<UsuarioTipo>> GetByFiltersPaging(UsuarioTipoFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(UsuarioTipo usuariotipo)
        {
            this._rep.Remove(usuariotipo);
        }

        public virtual Summary GetSummary(PaginateResult<UsuarioTipo> paginateResult)
        {
            return new Summary
            {
                Total = paginateResult.TotalCount,
            };
        }

        public virtual ValidationSpecificationResult GetDomainValidation(FilterBase filters = null)
        {
            return base._validationResult;
        }

        public virtual ConfirmEspecificationResult GetDomainConfirm(FilterBase filters = null)
        {
            return base._validationConfirm;
        }

        public virtual WarningSpecificationResult GetDomainWarning(FilterBase filters = null)
        {
            return base._validationWarning;
        }

        public override async Task<UsuarioTipo> Save(UsuarioTipo usuariotipo, bool questionToContinue = false)
        {
			var usuariotipoOld = await this.GetOne(new UsuarioTipoFilter { UsuarioTipoId = usuariotipo.UsuarioTipoId });
			var usuariotipoOrchestrated = await this.DomainOrchestration(usuariotipo, usuariotipoOld);

            if (questionToContinue)
            {
                if (base.Continue(usuariotipoOrchestrated, usuariotipoOld) == false)
                    return usuariotipoOrchestrated;
            }

            return this.SaveWithValidation(usuariotipoOrchestrated, usuariotipoOld);
        }

        public override async Task<UsuarioTipo> SavePartial(UsuarioTipo usuariotipo, bool questionToContinue = false)
        {
            var usuariotipoOld = await this.GetOne(new UsuarioTipoFilter { UsuarioTipoId = usuariotipo.UsuarioTipoId });
			var usuariotipoOrchestrated = await this.DomainOrchestration(usuariotipo, usuariotipoOld);

            if (questionToContinue)
            {
                if (base.Continue(usuariotipoOrchestrated, usuariotipoOld) == false)
                    return usuariotipoOrchestrated;
            }

            return SaveWithOutValidation(usuariotipoOrchestrated, usuariotipoOld);
        }

        protected override UsuarioTipo SaveWithOutValidation(UsuarioTipo usuariotipo, UsuarioTipo usuariotipoOld)
        {
            usuariotipo = this.SaveDefault(usuariotipo, usuariotipoOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return usuariotipo;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "usuariotipo Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return usuariotipo;

        }

		protected override UsuarioTipo SaveWithValidation(UsuarioTipo usuariotipo, UsuarioTipo usuariotipoOld)
        {
            if (!this.DataAnnotationIsValid())
                return usuariotipo;

            if (!usuariotipo.IsValid())
            {
                base._validationResult = usuariotipo.GetDomainValidation();
                return usuariotipo;
            }

            this.Specifications(usuariotipo);

            if (!base._validationResult.IsValid)
                return usuariotipo;
            
            usuariotipo = this.SaveDefault(usuariotipo, usuariotipoOld);
            base._validationResult.Message = "UsuarioTipo cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return usuariotipo;
        }

		protected virtual void Specifications(UsuarioTipo usuariotipo)
        {
            base._validationResult  = new UsuarioTipoAptoParaCadastroValidation(this._rep).Validate(usuariotipo);
			base._validationWarning  = new UsuarioTipoAptoParaCadastroWarning(this._rep).Validate(usuariotipo);
        }

        protected virtual UsuarioTipo SaveDefault(UsuarioTipo usuariotipo, UsuarioTipo usuariotipoOld)
        {
			

            var isNew = usuariotipoOld.IsNull();			
            if (isNew)
                usuariotipo = this.AddDefault(usuariotipo);
            else
				usuariotipo = this.UpdateDefault(usuariotipo);

            return usuariotipo;
        }
		
        protected virtual UsuarioTipo AddDefault(UsuarioTipo usuariotipo)
        {
            usuariotipo = this._rep.Add(usuariotipo);
            return usuariotipo;
        }

		protected virtual UsuarioTipo UpdateDefault(UsuarioTipo usuariotipo)
        {
            usuariotipo = this._rep.Update(usuariotipo);
            return usuariotipo;
        }
				
		public virtual async Task<UsuarioTipo> GetNewInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new UsuarioTipo.UsuarioTipoFactory().GetDefaultInstance(model, user);
            });
         }

		public virtual async Task<UsuarioTipo> GetUpdateInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new UsuarioTipo.UsuarioTipoFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
