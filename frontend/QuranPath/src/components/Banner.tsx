import { useNavigate } from "react-router-dom";


const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className=" sm:flex sm:flex-col sm:gap-10 ">

            <div className="mt-10 flex flex-row gap-4 justify-center ">
                <div className="border flex bg-orange-400 text-white rounded-full text-wrap h-26 w-24 text-center  items-center hover:bg-orange-600 duration-200 ">
                    <p className="text-center font-Gupter items-center text-xl">Tamamen ücretsizdir</p>
                </div>
                <div className="border flex bg-orange-400 font-Gupter text-white rounded-full text-wrap h-28 w-28  text-center items-center hover:bg-orange-600 duration-200 justify-center ">
                    <p className="text-center items-center text-xl">İlk Seviye Orta Seviye Tecvid</p>
                </div>
            </div>
            <div className=" flex flex-col gap-4 sm:flex-row mt-6   ">
                <button onClick={() => navigate("/register")} className="bg-transparent text-white text-lg font-bold hover:bg-green-500 duration-500  border p-3 rounded-2xl"> Online Kurslara Kayıt</button>
                <button onClick={() => navigate("/register")} className="bg-transparent text-white text-lg  sm:text-xl font-bold hover:bg-green-500 duration-500  border p-3 rounded-2xl"> Yüzyüze Kurslara Kayıt</button>

            </div>

        </div>
    );
};

export default Banner;