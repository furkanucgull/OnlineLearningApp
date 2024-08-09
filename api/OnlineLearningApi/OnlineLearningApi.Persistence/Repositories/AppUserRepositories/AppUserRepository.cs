using Microsoft.EntityFrameworkCore;
using OnlineLearningApi.Application.Interfaces.AppUserInterfaces;
using OnlineLearningApi.Domain.Entities;
using OnlineLearningApi.Persistence.Context;
using System.Linq.Expressions;

namespace OnlineLearningApi.Persistence.Repositories.AppUserRepositories
{
    public class AppUserRepository : IAppUserRepository
    {
        private readonly AppDbContext _context;
        public AppUserRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<List<AppUser>> GetByFilterAsync(Expression<Func<AppUser, bool>> filter)
        {
            throw new NotImplementedException();
        }
    }
}
