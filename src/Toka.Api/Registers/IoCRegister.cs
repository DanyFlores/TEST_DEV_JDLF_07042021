using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Toka.Api.DataAnnotationsValidators;
using Toka.Bussines.Contracts.Services.Catalogue.Person;
using Toka.Bussines.Contracts.Services.User;
using Toka.Bussines.Services.Catalogue.Person;
using Toka.Bussines.Services.User;

namespace Toka.Api.Registers
{
    public static class IoCRegister
    {
        public static IServiceCollection AddRegistration(this IServiceCollection services)
        {
            AddRegisterServices(services);
            AddRegisterOthers(services);
            Bussines.Registers.IoCRegister.AddRegistration(services);
            return services;
        }

        private static IServiceCollection AddRegisterServices(IServiceCollection services)
        {
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IPhysicalPersonService, PhysicalPersonService>();

            return services;
        }

        private static IServiceCollection AddRegisterOthers(IServiceCollection services)
        {
            services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();
            services.AddTransient<IDataAnnotationsValidator, DataAnnotationsValidator>();
            return services;
        }
    }
}
