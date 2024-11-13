using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using Ocelot.Provider.Consul;

namespace LMS_API_Gateways
{
    public class Program
    {
        public static async Task Main(string[] args) // Changed void to Task
        {
            var builder = WebApplication.CreateBuilder(args);

            var config = builder.Configuration.GetSection("Routes").GetChildren();
            if (!config.Any())
            {
                Console.WriteLine("Configuration not loaded properly.");
            }

            builder.Configuration.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);
            builder.Services.AddOcelot();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddCors(options =>       
            {
                options.AddPolicy("AllowAllOrigins", builder =>
                {
                    builder.AllowAnyOrigin() 
                           .AllowAnyMethod() 
                           .AllowAnyHeader(); 
                });
            });

                var app = builder.Build();
            //builder.Services.AddControllers();
           
            app.UseCors();
            await app.UseOcelot();
            app.Run();
        }
    }
}
