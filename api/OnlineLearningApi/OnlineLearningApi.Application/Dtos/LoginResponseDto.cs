namespace OnlineLearningApi.Application.Dtos
{
    public class LoginResponseDto
    {
        public string Token { get; set; }
        public DateTime ExpireDate { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Surname { get; set; }
    }
}
