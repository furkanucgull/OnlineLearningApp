import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE_URL } from "../apiConfig";
import { showToast } from '../components/Toast';
import { useFormik } from 'formik';
import { RegisterFormSchema } from '../schemas/RegisterFormSchemas';

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

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            parentName: "",
            parentPhone: "",
            dateOfBirth: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: RegisterFormSchema,
        onSubmit: async (values) => {
            const age = calculateAge(values.dateOfBirth);
            const payload = {
                username: "",
                parentName: values.parentName,
                parentPhone: values.parentPhone,
                password: values.password,
                confirmPassword: values.confirmPassword,
                name: values.name,
                surname: values.surname,
                email: values.email,
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
        },
    });

    return (
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
            <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Kayıt Formu</h1>
            <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-4">
                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Öğrenci İsim :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {formik.touched.name && formik.errors.name ? <div className="text-red-500 text-sm">{formik.errors.name}</div> : null}
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2"> Öğrenci Soyisim :</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {formik.touched.surname && formik.errors.surname ? <div className="text-red-500 text-sm">{formik.errors.surname}</div> : null}
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2"> Veli İsim Soyisim :</label>
                    <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formik.values.parentName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {formik.touched.parentName && formik.errors.parentName ? <div className="text-red-500 text-sm">{formik.errors.parentName}</div> : null}
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2"> Veli Tel No :</label>
                    <input
                        type="tel"
                        id="parentPhone"
                        name="parentPhone"
                        value={formik.values.parentPhone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {formik.touched.parentPhone && formik.errors.parentPhone ? <div className="text-red-500 text-sm">{formik.errors.parentPhone}</div> : null}
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Öğrenci Doğum Tarihi :</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formik.values.dateOfBirth}
                        onChange={(e) => {
                            formik.handleChange(e);
                            const dob = e.target.value;
                            const calculatedAge = calculateAge(dob);
                            formik.setFieldValue("dateOfBirth", dob);
                            formik.setFieldValue("age", calculatedAge);
                        }}
                        onBlur={formik.handleBlur}
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <div className="text-red-500 text-sm">{formik.errors.dateOfBirth}</div> : null}
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Öğrenci Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-sm">{formik.errors.email}</div> : null}
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Şifreniz :</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {formik.touched.password && formik.errors.password ? <div className="text-red-500 text-sm">{formik.errors.password}</div> : null}
                </div>
                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Tekrar Şifreniz :</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div> : null}
                </div>

                <button
                    type="submit"
                    className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Kayıt Ol
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;