import { ToastContainer } from 'react-toastify';
import Banner from '../components/Banner';
import Hadis from '../components/Hadis';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Home = () => {
    const name = localStorage.getItem("name");
    const surname = localStorage.getItem("surname");
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    return (
        <>
            <div className='h-screen flex flex-col items-center pt-10 bg-cover bg-no-repeat bg-center bg-[url("../../images/quranbg.png")] p-0 m-0'>
                <div>
                    {
                        isLoggedIn &&
                        <p className='text-white font-sans sm:text-4xl '> Hoşgeldin  <span className='font-Raleway sm:text-3xl'> {name} {surname}  </span> </p>
                    }
                </div>
                <Hadis />
                <Banner />
                <ToastContainer />

            </div>
        </>
    );
};

export default Home;
