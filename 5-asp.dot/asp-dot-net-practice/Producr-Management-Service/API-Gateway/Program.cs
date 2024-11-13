using Ocelot.DependencyInjection;
using Ocelot.Middleware;

namespace API_Gateway
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();
            builder.Configuration.SetBasePath(builder.Environment.ContentRootPath)
                .AddJsonFile("ProductManagementRoutes.json",optional:false,reloadOnChange:true);
            builder.Services.AddOcelot();
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
           
            app.MapGet("/", () => "Hello World!");
            app.UseOcelot();
            app.Run();
        }
    }
}
