using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineLearningApi.Application.Mediator.Commands.AppUserCommands;
using OnlineLearningApi.Persistence.Context;

namespace OnlineLearningApi.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly IMediator _mediator;

        public UsersController(AppDbContext appDbContext, IMediator mediator)
        {
            _appDbContext = appDbContext;
            _mediator = mediator;
        }



        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var values = _appDbContext.AppUsers.ToList();
            return Ok(values);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _appDbContext.AppUsers.FindAsync(id);
            if (user == null)
            {
                return NotFound(); // 404 Not Found
            }
            return Ok(user);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UpdateAppUserCommand command)
        {
            command.AppUserId = id; 
            await _mediator.Send(command);
            return Ok("Üye Başarıyla güncellendi");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveUser(int id)
        {
            await _mediator.Send(new RemoveAppUserCommand(id));
            return Ok("Üye Başarıyla Silindi");
        }



    }
}
