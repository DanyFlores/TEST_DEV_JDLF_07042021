using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Toka.Bussines.Contracts.Models.User;
using Toka.Bussines.Contracts.Services.User;
using Toka.CrossCutting.Contracts;
using Toka.DataAccess.Contracts.Entities.User;
using Toka.DataAccess.Contracts.Repositories.User;
using Toka.DataAccess.Mappers.User;

namespace Toka.Bussines.Services.User
{
    public class UserService : IUserService
    {
        #region Properties 
        public IUserRepository _userRepository;
        public IMapper<UserModel, UserEntity> _userMapper;
        #endregion

        #region Constructor
        public UserService(IUserRepository userRepository, IMapper<UserModel, UserEntity> userMapper)
        {
            _userRepository = userRepository;
            _userMapper = userMapper;
        }
        #endregion

        #region Methods
        public async Task<UserModel> GetUserByEmailAndPassword(string correo, string password, int rol)
        {
            try
            {
                var result = await _userRepository.LoginAsync(correo, password, rol);
                if (result == null)
                    return null;
                return _userMapper.Map(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        #region Base Methods

        public Task<UserModel> AddAsync(UserModel element, object IdUsuario)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(object id, object IdUsuario)
        {
            throw new NotImplementedException();
        }

        public Task<bool> ExistAsync(object id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<UserModel>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<UserModel> GetAsync(object id)
        {
            throw new NotImplementedException();
        }
       
        public Task<UserModel> UpdateAsync(UserModel element, object IdUsuario)
        {
            throw new NotImplementedException();
        }
        #endregion
    }
}
