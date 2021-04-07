using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Toka.Api.Converts;

namespace Toka.Api.Filters
{
    public sealed class ModelStateCheckFilter: IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context) { }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            if ((context.ActionDescriptor as ControllerActionDescriptor).MethodInfo.GetCustomAttributes(inherit: true).Any(a => a.GetType().Equals(typeof(SkipModelStateCheckFilter))))
                return;
            else
            {
                foreach (var model in context.ActionArguments)
                {
                    if (model.Value != null)
                    {
                        var validator = new DataAnnotationsValidators.DataAnnotationsValidator(context.HttpContext.RequestServices);
                        var results = new List<ValidationResult>();
                        if (!validator.TryValidateObjectRecursive(model.Value, results))
                        {
                            foreach (var result in results)
                            {
                                foreach (var memberNameError in result.MemberNames)
                                {
                                    context.ModelState.AddModelError(memberNameError, result.ErrorMessage);
                                }
                                //context.ModelState.AddModelError(result.MemberNames.FirstOrDefault(), result.ErrorMessage);
                            }
                        }
                    }
                }
            }

            if (!context.ModelState.IsValid)
                context.Result = ConvertValidationProblemDetailsTo.Convert(context.ModelState, context.HttpContext.Request.Path);
        }
    }
}
