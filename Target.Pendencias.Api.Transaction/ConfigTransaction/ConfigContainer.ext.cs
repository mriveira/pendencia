using Microsoft.Extensions.DependencyInjection;
using Common.Domain.Model;

namespace Target.Pendencias.Api
{
    public static partial class ConfigContainerTarget 
    {

        public static void RegisterOtherComponents(IServiceCollection services)
        {
			services.AddScoped<CurrentUser>();
        }
    }
}
