using System;
using System.Collections.Generic;
using System.Text;

namespace Toka.DataAccess.Contracts.Entities.Person
{
    public class PhysicalPersonEntity
    {
        public int IdPersonaFisica { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string RFC { get; set; }
        public DateTime FechaNacimiento { get; set; }
    }
}
