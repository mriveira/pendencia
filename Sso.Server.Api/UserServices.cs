using Sso.Server.Api.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Enums;

namespace Sso.Server.Api
{
    public class UserServices
    {

        private IUsuarioRepository _rep;

        public UserServices(IUsuarioRepository rep)
        {
            this._rep = rep;
        }

        public async Task<User> Auth(string userName, string password)
        {
            var UserTenant = await this._rep.SingleOrDefaultAsync(this._rep.GetAll(_ => _.UsuarioTipo)
                 .Where(_ => _.Email == userName)
                 .Where(_ => _.Senha == password));

            var user = default(User);

            if (UserTenant.IsNotNull())
            {
                user = new User();

                if (UserTenant.UsuarioTipoId == (int)EUsuarioTipo.ProductOwner || UserTenant.UsuarioTipoId == (int)EUsuarioTipo.Company)
                    user.Claims = Config.ClaimsForTenantOwner(UserTenant.UsuarioId, UserTenant.UsuarioDonoId, UserTenant.UsuarioTipo.Nome, UserTenant.Nome, UserTenant.Email, UserTenant.Foto);

                if (UserTenant.UsuarioTipoId == (int)EUsuarioTipo.Team)
                    user.Claims = Config.ClaimsForTenantTeam(UserTenant.UsuarioId, UserTenant.UsuarioDonoId, UserTenant.UsuarioTipo.Nome, UserTenant.Nome, UserTenant.Email, UserTenant.Foto);

                user.SubjectId = UserTenant.UsuarioId.ToString();
                user.Username = UserTenant.Nome;
            }

            var userAdmin = Config.GetUsers()
                    .Where(_ => _.Username == userName)
                    .Where(_ => _.Password == password)
                    .SingleOrDefault();

            if (userAdmin.IsNotNull())
                user = userAdmin;

            return user;

        }

    }
}
