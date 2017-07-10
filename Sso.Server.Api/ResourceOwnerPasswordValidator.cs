using Common.Domain.Base;
using IdentityServer4.Models;
using IdentityServer4.Validation;
using Microsoft.Extensions.Options;
using Sso.Server.Api.Model;
using System;
using System.Linq;
using System.Threading.Tasks;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Sso.Server.Api
{
    public class ResourceOwnerPasswordValidator : IResourceOwnerPasswordValidator
    {
        
        private ConfigSettingsBase _settings;
        private IUsuarioRepository _rep;

        public ResourceOwnerPasswordValidator(IUsuarioRepository rep, IOptions<ConfigSettingsBase> configSettingsBase)
        {
            this._rep = rep;
            this._settings = configSettingsBase.Value;
        }
        

        public async Task ValidateAsync(ResourceOwnerPasswordValidationContext context)
        {
            try
            {

                var userServices = new UserServices(this._rep);

                var user = await userServices.Auth(context.UserName, context.Password);

                if (user.IsNotNull())
                {
                    context.Result = new GrantValidationResult(
                        subject: user.SubjectId,
                        authenticationMethod: "custom",
                        claims: user.Claims);

                    return;
                }

                context.Result = new GrantValidationResult(TokenRequestErrors.InvalidGrant,
                    "Usuário ou Senha inválidos");

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

    }
}
