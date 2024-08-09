using Microsoft.EntityFrameworkCore;
using OnlineLearningApi.Domain.Entities;

namespace OnlineLearningApi.Persistence.Context
{
    public class AppDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.;Initial Catalog=OnlineLearning;Integrated Security=true;TrustServerCertificate=true;");
        }
        public DbSet<AppUser> AppUsers { get; set; }
        public DbSet<AppRole> AppRoles { get; set; }
    }
}
