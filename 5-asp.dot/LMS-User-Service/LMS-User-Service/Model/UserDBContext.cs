using Microsoft.EntityFrameworkCore;

namespace LMS_User_Service.Model
{
    public class UserDBContext:DbContext
    {
        public UserDBContext(DbContextOptions<UserDBContext> options) : base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }
    }
}
