using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Toka.CrossCutting.Configurations;

namespace Toka.DataAccess.Repositories.Base
{
    public class BaseRepository
    {
        private readonly string _ConnectionString;
        protected string ConnectionString
        {
            get { return _ConnectionString; }
        }
        public BaseRepository()
        {
            var builder = new ConfigurationBuilder()
             .SetBasePath(Directory.GetCurrentDirectory())
             .AddJsonFile(ProjectConfiguration.JsonFile);
            var configuration = builder.Build();
            _ConnectionString = configuration["strConnection"];
        }
    }
}
