import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE_URL } from "../apiConfig";

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

const calculateAge = (dateOfBirth: string) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [parentName, setParentName] = useState<string>("");
    const [parentPhone, setParentPhone] = useState<string>("");
    //const [username, setUserName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("");
    const [age, setAge] = useState<number | null>(null);

    const handleDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dob = e.target.value;
        setDateOfBirth(dob);
        const calculatedAge = calculateAge(dob);
        setAge(calculatedAge);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            username: "",
            parentName,
            parentPhone,
            password,
            name,
            surname,
            email,
            age,
        };
        try {
            await axios.post(`${API_BASE_URL}/Registers`, payload);
            showToast("Kayıt Başarılı, Giriş Sayfasına Yönlendiriliyorsunuz");
            setTimeout(() => {
                navigate("/login");
            }, 5000);
        } catch (error) {
            toast.warning("Kayıt sırasında bir hata oluştu.");
            console.log("Hata", error);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
            <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Kayıt Formu</h1>
            <form onSubmit={(e) => handleSubmit(e)} className="w-full flex flex-col gap-4">
                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Öğrenci İsim :</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="firstName" name="firstName" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2"> Öğrenci Soyisim :</label>
                    <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" id="lastName" name="lastName" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2"> Veli İsim Soyisim :</label>
                    <input value={parentName} onChange={(e) => setParentName(e.target.value)} type="text" id="lastName" name="lastName" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2"> Veli Tel No :</label>
                    <input value={parentPhone} onChange={(e) => setParentPhone(e.target.value)} type="tel" id="lastName" name="lastName" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Öğrenci Doğum Tarihi :</label>
                    <input type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2"> Öğrenci Email :</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>



                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Şifreniz :</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Kayıt Ol</button>
            </form>

            <div className="mt-4 text-center">
                <span className="text-sm text-gray-500 dark:text-gray-300">Zaten hesabınız var mı? </span>
                <a onClick={() => navigate("/login")} className="text-blue-500 hover:text-blue-600">Giriş Yapın</a>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Register;
