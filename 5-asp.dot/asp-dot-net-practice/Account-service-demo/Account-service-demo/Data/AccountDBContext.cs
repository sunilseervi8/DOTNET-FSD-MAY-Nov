using Account_service_demo.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Account_service_demo.Data
{
    public class AccountDBContext : IdentityDbContext<ApplicationUser>
    {
        public AccountDBContext(DbContextOptions<AccountDBContext> options) : base(options)
        {

        }
        public DbSet<User> Users {  get; set; }
    }
}
