using MediatR;
using OnlineLearningApi.Application.Enums;
using OnlineLearningApi.Application.Interfaces;
using OnlineLearningApi.Application.Mediator.Commands.AppUserCommands;
using OnlineLearningApi.Domain.Entities;

namespace OnlineLearningApi.Application.Mediator.Handlers.AppUserHandlers
{
    public class CreateAppUserCommandHandler : IRequestHandler<CreateAppUserCommand>
    {
        private readonly IRepository<AppUser> _repository;

        public CreateAppUserCommandHandler(IRepository<AppUser> repository)
        {
            _repository = repository;
        }

        public async Task Handle(CreateAppUserCommand request, CancellationToken cancellationToken)
        {
            await _repository.CreateAsync(new AppUser
            {
                Age = request.Age,
                Email = request.Email,
                Name = request.Name,
                ParentName = request.ParentName,
                ParentPhone = request.ParentPhone,
                Password = request.Password,
                Surname = request.Surname,
                Username = request.Username,
                AppRoleId = (int)RolesType.Member,

            });
        }
    }
}
