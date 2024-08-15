import { toast, ToastContainer } from 'react-toastify';

const ToastContent = ({ message }: { message: string; }) => (
    <div className="flex items-center bg-green-500 text-white p-3 rounded-lg shadow-md">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h1m-1-4h.01m-6.93 12A9.986 9.986 0 0112 3a9.986 9.986 0 017.93 4.55A9.986 9.986 0 0121 12a9.986 9.986 0 01-1.07 4.45A9.986 9.986 0 0112 21a9.986 9.986 0 01-6.93-2.45z" />
        </svg>
        <span>{message}</span>
    </div>
);
export const showToast = (message: string) => {
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



const Toast = () => {
    return (
        <div>
            <ToastContainer />
        </div>
    );
};

export default Toast;