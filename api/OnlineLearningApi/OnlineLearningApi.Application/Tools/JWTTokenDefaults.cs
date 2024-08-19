using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineLearningApi.Application.Tools
{
    public class JWTTokenDefaults
    {
        public const string ValidAudience = "https://onlinelearningapi20240819150924.azurewebsites.net";
        public const string ValidIssuer = "https://onlinelearningapi20240819150924.azurewebsites.net";
        public const string Key = "Online_Learning-QuranK8m2jD4tP7hBz1VqW3R";
        public const int Expire = 5;
    }
}
