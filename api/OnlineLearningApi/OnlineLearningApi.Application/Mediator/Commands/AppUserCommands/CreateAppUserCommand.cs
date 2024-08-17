using MediatR;

namespace OnlineLearningApi.Application.Mediator.Commands.AppUserCommands
{
    public class CreateAppUserCommand:IRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string ParentName { get; set; }
        public string ParentPhone { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
    }
}
