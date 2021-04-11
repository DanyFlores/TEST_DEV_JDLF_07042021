using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Toka.Bussines.Contracts.Models.User;
using Toka.CrossCutting.Configurations;
using Toka.CrossCutting.Extensions;

namespace Toka.Api.Utilities
{
    public class JwtUtility
    {
        public string GenerateJSONWebToken(UserModel login)
        {
            var builder = new ConfigurationBuilder()
                 .SetBasePath(Directory.GetCurrentDirectory())
                 .AddJsonFile(ProjectConfiguration.JsonFile);
            var configuration = builder.Build();

            var issuer = configuration["Jwt:Issuer"];
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
                new Claim(JwtRegisteredClaimToka.IdCuentaUsuario, login.IdCuentaUsuario.ToString()),
                new Claim(JwtRegisteredClaimToka.IdRol, login.IdRol.ToString()),
                new Claim(JwtRegisteredClaimToka.Nombres, login.Nombres),
                new Claim(JwtRegisteredClaimToka.Correo, login.Correo),
                new Claim(JwtRegisteredClaimToka.Rol, login.Rol),
                new Claim(JwtRegisteredClaimNames.Jti, SQLGuidUtil.NewSequentialId().ToString()),
                new Claim(ClaimTypes.Role, login.Rol)
            };

            var token = new JwtSecurityToken(issuer,
                issuer,
                claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }   
}
