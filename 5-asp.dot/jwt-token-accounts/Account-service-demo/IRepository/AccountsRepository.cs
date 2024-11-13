using Account_service_demo.Data;
using Account_service_demo.Model;
using Account_service_demo.Model.DTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Account_service_demo.IRepository
{
    public class AccountsRepository : IAccountsRepository
    {
        //define the object to interact with the database
        private readonly AccountDBContext _accountDbContext;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;

        public AccountsRepository(AccountDBContext accountDbContext, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _accountDbContext = accountDbContext;
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }

        public async Task<(int, string)> Login(LoginDTO loginDetails)
        {
            var userExist=await _userManager.FindByEmailAsync(loginDetails.Email);
            if (userExist == null)
            {
                return (0, "Invalid Email");
            }
            else 
            {
                var res = await _userManager.CheckPasswordAsync(userExist, loginDetails.Password);
                if (!res)
                {
                    return (0, "Invalid Password");
                }
                else 
                {
                    var authClaims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Email, userExist.Email),
                        new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
                    };

                    var userRoles = await _userManager.GetRolesAsync(userExist);

                    foreach (var role in userRoles)
                    {
                        authClaims.Add(new Claim(ClaimTypes.Role, role));
                    }

                    string token = GenerateToken(authClaims);
                    return (1, token);
                }
            }
        }

        public async Task<(int, string)> Registration(User newUser)
        {
            var userExist=await _userManager.FindByEmailAsync(newUser.Email);
            if (userExist != null)
            {
                return (0, "User already axist");
            }
            else
            {
                ApplicationUser user = new ApplicationUser()
                {
                    Email = newUser.Email,
                    UserName = newUser.UserName,
                    AppUserName = newUser.UserName,
                    SecurityStamp=Guid.NewGuid().ToString(),

                };
                var createdUser= await _userManager.CreateAsync(user,newUser.Password);
                if (!createdUser.Succeeded)
                {
                    return (0, "user creation failed,check username and password properly");
                }
                else
                { 
                    if(!await _roleManager.RoleExistsAsync(newUser.Roles))
                    {
                        await _roleManager.CreateAsync(new IdentityRole(newUser.Roles));
                        
                    }
                    await _userManager.AddToRoleAsync(user, newUser.Roles);
                    _accountDbContext.Users.Add(newUser);
                    await _accountDbContext.SaveChangesAsync();
                    return (1, "user Created successfully");
                }


            }
        }
        //Generate a method to Create a token based on claims
        private string GenerateToken(IEnumerable<Claim> claims) 
        {
            var authSignInKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:secrectKey"]));
            var tokendescriptor = new SecurityTokenDescriptor
            {
                Issuer = _configuration["JWT:validIssuer"],
                Audience = _configuration["JWT:validAudiance"],
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials=new SigningCredentials(authSignInKey,SecurityAlgorithms.HmacSha256),
                Subject=new ClaimsIdentity(claims)
            };
            Console.WriteLine(tokendescriptor);
            var tokenHandler = new JwtSecurityTokenHandler();
            var token=tokenHandler.CreateToken(tokendescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
