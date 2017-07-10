using Common.Cache;
using Common.Domain.Interfaces;
using Common.Orm;
using Microsoft.Extensions.DependencyInjection;
using Target.Pendencias.Application;
using Target.Pendencias.Application.Interfaces;
using Target.Pendencias.Data.Context;
using Target.Pendencias.Data.Repository;
using Target.Pendencias.Domain.Interfaces.Repository;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Target.Pendencias.Domain.Interfaces.Services;
using Target.Pendencias.Domain.Services;
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
