using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineLearningApi.Application.Mediator.Queries.AppUserQueries;
using OnlineLearningApi.Application.Tools;

namespace OnlineLearningApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IMediator _mediator;

        public LoginController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpPost]
        public async Task<IActionResult> Index(GetCheckAppUserQuery query)
        {
          var values = await _mediator.Send(query);
            if (values.IsExist)
            {
                return Created("", JWTTokenGenerator.GenerateToken(values));
            }
            else
            {
                return BadRequest("Kullanıcı adı veya şifre hatalıdır");
            }
        }
    }
}
