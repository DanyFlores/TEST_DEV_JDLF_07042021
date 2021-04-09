using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Toka.Bussines.Contracts.Models.Catalogue
{
    public class PhysicalPersonModel
    {        
        public int IdPersonaFisica { get; set; }
        //[Required(ErrorMessage = "Ingrese El Nombre")]
        public string Nombre { get; set; }
        //[Required(ErrorMessage = "Ingrese El Apellido Paterno")]
        public string ApellidoPaterno { get; set; }
        //[Required(ErrorMessage = "Ingrese El Apellido Materno")]
        public string ApellidoMaterno { get; set; }
        //[Required(ErrorMessage = "Ingrese su Ingrese su RFC")]
        public string RFC { get; set; }
        //[Required(ErrorMessage = "Ingrese su Fecha de Nacimiento")]
        public DateTime FechaNacimiento { get; set; }
    }
}
