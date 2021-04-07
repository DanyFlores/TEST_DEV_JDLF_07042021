using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Toka.Api.Authorization
{
    public class PermissionApiJwtAuthorizationHandler : AuthorizationHandler<PermissionApiJwtRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, PermissionApiJwtRequirement requirement)
        {

            var permissionClain = context.User.FindFirst(c => c.Type == "Reglas");

            if (permissionClain != null)
            {
                // If the user has a date of birth claim, check their age
                var permissions = permissionClain.Value.Trim('[', ']').Split(',').Select(x => int.Parse(x.ToString())).ToList();

                // If the user meets the age criterion, mark the authorization requirement succeeded
                if (permissions.Any(x => x == requirement.Permission))
                {
                    context.Succeed(requirement);
                }
            }
            return Task.CompletedTask;
        }
    }
}
