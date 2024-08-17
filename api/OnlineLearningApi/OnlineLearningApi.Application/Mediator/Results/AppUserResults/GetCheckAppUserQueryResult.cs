namespace OnlineLearningApi.Application.Mediator.Results.AppUserResults
{
    public class GetCheckAppUserQueryResult
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string ParentName { get; set; }
        public string ParentPhone { get; set; }
        public string Surname { get; set; }
        public string Role { get; set; }
        public bool IsExist { get; set; }
    }
}
