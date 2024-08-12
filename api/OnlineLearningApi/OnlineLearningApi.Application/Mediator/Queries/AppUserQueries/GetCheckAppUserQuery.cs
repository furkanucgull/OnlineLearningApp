using MediatR;
using OnlineLearningApi.Application.Mediator.Results.AppUserResults;

namespace OnlineLearningApi.Application.Mediator.Queries.AppUserQueries
{
    public class GetCheckAppUserQuery :IRequest<GetCheckAppUserQueryResult>
    {
        public string Email { get; set; }
        public string Password { get; set; }
        //public string Name { get; set; }
        //public string Surname { get; set; }
    }
}
