using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Toka.Bussines.Contracts.Models.Catalogue;
using Toka.Bussines.Contracts.Services.Catalogue.Person;
using Toka.CrossCutting.Contracts;
using Toka.DataAccess.Contracts.Entities.Person;
using Toka.DataAccess.Contracts.Repositories.Catalogue.Person;

namespace Toka.Bussines.Services.Catalogue.Person
{
    public class PhysicalPersonService : IPhysicalPersonService
    {
        #region Properties 
        public IPhysicalPersonRepository _personRepository;
        public IMapper<PhysicalPersonModel, PhysicalPersonEntity> _personMapper;
        #endregion

        #region Constructor
        public PhysicalPersonService(IPhysicalPersonRepository personRepository, IMapper<PhysicalPersonModel, PhysicalPersonEntity> personMapper)
        {
            _personRepository = personRepository;
            _personMapper = personMapper;
        }
        #endregion

        #region Base Methods

        public async Task<PhysicalPersonModel> AddAsync(PhysicalPersonModel element, object IdUsuario)
        {
            try
            {
                var result = await _personRepository.AddAsync(_personMapper.Map(element), IdUsuario);
                return _personMapper.Map(result);
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
                var result = await _personRepository.DeleteAsync(id, IdUsuario);
                return result;
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

        public async Task<IEnumerable<PhysicalPersonModel>> GetAllAsync()
        {
            var result = await _personRepository.GetAllAsync();
            return result.Select(x => _personMapper.Map(x)).ToList();
        }

        public async Task<PhysicalPersonModel> GetAsync(object id)
        {
            var result = await _personRepository.GetAsync(id);
            return _personMapper.Map(result);
        }

        public async Task<PhysicalPersonModel> UpdateAsync(PhysicalPersonModel element, object IdUsuario)
        {
            try
            {
                var personEntity = _personMapper.Map(element);
                var result = await _personRepository.UpdateAsync(personEntity, IdUsuario);
                return _personMapper.Map(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion
    }
}
