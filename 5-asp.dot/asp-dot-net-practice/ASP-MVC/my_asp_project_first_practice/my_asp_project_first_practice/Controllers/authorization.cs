using Microsoft.AspNetCore.Mvc;

namespace my_asp_project_first_practice.Controllers
{
    public class authorization : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
