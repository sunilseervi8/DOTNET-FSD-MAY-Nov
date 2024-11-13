using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Account_service_demo.Model
{
    public class ApplicationUser:IdentityUser
    {
        [MaxLength(20)]
        public string AppUserName {  get; set; }
    }
}
