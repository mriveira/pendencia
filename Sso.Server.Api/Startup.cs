using Common.API;
using Common.API.Extensions;
using Common.Domain.Base;
using Common.Domain.Model;
using IdentityServer4;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using IdentityServer4.Validation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using Target.Pendencias.Data.Context;
using Target.Pendencias.Data.Repository;
using Target.Pendencias.Domain.Interfaces.Repository;

namespace Sso.Server.Api
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }
        private readonly IHostingEnvironment _env;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                 .SetBasePath(env.ContentRootPath)
                 .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                 .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                 .AddEnvironmentVariables();

            Configuration = builder.Build();
            _env = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {

            var cns =
             Configuration
                .GetSection("EFCoreConnStrings:Target").Value;

            services.AddDbContext<DbContextTarget>(options => options.UseSqlServer(cns));

            //var migrationAssembly = typeof(Startup).GetTypeInfo().Assembly.GetName().Name;
            //services.AddDbContext<DbContextTarget>(options => options.UseSqlServer(cns));

            services.AddIdentityServer()
                .AddSigningCredential(GetRSAParameters())
                //.AddTemporarySigningCredential()
                .AddInMemoryApiResources(Config.GetApiResources())
                .AddInMemoryIdentityResources(Config.GetIdentityResources())
                .AddInMemoryClients(Config.GetClients(Configuration.GetSection("ConfigSettings").Get<ConfigSettingsBase>()));
                //.AddConfigurationStore(builder =>
                //        builder.UseSqlServer(cns, options =>
                //            options.MigrationsAssembly(migrationAssembly)))
                //    .AddOperationalStore(builder =>
                //        builder.UseSqlServer(cns, options =>
                //            options.MigrationsAssembly(migrationAssembly)));

            //for clarity of the next piece of code
            services.AddScoped<CurrentUser>();
            services.AddTransient<IUsuarioRepository, UsuarioRepository>();
            services.AddTransient<IResourceOwnerPasswordValidator, ResourceOwnerPasswordValidator>();
            services.Configure<ConfigSettingsBase>(Configuration.GetSection("ConfigSettings"));
            services.AddSingleton<IConfiguration>(Configuration);

            //Add cross-origin resource sharing services Configurations
            Cors.Enable(services);
            services.AddMvc();


        }

        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory, IOptions<ConfigSettingsBase> configSettingsBase)
        {
            loggerFactory.AddConsole(LogLevel.Debug);
            app.UseDeveloperExceptionPage();

            //InitializeDatabase(app, configSettingsBase.Value);

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            loggerFactory.AddFile("Logs/target-sso-server-api-{Date}.log");

            app.UseCors("AllowAnyOrigin");

            app.UseIdentityServer();
            app.UseGoogleAuthentication(new GoogleOptions
            {
                AuthenticationScheme = "Google",
                SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme,
                ClientId = "857854978384-01bbb7uem1vhpq3m05h28bvva0cl8237.apps.googleusercontent.com",
                ClientSecret = "rMrnh6m12iOuxXtb85tiCyAC"
            });
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }

        private void InitializeDatabase(IApplicationBuilder app, ConfigSettingsBase settings)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                serviceScope.ServiceProvider.GetRequiredService<PersistedGrantDbContext>().Database.Migrate();
                var context = serviceScope.ServiceProvider.GetRequiredService<ConfigurationDbContext>();
                context.Database.Migrate();

                foreach (var client in Config.GetClients(settings))
                {
                    if (context.Clients.Where(_=>_.ClientId == client.ClientId).IsNotAny())
                        context.Clients.Add(client.ToEntity());
                }
                context.SaveChanges();
                foreach (var identityResource in Config.GetIdentityResources())
                {
                    if (context.IdentityResources.Where(_ => _.Name == identityResource.Name).IsNotAny())
                        context.IdentityResources.Add(identityResource.ToEntity());
                }
                context.SaveChanges();
                foreach (var apiResource in Config.GetApiResources())
                {
                    if (context.ApiResources.Where(_ => _.Name == apiResource.Name).IsNotAny())
                        context.ApiResources.Add(apiResource.ToEntity());
                }
                context.SaveChanges();
            }
        }


        private X509Certificate2 GetRSAParameters()
        {
            var fileCert = Path.Combine(_env.ContentRootPath, "pfx", "ids4smbasic.pfx");
            if (!File.Exists(fileCert))
                throw new InvalidOperationException("Certificado não encontrado");
            var password = "vm123s456";
            return new X509Certificate2(fileCert, password, X509KeyStorageFlags.Exportable);
        }
    }
}
