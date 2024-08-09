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

            claims.Add(new Claim(ClaimTypes.NameIdentifier, result.Id.ToString()));
            if (!string.IsNullOrWhiteSpace(result.Username))
                claims.Add(new Claim("Username", result.Username));

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JWTTokenDefaults.Key));
            var sigingCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expireDate = DateTime.UtcNow.AddDays(JWTTokenDefaults.Expire);

            JwtSecurityToken token = new JwtSecurityToken(issuer: JWTTokenDefaults.ValidIssuer, claims: claims, notBefore: DateTime.UtcNow, expires: expireDate, signingCredentials: sigingCredentials);

            JwtSecurityTokenHandler tokenhandler = new JwtSecurityTokenHandler();
            return new TokenResponseDto(tokenhandler.WriteToken(token), expireDate);


        }
    }
}
