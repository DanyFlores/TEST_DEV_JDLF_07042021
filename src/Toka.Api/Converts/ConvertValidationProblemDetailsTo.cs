using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Toka.Api.Converts
{
    public static class ConvertValidationProblemDetailsTo
    {
        public static BadRequestObjectResult Convert(ModelStateDictionary ModelState, string Path)
        {
            var problemDetails = new ValidationProblemDetails(ModelState)
            {
                Instance = Path,
                Status = 400,
                Type = "http://www.localhost:3000/",
                Detail = "Revisa los siguiente errores"
            };
            return new BadRequestObjectResult(problemDetails)
            {
                ContentTypes = { "application/problem+json", "application/problem+xml" }
            };
        }
    }
}
