using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Account_service_demo.Model
{
    [Table("tbl_accounts")]
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Column("user_name")]

        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string City { get; set; }
        public DateOnly Dob {get; set;}
        public string Roles { get; set; } 
    }
}
