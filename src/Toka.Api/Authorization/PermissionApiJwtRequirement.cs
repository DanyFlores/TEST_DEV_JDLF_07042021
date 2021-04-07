using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Toka.Api.Authorization
{
    public class PermissionApiJwtRequirement: IAuthorizationRequirement
    {
        public PermissionApiJwtRequirement(int permission)
        {
            Permission = permission;
        }
        public int Permission { get; private set; }
    }
}
