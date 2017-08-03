using Microsoft.Extensions.DependencyInjection;
using Target.Pendencias.Data.Repository.Transaction;

namespace Target.Pendencias.Api
{
    public static partial class ConfigContainerTarget
    {

        public static void Config(IServiceCollection services)
        {
            
			services.AddScoped<UsuarioTipoIRepository, UsuarioTipoRepository>();


            RegisterOtherComponents(services);
        }
    }
}
