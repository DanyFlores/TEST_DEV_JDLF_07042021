using System;
using System.Collections.Generic;
using System.Text;

namespace Toka.CrossCutting.Contracts
{
    public interface IMapper<TModel, TEntity>
    {
        TEntity Map(TModel model);
        TModel Map(TEntity entity);
    }
}
