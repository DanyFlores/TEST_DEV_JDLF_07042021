using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Toka.DataAccess.Contracts.Entities.User;
using Toka.DataAccess.Contracts.Repositories.Base;

namespace Toka.DataAccess.Contracts.Repositories.User
{
    public interface IUserRepository: IBaseRepository<UserEntity>
    {
        Task<UserEntity> LoginAsync(string correo, string password, int rol);
    }
}
