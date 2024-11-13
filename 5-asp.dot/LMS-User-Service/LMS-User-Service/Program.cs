
using Consul;
using LMS_User_Service.Model;
using Microsoft.EntityFrameworkCore;

namespace LMS_User_Service
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            //builder.Services.AddSingleton<IHostedService, ConsulRegisterService>();

            var consulHost = builder.Configuration.GetValue<string>(key: "ConsulCOnfiguration:Host");
            builder.Services.AddSingleton<IConsulClient>(_ => new ConsulClient(config =>
            {
                config.Address = new Uri(consulHost);
            }));

            builder.Services.AddDbContext<UserDBContext>(option => option.UseSqlServer
            (builder.Configuration.GetConnectionString("UserDBConnection")));
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
           
           
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder => builder.WithOrigins("http://localhost:5173")
                                      .AllowAnyMethod()
                                      .AllowAnyHeader());
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors("AllowSpecificOrigin");
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
