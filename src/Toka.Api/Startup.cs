using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerUI;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Toka.Api.Authorization;
using Toka.Api.Filters;
using Toka.Api.Registers;
using Toka.CrossCutting.Converts;

namespace Toka.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            IoCRegister.AddRegistration(services);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"])),
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidIssuer = Configuration["Jwt:Issuer"],
                    ValidAudience = Configuration["Jwt:Issuer"],
                    ClockSkew = TimeSpan.Zero
                };
            });
            services.AddMvcCore()
               .AddAuthorization()
               .AddApiExplorer()
                .AddMvcOptions(option =>
                {
                    option.EnableEndpointRouting = false;
                    option.Filters.Add(new ModelStateCheckFilter());
                })
               .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
               .AddJsonOptions(options =>
               {
                   options.JsonSerializerOptions.IgnoreNullValues = true;
                   options.JsonSerializerOptions.Converters.Add(new TimeSpanToStringConverter());
               });

            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:3000")
                                      .AllowAnyHeader()
                                      .AllowAnyMethod();
                                      //.WithMethods("POST","PUT", "DELETE", "GET");
                                  });
            });

            services.AddSingleton<IAuthorizationPolicyProvider, PermissionApiJwtPolicyProvider>();
            services.AddSingleton<IAuthorizationHandler, PermissionApiJwtAuthorizationHandler>();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Toka API", Version = "V1" });

                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\"",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement()
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Scheme = "oauth2",
                            Name = "Bearer",
                            In = ParameterLocation.Header,
                        },
                        new List<string>()
                    }
                });

                ////Obtenemos el directorio actual
                //var basePath = AppContext.BaseDirectory;
                ////Obtenemos el nombre de la dll por medio de reflexión
                //var assemblyName = System.Reflection.Assembly.GetEntryAssembly().GetName().Name;
                ////Al nombre del assembly le agregamos la extensión xml
                //var fileName = System.IO.Path.GetFileName(assemblyName + ".xml");
                ////Agregamos el Path, es importante utilizar el comando
                //// Path.Combine ya que entre windows y linux son diferentes las rutas de los archivos
                //// En windows es por ejemplo c:/Uusuarios con / 
                //// y en linux es \usr con \
                //var xmlPath = Path.Combine(basePath, fileName);
                //c.IncludeXmlComments(xmlPath);
            });
            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.SuppressModelStateInvalidFilter = true; // This is the setting
                options.SuppressConsumesConstraintForFormFileParameters = true;
                options.SuppressInferBindingSourcesForParameters = true;
                options.SuppressModelStateInvalidFilter = true;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseAuthentication();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(MyAllowSpecificOrigins);
            app.UseHttpsRedirection();
           
            app.UseAuthorization();
            app.UseMvc();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
#if DEBUG
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Toka API");
#else

#endif
                c.DocExpansion(DocExpansion.None);
            });
        }
    }
}
