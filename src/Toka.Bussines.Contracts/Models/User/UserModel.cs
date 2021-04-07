using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Toka.Bussines.Contracts.Models.User
{
    public class UserModel
    {
        public Guid? IdCuentaUsuario { get; set; }        
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        [Required(ErrorMessage = "Ingrese su Usuario")]
        public string Correo { get; set; }
        [Required(ErrorMessage = "Igrese su Contraseña")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public int IdRol { get; set; }
        public string Rol { get; set; }
        public string Token { get; set; }
    }
}
