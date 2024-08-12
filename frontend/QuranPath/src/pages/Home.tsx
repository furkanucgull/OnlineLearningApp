import { jwtDecode } from 'jwt-decode';
import Banner from '../components/Banner';
import Hadis from '../components/Hadis';
interface CustomJwtPayload {

    Name?: string;
    Surname?: string;
    Username?: string;

}
const Home = () => {
    const userToken: string | null = localStorage.getItem('token');
    const data: CustomJwtPayload = jwtDecode<CustomJwtPayload>(userToken);
    const name = data.Name;
    const surName = data.Surname;


    return (
        <div className='h-screen flex flex-col items-center pt-10 bg-cover bg-no-repeat bg-center bg-[url("../../images/quranbg.png")] p-0 m-0'>
            <h3 className='text-white'> hoşgeldiniz {name} {surName}</h3>
            <Hadis />
            <Banner />
        </div>
    );
};

export default Home;
