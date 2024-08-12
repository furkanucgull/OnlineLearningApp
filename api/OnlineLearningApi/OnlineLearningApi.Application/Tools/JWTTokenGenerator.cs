using Microsoft.IdentityModel.Tokens;
using OnlineLearningApi.Application.Dtos;
using OnlineLearningApi.Application.Mediator.Results.AppUserResults;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace OnlineLearningApi.Application.Tools
{
    public class JWTTokenGenerator
    {
        public static TokenResponseDto GenerateToken(GetCheckAppUserQueryResult result)
        {
            var claims = new List<Claim>();

            if (!string.IsNullOrWhiteSpace(result.Role))
                claims.Add(new Claim(ClaimTypes.Role, result.Role));

            if (!string.IsNullOrWhiteSpace(result.Id.ToString()))
                claims.Add(new Claim(ClaimTypes.NameIdentifier, result.Id.ToString()));

            if (!string.IsNullOrWhiteSpace(result.Username))
                claims.Add(new Claim("Username", result.Username));

            if (!string.IsNullOrWhiteSpace(result.Name))
                claims.Add(new Claim("Name", result.Name));

            if (!string.IsNullOrWhiteSpace(result.Surname))
                claims.Add(new Claim("Surname", result.Surname));

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JWTTokenDefaults.Key));
            var signingCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expireDate = DateTime.UtcNow.AddDays(JWTTokenDefaults.Expire);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: JWTTokenDefaults.ValidIssuer,
                claims: claims,
                notBefore: DateTime.UtcNow,
                expires: expireDate,
                signingCredentials: signingCredentials
            );

            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            return new TokenResponseDto(tokenHandler.WriteToken(token), expireDate);


        }
    }
}
