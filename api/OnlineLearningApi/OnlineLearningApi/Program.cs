using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using OnlineLearningApi.Application.Interfaces;
using OnlineLearningApi.Application.Tools;
using OnlineLearningApi.Persistence.Context;
using OnlineLearningApi.Persistence.Repositories;
using OnlineLearningApi.Application.Services;
using System.Text;

namespace OnlineLearningApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            //builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(opt =>
            //{
            //    opt.RequireHttpsMetadata = false;
            //    opt.TokenValidationParameters = new TokenValidationParameters
            //    {
            //        ValidAudience = JWTTokenDefaults.ValidAudience,
            //        ValidIssuer = JWTTokenDefaults.ValidIssuer,
            //        ClockSkew = TimeSpan.Zero,
            //        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JWTTokenDefaults.Key)),
            //        ValidateLifetime = true,
            //        ValidateIssuerSigningKey = true,
            //    };
            //});
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
             .AddJwtBearer(opt =>
             {
                 opt.RequireHttpsMetadata = false;
                 opt.TokenValidationParameters = new TokenValidationParameters
                 {
                     ValidAudience = JWTTokenDefaults.ValidAudience,
                     ValidIssuer = JWTTokenDefaults.ValidIssuer,
                     ClockSkew = TimeSpan.Zero,
                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JWTTokenDefaults.Key)),
                     ValidateLifetime = true,
                     ValidateIssuerSigningKey = true,
                 };
             });
            //builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddCookie(JwtBearerDefaults.AuthenticationScheme, opt =>
            //{
            //    opt.LoginPath = "/Login/Index/";
            //    opt.LogoutPath = "/Login/LogOut/";
            //    opt.AccessDeniedPath = "/Pages/AccessDenied/";
            //    opt.Cookie.SameSite = SameSiteMode.Strict;
            //    opt.Cookie.HttpOnly = true;
            //    opt.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
            //    opt.Cookie.Name = "OnlineLearningJWT";
            //});
            //registry
            builder.Services.AddScoped<AppDbContext>();
            builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            // Add services to the container.
            builder.Services.AddApplicationService(builder.Configuration);
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();


            var app = builder.Build();


            //builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors(x => x.AllowAnyMethod().AllowAnyHeader().AllowCredentials().SetIsOriginAllowed(origin => true));
            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
