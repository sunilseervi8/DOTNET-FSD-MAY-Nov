using LMS_User_Service.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LMS_User_Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserDBContext _context;

        public UserController(UserDBContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (await _context.Users.AnyAsync(u => u.Email == user.Email))
                return BadRequest("Email already exists.");

            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return Ok(new { Message = "User registered successfully" });
        }
        [HttpGet("login")]
        public async Task<IActionResult> Login(string email, string password)
        {
            if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password))
                return BadRequest("Email and password are required.");

            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.Password))
            {
                return BadRequest("Invalid email or password.");
            }

            return Ok(new { Message = "Login successful", UserEmail = user.Email });
        }



    }
}
