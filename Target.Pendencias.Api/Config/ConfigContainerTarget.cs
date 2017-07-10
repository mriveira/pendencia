using Common.Cache;
using Common.Domain.Interfaces;
using Common.Orm;
using Microsoft.Extensions.DependencyInjection;
using Target.Pendencias.Application;
using Target.Pendencias.Application.Interfaces;
using Target.Pendencias.Data.Context;
using Target.Pendencias.Data.Repository;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Domain.Interfaces.Services;
using Target.Pendencias.Domain.Services;

namespace Target.Pendencias.Api
{
    public static partial class ConfigContainerTarget
    {

        public static void Config(IServiceCollection services)
        {
            services.AddScoped<ICache, RedisComponent>();
            services.AddScoped<IUnitOfWork, UnitOfWork<DbContextTarget>>();
            
			services.AddScoped<IFluxoTrabalhoStatusApplicationService, FluxoTrabalhoStatusApplicationService>();
			services.AddScoped<IFluxoTrabalhoStatusService, FluxoTrabalhoStatusService>();
			services.AddScoped<IFluxoTrabalhoStatusRepository, FluxoTrabalhoStatusRepository>();



            RegisterOtherComponents(services);
        }
    }
}
