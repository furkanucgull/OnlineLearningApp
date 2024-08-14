import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLogin, setEmail, setPassword } from "../redux/slices/AuthSlice";
import { AppDispatch, RootState } from "../redux/store";


const ToastContent = ({ message }: { message: string; }) => (
    <div className="flex items-center bg-blue-500 text-white p-3 rounded-lg shadow-md">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h1m-1-4h.01m-6.93 12A9.986 9.986 0 0112 3a9.986 9.986 0 017.93 4.55A9.986 9.986 0 0121 12a9.986 9.986 0 01-1.07 4.45A9.986 9.986 0 0112 21a9.986 9.986 0 01-6.93-2.45z" />
        </svg>
        <span>{message}</span>
    </div>
);

const showToast = (message: string, type: 'success' | 'error') => {
    const toastOptions: ToastOptions = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    if (type === 'success') {
        toast.success(<ToastContent message={message} />, toastOptions);
    } else {
        toast.error(<ToastContent message={message} />, toastOptions);
    }
};

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const email = useSelector((state: RootState) => state.auth.email);
    const password = useSelector((state: RootState) => state.auth.password);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            dispatch(getLogin({ email, password }));
            showToast("Giriş Başarılı! Anasayfaya yönlendiriliyorsunuz.", 'success');

            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            showToast("Giriş hatası! Lütfen bilgilerinizi kontrol edin.", 'error');
            console.log("Hata", error);
        }
    };

    return (
        <div>
            <div className='w-full min-h-screen bg-black dark:bg-gray-800 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 
                sm:bg-cover bg-no-repeat bg-center 
                bg-[url("../../images/login.jpg")]'>
                <div className="w-full sm:max-w-md p-10 mx-auto bg-neutral-300 opacity-90">

                    <h2 className="mb-12 text-center text-4xl font-extrabold">Hoşgeldiniz.</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1">E-Mail :</label>
                            <input
                                value={email}
                                onChange={(e) => dispatch(setEmail(e.target.value))}
                                id="username"
                                type="text"
                                name="email"
                                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Şifre</label>
                            <input
                                value={password}
                                onChange={(e) => dispatch(setPassword(e.target.value))}
                                id="password"
                                type="password"
                                name="password"
                                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                            />
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    type="checkbox"
                                    className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                                />
                                <label className="ml-2 block text-sm leading-5 text-gray-900"> Beni Hatırla! </label>
                            </div>
                            <a href="#" className="text-sm"> Şifrenizi mi unuttunuz? </a>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                            >
                                Giriş Yap
                            </button>
                        </div>
                        <div className="mt-6 text-center">
                            <a onClick={() => navigate("/register")} className="underline cursor-pointer">Üyeliğiniz yoksa üye olmak için tıklayın.</a>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
