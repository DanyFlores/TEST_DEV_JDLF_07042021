using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;
using Toka.DataAccess.Contracts.Entities.Person;
using Toka.DataAccess.Contracts.Repositories.Catalogue.Person;
using Toka.DataAccess.Repositories.Base;

namespace Toka.DataAccess.Repositories.Catalogue.Person
{
    public class PhysicalPersonRepository : BaseRepository, IPhysicalPersonRepository
    {
        #region Base Methods

        public async Task<PhysicalPersonEntity> AddAsync(PhysicalPersonEntity element, object IdUsuario)
        {
            try
            {
                using (SqlConnection conexion = new SqlConnection(ConnectionString))
                {
                    conexion.Open();
                    using (SqlTransaction tran = conexion.BeginTransaction(IsolationLevel.ReadUncommitted))
                    {
                        try
                        {
                            var dynamicParameters = new DynamicParameters();
                            dynamicParameters.Add("@Nombre", element.Nombre);
                            dynamicParameters.Add("@ApellidoPaterno", element.ApellidoPaterno);
                            dynamicParameters.Add("@ApellidoMaterno", element.ApellidoMaterno);
                            dynamicParameters.Add("@RFC", element.RFC);
                            dynamicParameters.Add("@FechaNacimiento", element.FechaNacimiento);
                            dynamicParameters.Add("@UsuarioAgrega", IdUsuario);

                            await conexion.ExecuteAsync("[dbo].[sp_AgregarPersonaFisica]", param: dynamicParameters, transaction: tran, commandType: CommandType.StoredProcedure);
                            tran.Commit();
                            return element;
                        }
                        catch (Exception ex)
                        {
                            tran.Rollback();
                            throw ex;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<int> DeleteAsync(object id, object IdUsuario)
        {
            try
            {
                using (SqlConnection conexion = new SqlConnection(ConnectionString))
                {
                    conexion.Open();
                    using (SqlTransaction tran = conexion.BeginTransaction(IsolationLevel.ReadUncommitted))
                    {
                        try
                        {
                            var dynamicParameters = new DynamicParameters();
                            dynamicParameters.Add("@IdPersonaFisica", id);
                            var result = await conexion.ExecuteAsync("[dbo].[sp_EliminarPersonaFisica]", param: dynamicParameters, transaction: tran, commandType: CommandType.StoredProcedure);
                            tran.Commit();
                            return result;
                        }
                        catch (Exception ex)
                        {
                            tran.Rollback();
                            throw ex;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Task<bool> ExistAsync(object id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<PhysicalPersonEntity>> GetAllAsync()
        {
            try
            {
                using (IDbConnection conexion = new SqlConnection(ConnectionString))
                {
                    conexion.Open();
                    var data = await conexion.QueryAsync<PhysicalPersonEntity>("[dbo].[SPCID_GetAll_Person]", param: null, commandType: CommandType.StoredProcedure);
                    return data;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<PhysicalPersonEntity> GetAsync(object id)
        {
            try
            {
                using (IDbConnection conexion = new SqlConnection(ConnectionString))
                {
                    conexion.Open();                 
                    var dynamicParameters = new DynamicParameters();
                    dynamicParameters.Add("@IdPersonaFisica", id);
                    var result = await conexion.QuerySingleOrDefaultAsync<PhysicalPersonEntity>("[dbo].[SPCID_GetById_Person]", param: dynamicParameters, commandType: CommandType.StoredProcedure);                    
                    return result;                     
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<PhysicalPersonEntity> UpdateAsync(PhysicalPersonEntity element, object IdUsuario)
        {
            try
            {
                using (SqlConnection conexion = new SqlConnection(ConnectionString))
                {
                    conexion.Open();

                    using (SqlTransaction tran = conexion.BeginTransaction(IsolationLevel.ReadUncommitted))
                    {
                        try
                        {
                            var dynamicParameters = new DynamicParameters();
                            dynamicParameters.Add("@IdPersonaFisica", IdUsuario);
                            dynamicParameters.Add("@Nombre", element.Nombre);
                            dynamicParameters.Add("@ApellidoPaterno", element.ApellidoPaterno);
                            dynamicParameters.Add("@ApellidoMaterno", element.ApellidoMaterno);
                            dynamicParameters.Add("@RFC", element.RFC);
                            dynamicParameters.Add("@FechaNacimiento", element.FechaNacimiento);
                            dynamicParameters.Add("@UsuarioAgrega", 1);
                            var result = await conexion.ExecuteAsync("[dbo].[sp_ActualizarPersonaFisica]", param: dynamicParameters, transaction: tran, commandType: CommandType.StoredProcedure);                            
                            tran.Commit();
                            return element;
                        }
                        catch (Exception ex)
                        {
                            tran.Rollback();
                            throw ex;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion
    }
}
