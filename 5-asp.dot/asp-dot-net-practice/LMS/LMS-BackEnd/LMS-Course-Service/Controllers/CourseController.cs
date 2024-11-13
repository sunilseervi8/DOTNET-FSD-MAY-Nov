using LMS_Course_Service.Model;
using LMS_Course_Service.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMS_Course_Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    { 

        private readonly CourseService _courseService;
        public CourseController( CourseService courseService)
        {
            _courseService = courseService;
            
        }
        [HttpGet]
        public async Task<IActionResult> GetCourse()
        {
            var result =await _courseService.GetAllCourse();
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> postCourse(Course course)
        {
           var result= await  _courseService.AddCourse(course);
            return Ok(result);
        }
    }
}
