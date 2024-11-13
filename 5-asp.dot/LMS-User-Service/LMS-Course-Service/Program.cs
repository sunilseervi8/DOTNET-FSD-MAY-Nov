
using LMS_Course_Service.DBConfig;
using LMS_Course_Service.Model;
using LMS_Course_Service.Services;

namespace LMS_Course_Service
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.Configure<CourseDBConfig>(builder.Configuration.GetSection("MongoDBConnection"));
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddSingleton<CourseService>();
        ;
            builder.Services.AddCors(options=>
            options.AddDefaultPolicy(builder =>
            {
                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            }));

            //builder.Services.AddCors();

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
           
            app.UseHttpsRedirection();
            app.UseCors();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
