using OnlineLearningApi.Domain.Entities;
using System.Linq.Expressions;

namespace OnlineLearningApi.Application.Interfaces.AppUserInterfaces
{
    public interface IAppUserRepository
    {
        Task<List<AppUser>> GetByFilterAsync(Expression<Func<AppUser, bool>> filter);
    }
}
