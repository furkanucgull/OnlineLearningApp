import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    return (

        <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
            <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Kayıt Formu</h1>
            <form action="#" className="w-full flex flex-col gap-4">
                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">İsim :</label>
                    <input type="text" id="firstName" name="firstName" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Soyisim :</label>
                    <input type="text" id="lastName" name="lastName" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Cinsiyet :</label>
                    <div className="flex flex-row gap-3 justify-center items-center p-3">
                        <label htmlFor="male" className="flex items-center gap-2">
                            <input type="radio" id="male" name="gender" value="male" />
                            Erkek
                        </label>
                        <label htmlFor="female" className="flex items-center gap-2">
                            <input type="radio" id="female" name="gender" value="female" />
                            Kadın
                        </label>
                    </div>
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Yaşınız :</label>
                    <input type="date" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>



                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email :</label>
                    <input type="email" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Şifreniz :</label>
                    <input type="password" id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Tekrar Şifreniz :</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Kayıt Ol</button>

            </form>

            <div className="mt-4 text-center">
                <span className="text-sm text-gray-500 dark:text-gray-300">Zaten hesabınız var mı? </span>
                <a onClick={() => navigate("/login")} className="text-blue-500 hover:text-blue-600">Giriş Yapın</a>
            </div>

        </div>



    );
};

export default Register;;