
const Hadis = () => {
    return (
        <div>
            <div className="rahle flex flex-col justify-center items-center  ">
                <img src="../../images/kuran.png" className="h-28 sm:h-56 opacity-35 " />
                <div className="mt-4 flex flex-col items-center text-center justify-center">
                    <div className="text-3xl sm:text-7xl font-Grey  text-white flex flex-col  justify-center items-center"> <p>
                        "Sizin en hayırlınız <span className="text-green-600">Kur'ân'ı</span> öğrenen ve öğreteninizdir."
                    </p>
                        <strong className="font-DancingScript text-xl sm:text-4xl mt-4 ">
                            (Buhârî, Fezâilü’l-Kur’ân 21)
                        </strong> </div>
                </div>
            </div>
        </div>
    );
};

export default Hadis;