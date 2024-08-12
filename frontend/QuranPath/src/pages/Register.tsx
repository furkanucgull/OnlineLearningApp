import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContent = ({ message }: { message: string; }) => (
    <div className="flex items-center bg-blue-500 text-white p-3 rounded-lg shadow-md">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h1m-1-4h.01m-6.93 12A9.986 9.986 0 0112 3a9.986 9.986 0 017.93 4.55A9.986 9.986 0 0121 12a9.986 9.986 0 01-1.07 4.45A9.986 9.986 0 0112 21a9.986 9.986 0 01-6.93-2.45z" />
        </svg>
        <span>{message}</span>
    </div>
);
const showToast = (message: string) => {
    toast(<ToastContent message={message} />, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [username, setuserName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [gender, setGender] = useState("");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            username: username,
            password: password,
            name: name,
            surname: surname,
            age: 1,
            email: email,
        };
        try {
            await axios.post('https://localhost:7083/api/Registers', payload);
            showToast("Kayıt Başarılı Giriş Sayfasına Yönlendiriliyorsunuz ");
            setInterval(() => {

                navigate("/login");
            }, 5000);
        } catch (error) {
            toast.warning("hata");
            console.log("hata", error);
        }
    };

    return (

        <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
            <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Kayıt Formu</h1>
            <form onSubmit={(e) => handleSubmit(e)} className="w-full flex flex-col gap-4">
                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">İsim :</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="firstName" name="firstName" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Soyisim :</label>
                    <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" id="lastName" name="lastName" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
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
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Kullanıcı Adı :</label>
                    <input value={username} onChange={(e) => setuserName(e.target.value)} type="text" id="username" name="username" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Şifreniz :</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                {/* <div className="flex items-start flex-col justify-start">
                        <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Tekrar Şifreniz :</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div> */}

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