using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Account_service_demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        //[Authorize(Roles ="Farmer")]
        [Authorize]
        [HttpGet]
        public async Task<string> Welcome()
        {
            return "success";
        }
    }
}
