using MediatR;
using OnlineLearningApi.Application.Interfaces;
using OnlineLearningApi.Application.Interfaces.AppUserInterfaces;
using OnlineLearningApi.Application.Mediator.Queries.AppUserQueries;
using OnlineLearningApi.Application.Mediator.Results.AppUserResults;
using OnlineLearningApi.Domain.Entities;

namespace OnlineLearningApi.Application.Mediator.Handlers.AppUserHandlers
{
    public class GetCheckAppUserQueryHandler : IRequestHandler<GetCheckAppUserQuery, GetCheckAppUserQueryResult>
    {
        private readonly IRepository<AppUser> _appUserRepository;
        private readonly IRepository<AppRole> _appRoleRepository;

        public GetCheckAppUserQueryHandler(IRepository<AppUser> appUserRepository, IRepository<AppRole> appRoleRepository)
        {
            _appUserRepository = appUserRepository;
            _appRoleRepository = appRoleRepository;
        }

        public async Task<GetCheckAppUserQueryResult> Handle(GetCheckAppUserQuery request, CancellationToken cancellationToken)
        {
            var values = new GetCheckAppUserQueryResult();
            var user = await _appUserRepository.GetByFilterAsync(x => x.Email == request.Email && x.Password == request.Password);
            if (user == null)
            {
                values.IsExist = false;
            }
            else
            {
                values.IsExist = true;
                values.Username = user.Username;
                values.Surname = user.Surname;
                values.ParentPhone = user.ParentPhone;
                values.ParentName = user.ParentName;
                values.Email = user.Email;
                values.Name = user.Name;
                values.Role = (await _appRoleRepository.GetByFilterAsync(x => x.AppRoleId == user.AppRoleId))?.AppRoleName;
                values.Id = user.AppUserId;
            }
            return values;
        }
    }
}
