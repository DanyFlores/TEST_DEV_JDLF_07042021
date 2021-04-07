using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Toka.Bussines.Contracts.Models.User;
using Toka.Bussines.Contracts.Services.Base;

namespace Toka.Bussines.Contracts.Services.User
{
    public interface IUserService : IBaseService<UserModel>
    {
        Task<UserModel> GetUserByEmailAndPassword(string correo, string password, int rol);
    }
}
