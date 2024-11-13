
using Microsoft.EntityFrameworkCore;
using MVC_code_First.Models;

namespace MVC_code_First.DataAccess
{
    public class BookDbContext : DbContext

    {
        public BookDbContext(DbContextOptions<BookDbContext> options) : base(options)

        {

        }
        public DbSet<Book> Books { get; set; }

    }
}
