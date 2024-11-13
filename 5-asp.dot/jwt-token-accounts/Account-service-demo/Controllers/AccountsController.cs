using Account_service_demo.IRepository;
using Account_service_demo.Model;
using Account_service_demo.Model.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Account_service_demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly IAccountsRepository _accountsRepository;
        public AccountsController(IAccountsRepository accountRepository)
        {
            _accountsRepository = accountRepository;
            
        }
        [HttpPost("register")]
        public async Task<IActionResult> Registration(User user)
        {
            var result= await _accountsRepository.Registration(user);
            if (result.Item1 == 1)
            {
                return Ok(result.Item2);
            }
            else if(result.Item1 == 0) {
            
                    return Ok(result.Item2);
            }
             else 
             {
                    return BadRequest();

              }
        }
        [HttpPost]
        public async Task<IActionResult> Login(LoginDTO loginDetails) 
        { 
            var res= await _accountsRepository.Login(loginDetails);
            if (res.Item1 == 0)
            {
                return Ok(res.Item2);
            }
            else if (res.Item1 == 1)
            {
                return Ok(res.Item2);
            }
            else { 
                return BadRequest();        
            }
        }
    }

}
