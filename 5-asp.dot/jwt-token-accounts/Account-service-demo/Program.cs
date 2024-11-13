
using Account_service_demo.Data;
using Account_service_demo.IRepository;
using Account_service_demo.Model;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Account_service_demo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            //add a db Context  
            builder.Services.AddDbContext<AccountDBContext>(
                option=>option.UseSqlServer(
                    builder.Configuration.GetConnectionString("AccountDBConnection")));
            //add a identity db context for application 
            builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<AccountDBContext>()
                .AddDefaultTokenProviders();
            builder.Services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.ReferenceHandler 
                = 
                System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;

                options.JsonSerializerOptions.PropertyNamingPolicy = null;

            });


            // Add services to the container.
            builder.Services.AddScoped<IAccountsRepository, AccountsRepository>();
            builder.Services.AddAuthentication(
                options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

                }).AddJwtBearer(
                options =>
                {
                    options.SaveToken = true;
                    options.RequireHttpsMetadata = false;
                    options.IncludeErrorDetails = true;

                    options.Events = new JwtBearerEvents()
                    {
                        OnMessageReceived = (message) =>
                        {
                            var token = message.Request.Headers.Authorization.ToString();
                            string path = message.Request.Path;

                            return Task.CompletedTask;
                        }
                        ,
                        OnTokenValidated = (msg) =>
                        {
                            return Task.CompletedTask;
                        }
                    };
                    options.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidateAudience = true,
                        ValidateIssuer = true,
                        ValidAudience = builder.Configuration["JWT:validAudiance"],
                        ValidIssuer = builder.Configuration["JWT:validIssuer"],
                        ClockSkew = TimeSpan.Zero,
                        IssuerSigningKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(builder.Configuration["JWT:secrectKey"]))

                    };

                });
       
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthentication();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
