using MediatR;

namespace OnlineLearningApi.Application.Mediator.Commands.AppUserCommands
{
    public class UpdateAppUserCommand : IRequest
    {
        public int AppUserId { get; set; }
        public string? Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string ParentName { get; set; }
        public string ParentPhone { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public int AppRoleId { get; set; }
        public int Age { get; set; }
    }
}
