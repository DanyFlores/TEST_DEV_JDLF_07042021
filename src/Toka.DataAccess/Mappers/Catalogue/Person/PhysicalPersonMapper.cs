using System;
using System.Collections.Generic;
using System.Text;
using Toka.Bussines.Contracts.Models.Catalogue;
using Toka.CrossCutting.Contracts;
using Toka.DataAccess.Contracts.Entities.Person;

namespace Toka.DataAccess.Mappers.Catalogue.Person
{
    public class PhysicalPersonMapper : IMapper<PhysicalPersonModel, PhysicalPersonEntity>
    {
        public PhysicalPersonEntity Map(PhysicalPersonModel model)
        {
            return new PhysicalPersonEntity
            {
                IdPersonaFisica = model.IdPersonaFisica,
                Nombre = model.Nombre,
                ApellidoPaterno = model.ApellidoPaterno,
                ApellidoMaterno = model.ApellidoMaterno,
                RFC = model.RFC,
                FechaNacimiento = model.FechaNacimiento
            };
        }

        public PhysicalPersonModel Map(PhysicalPersonEntity entity)
        {
            return new PhysicalPersonModel
            {
                IdPersonaFisica = entity.IdPersonaFisica,
                Nombre = entity.Nombre,
                ApellidoPaterno = entity.ApellidoPaterno,
                ApellidoMaterno = entity.ApellidoMaterno,
                RFC = entity.RFC,
                FechaNacimiento = entity.FechaNacimiento
            };
        }
    }
}
