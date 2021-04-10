using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Toka.Api.Utilities;
using Toka.Bussines.Contracts.Models.User;
using Toka.Bussines.Contracts.Services.User;

namespace Toka.Api.Controllers.User
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        #region Properties
        private readonly IUserService _userService;
        #endregion

        #region constructor
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        #endregion
        #region Methods
        /// <summary>
        /// Login al sistema
        /// </summary>
        /// <param name="email"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] UserModel model)
        {
            try
            {
                var user = await _userService.GetUserByEmailAndPassword(model.Correo, model.Password, 1);
                if (user != null)
                {
                   user.Token = new JwtUtility().GenerateJSONWebToken(user);
                   user.Password = string.Empty;
                   return Ok(user);
                }
                else
                {
                    var response = new
                    {
                        StatusCode = 403,
                        Message = "Usuario o contraseña no válida."
                    };
                    return StatusCode(403, response);
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
