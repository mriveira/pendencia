using Common.Domain.Base;
using IdentityModel;
using IdentityServer4.Models;
using Newtonsoft.Json;
using Sso.Server.Api.Model;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using static IdentityServer4.IdentityServerConstants;

namespace Sso.Server.Api
{
    public class Config
    {
        public static User MakeUsersAdmin()
        {
            return new User
            {
                SubjectId = "1",
                Username = "adm@adm.com.br",
                Password = "123456",
                Claims = ClaimsForAdmin("adm", "adm@adm.com.br")
            };
        }

        public static List<Claim> ClaimsForTenantOwner(int tenantId, int? tenantOwnerId, string type, string name, string email, string avatar)
        {

            var tools = new List<dynamic>
            {
                new { Name = "Crud Usuario", Value = "/usuario" },
                new { Name = "Crud Clientes", Value = "/cliente" },
                new { Name = "Crud Projeto", Value = "/projeto" },
                new { Name = "Crud Pendencia", Value = "/pendencia" },
                new { Name = "Crud Tempos", Value = "/pendenciatempos" },
                new { Name = "Dash Time", Value = "/dashboard/timesheet" },
                new { Name = "Dash PO", Value = "/dashboard/burndown" },
            };

            var _toolsForSubscriber = JsonConvert.SerializeObject(tools);

            return new List<Claim>
            {
                new Claim(JwtClaimTypes.Name, name),
                new Claim(JwtClaimTypes.Email, email),
                new Claim("tools",_toolsForSubscriber),
                new Claim("role","tenant"),
                new Claim("typerole", type),
                new Claim("owner",  (tenantOwnerId ?? tenantId).ToString()),
                new Claim("avatar",  avatar)
            };
        }

        public static List<Claim> ClaimsForTenantTeam(int tenantId, int? tenantOwnerId, string type, string name, string email,string avatar)
        {

            var tools = new List<dynamic>
            {
                new { Name = "Editar Usuario", Value = $"/usuario/edit/{tenantId}" },
                new { Name = "Crud Tempos", Value = "/pendenciatempos" },
                new { Name = "Crud Pendencia", Value = "/pendencia" },
                new { Name = "Dash Time", Value = "/dashboard/timesheet" },
                new { Name = "Dash PO", Value = "/dashboard/burndown" },
            };

            var _toolsForSubscriber = JsonConvert.SerializeObject(tools);

            return new List<Claim>
            {
                new Claim(JwtClaimTypes.Name, name),
                new Claim(JwtClaimTypes.Email, email),
                new Claim("tools",_toolsForSubscriber),
                new Claim("role","tenant"),
                new Claim("typerole", type),
                new Claim("owner",  (tenantOwnerId ?? tenantId).ToString()),
                new Claim("avatar",  avatar)
            };
        }

        public static List<Claim> ClaimsForAdmin(string name, string email)
        {

            var tools = new List<dynamic>
            {
                new { Name = "Status dos Fluxos", Value = "/fluxotrabalhostatus" },
                new { Name = "Tipos de Fluxos", Value = "/fluxotrabalhotipo" },
                new { Name = "Prioridade", Value = "/pendeciaprioridade" },
                new { Name = "Tipos de Pendencias", Value = "/pendenciatipo" },
                new { Name = "Usuário", Value = "/usuario" },
                new { Name = "Tipos de Usuários", Value = "/usuariotipo" },

            };

            var _toolsForAdmin = JsonConvert.SerializeObject(tools);

            return new List<Claim>
            {
                new Claim(JwtClaimTypes.Name, name),
                new Claim(JwtClaimTypes.Email, email),
                new Claim("tools", _toolsForAdmin),
                new Claim("role", "admin"),
                new Claim("type", "admin"),
            };
        }


        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("ssosa", "Sso Basic")
                {
                    Scopes = new List<Scope>()
                    {
                        new Scope
                        {
                            UserClaims = new List<string> {"name", "openid", "email", "role", "tools","owner","typerole","avatar"},
                            Name = "ssosa",
                            Description = "sso basic",
                        }
                    }
                }
            };
        }

        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
            };
        }

        public static IEnumerable<Client> GetClients(ConfigSettingsBase settings)
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "Target",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes =
                    {
                        StandardScopes.OpenId,
                        StandardScopes.Profile,
                        StandardScopes.Email,
                        "ssosa"
                    }
                },

                new Client
                {
                    ClientId = "Target-spa",
                    ClientSecrets = { new Secret("segredo".Sha256()) },

                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,

                    RedirectUris = {
                        settings.RedirectUris
                    },
                    PostLogoutRedirectUris =
                    {
                        settings.PostLogoutRedirectUris
                    },

                    AllowedCorsOrigins = { settings.ClientAuthorityEndPoint },

                    AllowedScopes =
                    {
                        StandardScopes.OpenId,
                        StandardScopes.Profile,
                        StandardScopes.Email,
                        "ssosa"
                    },
                    RequireConsent = false,
                    AccessTokenLifetime = 43200
                }

            };
        }

        public static List<User> GetUsers()
        {
            return new List<User>()
            {
                MakeUsersAdmin()
            };
        }

    }
}
