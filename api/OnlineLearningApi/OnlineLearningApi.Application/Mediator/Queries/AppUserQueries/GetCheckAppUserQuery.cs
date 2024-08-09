using MediatR;
using OnlineLearningApi.Application.Mediator.Results.AppUserResults;

namespace OnlineLearningApi.Application.Mediator.Queries.AppUserQueries
{
    public class GetCheckAppUserQuery :IRequest<GetCheckAppUserQueryResult>
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
