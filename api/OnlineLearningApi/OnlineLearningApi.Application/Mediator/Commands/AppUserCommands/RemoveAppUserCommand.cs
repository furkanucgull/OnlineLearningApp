using MediatR;

namespace OnlineLearningApi.Application.Mediator.Commands.AppUserCommands
{
    public class RemoveAppUserCommand : IRequest
    {
        public int Id { get; set; }

        public RemoveAppUserCommand(int id)
        {
            Id = id;
        }
    }
}
