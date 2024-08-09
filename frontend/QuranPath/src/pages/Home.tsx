import Banner from "../components/Banner";
import Hadis from "../components/Hadis";

const Home = () => {

    return (
        <div className='h-screen flex flex-col items-center  pt-10  bg-cover bg-no-repeat bg-center bg-[url("../../images/quranbg.png")]  p-0 m-0 '>

            <Hadis />
            <Banner />

        </div>

    );
};

export default Home;
