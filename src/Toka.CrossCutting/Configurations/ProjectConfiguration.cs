using System;
using System.Collections.Generic;
using System.Text;

namespace Toka.CrossCutting.Configurations
{
    public static class ProjectConfiguration
    {

#if DEBUG
        /// <summary>
        /// Selección del archivo json, dependiendo del tipo de entorno.
        /// </summary>
        public const string JsonFile = "appsettings.Development.json";
#else
	    public const string JsonFile = "appsettings.Production.json";
#endif
        /// <summary>
        /// Url base donde estará la api
        /// </summary>

        public const string BaseUrlService = "http://test.registromorant.com.mx/ApiGestiones";
        //public const string BaseUrlService = "https://localhost:3062/";
        //////public const string BaseUrlService = "https://localhost:44352/";


        /// <summary>
        /// Id del sistema el cual estará en la bd dentro de la tabla: Usuario.Sistemas
        /// </summary>
        public const int SistemaId = 3;

        /// <summary>
        /// Id del administrador el cual estará en la bd dentro de la tabla: Usuario.Perfil
        /// </summary>
        public const int PerfilAdminId = 1;

        public static DateTime HoraFechaSistema
        {
            get
            {
                var info = TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time");
                var localServerTime = DateTimeOffset.Now;
                var localTime = TimeZoneInfo.ConvertTime(localServerTime, info);
                return localTime.DateTime;
            }
        }
    }
}

