using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;
using Toka.DataAccess.Contracts.Entities.User;
using Toka.DataAccess.Contracts.Repositories.User;
using Toka.DataAccess.Repositories.Base;

namespace Toka.DataAccess.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        #region Methods
        public async Task<UserEntity> LoginAsync(string correo, string password, int rol)
        {
            try
            {
                using (IDbConnection conexion = new SqlConnection(ConnectionString))
                {
                    conexion.Open();                   
                    var dynamicParameters = new DynamicParameters();
                    dynamicParameters.Add("@Correo", correo);
                    dynamicParameters.Add("@Password", password);
                    dynamicParameters.Add("@IdRol", rol);
                    var result = await conexion.QueryFirstOrDefaultAsync<UserEntity>("[dbo].[SPCID_Get_UsuarioByEmailAndPassword]", param: dynamicParameters, commandType: CommandType.StoredProcedure);
                    return result;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion
        #region Base Methods

        public Task<UserEntity> AddAsync(UserEntity element, object IdUsuario)
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

        public Task<IEnumerable<UserEntity>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<UserEntity> GetAsync(object id)
        {
            throw new NotImplementedException();
        }     

        public Task<UserEntity> UpdateAsync(UserEntity element, object IdUsuario)
        {
            throw new NotImplementedException();
        }
        #endregion

    }
}
