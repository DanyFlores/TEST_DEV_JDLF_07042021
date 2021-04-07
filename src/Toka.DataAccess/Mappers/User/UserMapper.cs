using System;
using System.Collections.Generic;
using System.Text;
using Toka.Bussines.Contracts.Models.User;
using Toka.CrossCutting.Contracts;
using Toka.DataAccess.Contracts.Entities.User;

namespace Toka.DataAccess.Mappers.User
{
    public class UserMapper : IMapper<UserModel, UserEntity>
    {
        public UserEntity Map(UserModel model)
        {
            return new UserEntity
            {
                IdCuentaUsuario = model.IdCuentaUsuario,
                Nombres = model.Nombres,
                Apellidos = model.Apellidos,
                Correo = model.Correo,
                Password = model.Password,
                IdRol = model.IdRol,
                Rol = model.Rol,
                Token = model.Token
            };
        }

        public UserModel Map(UserEntity entity)
        {
            return new UserModel
            {
                IdCuentaUsuario = entity.IdCuentaUsuario,
                Nombres = entity.Nombres,
                Apellidos = entity.Apellidos,
                Correo = entity.Correo,
                Password = entity.Password,
                IdRol = entity.IdRol,
                Rol = entity.Rol,
                Token = entity.Token
            };
        }
    }
}
