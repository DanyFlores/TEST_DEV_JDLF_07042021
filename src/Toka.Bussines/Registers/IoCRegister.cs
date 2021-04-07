using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Toka.Bussines.Contracts.Models.Catalogue;
using Toka.Bussines.Contracts.Models.User;
using Toka.CrossCutting.Contracts;
using Toka.DataAccess.Contracts.Entities.Person;
using Toka.DataAccess.Contracts.Entities.User;
using Toka.DataAccess.Contracts.Repositories.Catalogue.Person;
using Toka.DataAccess.Contracts.Repositories.User;
using Toka.DataAccess.Mappers.Catalogue.Person;
using Toka.DataAccess.Mappers.User;
using Toka.DataAccess.Repositories;
using Toka.DataAccess.Repositories.Catalogue.Person;

namespace Toka.Bussines.Registers
{
    public static class IoCRegister
    {
        public static IServiceCollection AddRegistration(this IServiceCollection services)
        {
            AddRegisterRepositories(services);
            AddRegisterOthers(services);
            return services;
        }

        public static IServiceCollection AddRegisterRepositories(IServiceCollection services)
        {           
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IPhysicalPersonRepository, PhysicalPersonRepository>();

            return services;
        }
        private static IServiceCollection AddRegisterOthers(IServiceCollection services)
        {          
            //Register Mappers          
            services.AddSingleton<IMapper<UserModel, UserEntity>, UserMapper>();
            services.AddSingleton<IMapper<PhysicalPersonModel, PhysicalPersonEntity>, PhysicalPersonMapper>();

            return services;
        }
    }
}
