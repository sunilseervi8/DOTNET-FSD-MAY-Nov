using LMS_Course_Service.DBConfig;
using LMS_Course_Service.IRepository;
using LMS_Course_Service.Model;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LMS_Course_Service.Services
{
    public class CourseService : ICourseRepository
    {
        private readonly IMongoCollection<Course> _courses;
        public CourseService(IOptions<CourseDBConfig> courseConfig)
        {
            var MongoClient=new MongoClient(courseConfig.Value.ServerURL);
            var MongoDB = MongoClient.GetDatabase(courseConfig.Value.Database);
            //get all course from the databaser
            _courses = MongoDB.GetCollection<Course>(courseConfig.Value.Collection);
            
        }
        public async Task<Course> AddCourse(Course course)
        {
            await _courses.InsertOneAsync(course);
            return course; // Return the inserted course
        }

        public async  Task<IEnumerable<Course>> GetAllCourse()
        {
            var courses = await _courses.Find(_ => true).ToListAsync();
            return courses;
        }

        public Task<IEnumerable<Course>> UpCommingCourse(DateOnly date)
        {
            throw new NotImplementedException();
        }
    }
}
