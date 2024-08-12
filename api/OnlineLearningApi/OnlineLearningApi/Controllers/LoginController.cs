using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineLearningApi.Application.Dtos;
using OnlineLearningApi.Application.Mediator.Queries.AppUserQueries;
using OnlineLearningApi.Application.Tools;
using OnlineLearningApi.Persistence.Context;

namespace OnlineLearningApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly AppDbContext _appDbContext;

        public LoginController(IMediator mediator, AppDbContext appDbContext)
        {
            _mediator = mediator;
            _appDbContext = appDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> Index(GetCheckAppUserQuery query)
        {
       

            var values = await _mediator.Send(query);
            if (values.IsExist)
            {
                var tokenResponse = JWTTokenGenerator.GenerateToken(values);
                var response = new LoginResponseDto
                {
                    Token = tokenResponse.Token,
                    ExpireDate = tokenResponse.ExpireDate,
                    Username = values.Username,
                    Name = values.Name,
                    Surname = values.Surname
                };
                return Ok(response);
            }
            else
            {
                return BadRequest("Kullanıcı adı veya şifre hatalıdır");
            }
        }
    }
}
