namespace OnlineLearningApi.Domain.Entities
{
    public class AppUser
    {
        public int AppUserId { get; set; }
        public string? Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string ParentName { get; set; }
        public string ParentPhone { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public int Age { get; set; }
        public int AppRoleId { get; set; }
        public AppRole AppRole { get; set; }
    }
}
