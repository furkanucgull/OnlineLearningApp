using MediatR;
using OnlineLearningApi.Application.Interfaces;
using OnlineLearningApi.Application.Mediator.Commands.AppUserCommands;
using OnlineLearningApi.Domain.Entities;

namespace OnlineLearningApi.Application.Mediator.Handlers.AppUserHandlers
{
    public class RemoveAppUserCommandHandler : IRequestHandler<RemoveAppUserCommand>
    {
        private readonly IRepository<AppUser> _repository;

        public RemoveAppUserCommandHandler(IRepository<AppUser> repository)
        {
            _repository = repository;
        }

        public async Task Handle(RemoveAppUserCommand request, CancellationToken cancellationToken)
        {
            var value =await _repository.GetByIdAsync(request.Id);
            await _repository.RemoveAsync(value);
        }
    }
}
