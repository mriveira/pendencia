using Common.API;
using Common.Domain.Base;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Target.Pendencias.Application.Config;
using Target.Pendencias.Data.Context;
using System.Globalization;
using Microsoft.AspNetCore.Localization;
using Common.API.Extensions;
using System.Collections.Generic;

namespace Target.Pendencias.Api
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DbContextTarget>(
             options => options.UseSqlServer(
                 Configuration
                    .GetSection("EFCoreConnStrings:Target").Value));

            services.AddDistributedRedisCache(options =>
            {
                options.Configuration = Configuration.GetSection("RedisConnStrings:Target").Value;
                options.InstanceName = "Target";
            });

            services.Configure<ConfigSettingsBase>(Configuration.GetSection("ConfigSettings"));
            services.AddSingleton<IConfiguration>(Configuration);

            // Add cross-origin resource sharing services Configurations
            Cors.Enable(services);

            // Add application services.
            ConfigContainerTarget.Config(services);			

            // Add framework services.
            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.Converters.Add(new DateTimePtBrConverter());
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IOptions<ConfigSettingsBase> configSettingsBase)
        {

	    loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseDeveloperExceptionPage();


            app.UseIdentityServerAuthentication(new IdentityServerAuthenticationOptions
            {
                Authority = configSettingsBase.Value.AuthorityEndPoint,
                AllowedScopes = new List<string> { "ssosa" },
                RequireHttpsMetadata = false
            });

            var supportedCultures = new[]
            {
                new CultureInfo("pt-BR"),
            };

            app.UseRequestLocalization(new RequestLocalizationOptions
            {
                DefaultRequestCulture = new RequestCulture("pt-BR"),
                // Formatting numbers, dates, etc.
                SupportedCultures = supportedCultures,
                // UI strings that we have localized.
                SupportedUICultures = supportedCultures
            });

            app.AddTokenMiddleware();
            app.UseMvc();
	    app.UseCors("AllowAnyOrigin");
            AutoMapperConfigTarget.RegisterMappings();
        }

    }
}
