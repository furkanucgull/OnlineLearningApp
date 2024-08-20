using MediatR;
using OnlineLearningApi.Application.Interfaces;
using OnlineLearningApi.Application.Mediator.Commands.AppUserCommands;
using OnlineLearningApi.Domain.Entities;

namespace OnlineLearningApi.Application.Mediator.Handlers.AppUserHandlers
{
    public class UpdateAppUserCommandHandler : IRequestHandler<UpdateAppUserCommand>
    {
        private readonly IRepository<AppUser> _repository;

        public UpdateAppUserCommandHandler(IRepository<AppUser> repository)
        {
            _repository = repository;
        }

        public async Task Handle(UpdateAppUserCommand request, CancellationToken cancellationToken)
        {
            var values = await _repository.GetByIdAsync(request.AppUserId);
            values.Name = request.Name;
            values.Surname = request.Surname;
            values.Email = request.Email;
            values.Password = request.Password;
            values.AppRoleId = request.AppRoleId;
            values.Age = request.Age;
            values.ParentName = request.ParentName;
            values.ParentPhone = request.ParentPhone;
            await _repository.UpdateAsync(values);



        }
    }
}
