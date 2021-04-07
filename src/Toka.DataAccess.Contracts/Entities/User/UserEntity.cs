using System;
using System.Collections.Generic;
using System.Text;

namespace Toka.DataAccess.Contracts.Entities.User
{
    public class UserEntity
    {
        public Guid? IdCuentaUsuario { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Correo { get; set; }
        public string Password { get; set; }
        public int IdRol { get; set; }
        public string Rol { get; set; }
        public string Token { get; set; }
    }
}
