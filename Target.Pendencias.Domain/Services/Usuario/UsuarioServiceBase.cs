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
    public class UsuarioServiceBase : ServiceBase<Usuario>
    {
        protected readonly IUsuarioRepository _rep;

        public UsuarioServiceBase(IUsuarioRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<Usuario> GetOne(UsuarioFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<Usuario>> GetByFilters(UsuarioFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<Usuario>> GetByFiltersPaging(UsuarioFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(Usuario usuario)
        {
            this._rep.Remove(usuario);
        }

        public virtual Summary GetSummary(PaginateResult<Usuario> paginateResult)
        {
            return new Summary
            {
                Total = paginateResult.TotalCount,
				PageSize = paginateResult.PageSize,
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

        public override async Task<Usuario> Save(Usuario usuario, bool questionToContinue = false)
        {
			var usuarioOld = await this.GetOne(new UsuarioFilter { UsuarioId = usuario.UsuarioId });
			var usuarioOrchestrated = await this.DomainOrchestration(usuario, usuarioOld);

            if (questionToContinue)
            {
                if (base.Continue(usuarioOrchestrated, usuarioOld) == false)
                    return usuarioOrchestrated;
            }

            return this.SaveWithValidation(usuarioOrchestrated, usuarioOld);
        }

        public override async Task<Usuario> SavePartial(Usuario usuario, bool questionToContinue = false)
        {
            var usuarioOld = await this.GetOne(new UsuarioFilter { UsuarioId = usuario.UsuarioId });
			var usuarioOrchestrated = await this.DomainOrchestration(usuario, usuarioOld);

            if (questionToContinue)
            {
                if (base.Continue(usuarioOrchestrated, usuarioOld) == false)
                    return usuarioOrchestrated;
            }

            return SaveWithOutValidation(usuarioOrchestrated, usuarioOld);
        }

        protected override Usuario SaveWithOutValidation(Usuario usuario, Usuario usuarioOld)
        {
            usuario = this.SaveDefault(usuario, usuarioOld);

			if (base._validationResult.IsNotNull() && !base._validationResult.IsValid)
				return usuario;

            base._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "usuario Alterado com sucesso."
            };

            base._cacheHelper.ClearCache();
            return usuario;

        }

		protected override Usuario SaveWithValidation(Usuario usuario, Usuario usuarioOld)
        {
            if (!this.DataAnnotationIsValid())
                return usuario;

            if (!usuario.IsValid())
            {
                base._validationResult = usuario.GetDomainValidation();
                return usuario;
            }

            this.Specifications(usuario);

            if (!base._validationResult.IsValid)
                return usuario;
            
            usuario = this.SaveDefault(usuario, usuarioOld);
            base._validationResult.Message = "Usuario cadastrado com sucesso :)";

            base._cacheHelper.ClearCache();
            return usuario;
        }

		protected virtual void Specifications(Usuario usuario)
        {
            base._validationResult  = new UsuarioAptoParaCadastroValidation(this._rep).Validate(usuario);
			base._validationWarning  = new UsuarioAptoParaCadastroWarning(this._rep).Validate(usuario);
        }

        protected virtual Usuario SaveDefault(Usuario usuario, Usuario usuarioOld)
        {
			usuario = this.AuditDefault(usuario, usuarioOld);

            var isNew = usuarioOld.IsNull();			
            if (isNew)
                usuario = this.AddDefault(usuario);
            else
				usuario = this.UpdateDefault(usuario);

            return usuario;
        }
		
        protected virtual Usuario AddDefault(Usuario usuario)
        {
            usuario = this._rep.Add(usuario);
            return usuario;
        }

		protected virtual Usuario UpdateDefault(Usuario usuario)
        {
            usuario = this._rep.Update(usuario);
            return usuario;
        }
				
		public virtual async Task<Usuario> GetNewInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new Usuario.UsuarioFactory().GetDefaultInstance(model, user);
            });
         }

		public virtual async Task<Usuario> GetUpdateInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new Usuario.UsuarioFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
