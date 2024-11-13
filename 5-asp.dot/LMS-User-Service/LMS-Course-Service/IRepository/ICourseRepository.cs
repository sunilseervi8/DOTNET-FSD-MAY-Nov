using LMS_Course_Service.Model;
using Microsoft.AspNetCore.Mvc;

namespace LMS_Course_Service.IRepository
{
    public interface ICourseRepository
    {
        Task<Course> AddCourse( Course course);
        //Task<ActionResult<Course>> AddNewMovies();
        Task<IEnumerable<Course>> GetAllCourse();
        Task<IEnumerable<Course>> UpCommingCourse(DateOnly date);
        //Task<Course> DeleteMovies();
        //Task<Course> GetMovies();
    }
}
