using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineLearningApi.Application.Mediator.Commands.AppUserCommands;

namespace OnlineLearningApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public RegistersController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateAppUserCommand command)
        {
            await _mediator.Send(command);
            return Ok("Kullanıcı başarıyla oluşturuldu");
        }
    }
}
