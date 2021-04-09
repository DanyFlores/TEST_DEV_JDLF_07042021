using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Toka.Bussines.Contracts.Models.Catalogue;
using Toka.Bussines.Contracts.Services.Catalogue.Person;

namespace Toka.Api.Controllers.Catalogue
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    //[Authorize]
    public class PhysicalPersonController : ControllerBase
    {
        #region Properties
        private readonly IPhysicalPersonService _personService;
        #endregion

        #region constructor
        public PhysicalPersonController(IPhysicalPersonService personService)
        {
            _personService  = personService;
        }
        #endregion

        #region Methods
        /// <summary>
        /// Mostrar Listado de Personas Fisicas
        /// </summary>
        /// <returns></returns>
        [HttpGet]      
        public async Task<IActionResult> GetAllAsync()
        {
            try
            {
                var list = await _personService.GetAllAsync();
                return Ok(list);
            }
            catch (Exception ex)
            {
                throw ex;
            }
           
        }

        /// <summary>
        /// dar de alta una persona fisica
        /// </summary>
        /// <param name="person"></param>
        /// <returns></returns>
        [HttpPost]
        //[ProducesResponseType(typeof(PhysicalPersonModel),StatusCodes.Status200OK)]
        public async Task<IActionResult> AddAsync([FromBody] PhysicalPersonModel person)
        {
            try
            {
                var result = await _personService.AddAsync(person,1);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            try
            {
                var result = await _personService.GetAsync(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Modificar una persona fisica Pasando el Id y la Data
        /// </summary>
        /// <param name="person"></param>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync([FromBody] PhysicalPersonModel person, int id)
        {
            try
            {
                var result = await _personService.UpdateAsync(person, id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }            
        }

        /// <summary>
        /// Eliminar una persona fisical por el identificador
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            try
            {
                var result = await _personService.DeleteAsync(id, id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion
    }
}
