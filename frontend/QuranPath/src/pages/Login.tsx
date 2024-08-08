import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='w-full min-h-screen bg-black dark:bg-gray-800 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 
            bg-cover bg-no-repeat bg-center
            bg-[url("../../images/login.jpg")]'>
                <div className="w-full sm:max-w-md p-10 mx-auto bg-neutral-300 opacity-90">
                    <h2 className="mb-12 text-center text-4xl font-extrabold">Hoşgeldiniz.</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-1" >Email :</label>
                            <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1" >Şifre</label>
                            <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                                <label className="ml-2 block text-sm leading-5 text-gray-900"> Beni Hatırla! </label>
                            </div>
                            <a href="#" className="text-sm"> Şifrenizi mi unuttunuz? </a>
                        </div>
                        <div className="mt-6">
                            <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Giriş Yap</button>
                        </div>
                        <div className="mt-6 text-center">
                            <a onClick={() => navigate("/register")} className="underline">Üyeliğiniz yoksa üye olmak için tıklayın.</a>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Login;