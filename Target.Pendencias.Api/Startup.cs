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
using Swashbuckle.AspNetCore.Swagger;
using Microsoft.Extensions.PlatformAbstractions;
using System.IO;

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
            services.AddMvc(options => { options.ModelBinderProviders.Insert(0, new DateTimePtBrModelBinderProvider()); });
            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.Converters.Add(new DateTimePtBrConverter());
            });

            // Configurando o serviço de documentação do Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1",
                    new Info
                    {
                        Title = "Target Pendencias",
                        Version = "v1",
                        Description = "API Target Pendencias",
                        Contact = new Contact
                        {
                            Name = "Wilson Santos",
                            Url = "http://targetsoftware.com.br"
                        },

                    });

                var caminhoAplicacao = PlatformServices.Default.Application.ApplicationBasePath;
                var nomeAplicacao = PlatformServices.Default.Application.ApplicationName;
                var caminhoXmlDoc = Path.Combine(caminhoAplicacao, $"{nomeAplicacao}.xml");

                c.IncludeXmlComments(caminhoXmlDoc);


                //c.AddSecurityDefinition("oauth2", new OAuth2Scheme
                //{
                //    Type = "oauth2",
                //    Flow = "implicit",
                //    AuthorizationUrl = "http://localhost:4000/connect/authorize",
                //    Scopes = new Dictionary<string, string>
                //    {
                //        { "ssosa", "ssosa" },
                //    }
                //});
                //c.OperationFilter<SecurityRequirementsOperationFilter>();


                c.AddSecurityDefinition("Bearer", new ApiKeyScheme()
                {
                    Description = "JWT Authorization header using the Bearer scheme. Example: \"Bearer {token}\"",
                    Name = "Authorization",
                    In = "header",
                    Type = "apiKey"
                });

            });



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IOptions<ConfigSettingsBase> configSettingsBase)
        {

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseDeveloperExceptionPage();

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            loggerFactory.AddFile("Logs/target-server-api-{Date}.log");


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

            //Ativando middlewares para uso do Swagger

           app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Target Pendencias");
                //c.ConfigureOAuth2("swagger-ui", "swagger-ui-secret", "swagger-ui-realm", "Swagger UI");
            });

            app.UseCors("AllowAnyOrigin");
            AutoMapperConfigTarget.RegisterMappings();
        }

    }
}
