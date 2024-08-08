
const Home = () => {

    return (
        <div className='h-screen flex flex-col items-center pt-10  bg-no-repeat bg-center bg-[url("../../images/kuranbg.jpg")]  p-0 m-0 '>

            <div>
                <div className="rahle flex flex-col justify-center items-center  ">
                    <img src="../../images/kuran.png" className="sm:h-48   " />
                    <div className="mt-4">
                        <p className="text-3xl text-white font-serif flex flex-col items-center"> "Sizin en hayırlınız Kur'ân'ı öğrenen ve öğreteninizdir."
                            <strong>
                                (Buhârî, Fezâilü’l-Kur’ân 21)
                            </strong> </p>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex flex-row gap-4 ">
                <div className="border flex bg-orange-400 text-white rounded-full text-wrap h-24 w-24 text-center items-center hover:bg-orange-600 duration-200 ">
                    <p className="text-center items-center">Tamamen ücretsizdir</p>
                </div>
                <div className="border flex bg-orange-400 text-white rounded-full text-wrap h-24 w-24 text-center items-center hover:bg-orange-600 duration-200 ">
                    <p className="text-center items-center">İlk Seviye Orta Seviye Tecvid</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
