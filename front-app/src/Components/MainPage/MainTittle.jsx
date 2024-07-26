import LogoText from "../../Assets/noniTitle2.png"

export default function MainTittle() {
    return (
        <div className=" w-[100%] h-svh bg-blue-900 mt-[150px]">
            <div className="flex justify-center h-[700px]">
                <div className="flex flex-col w-[35%] h-[100%] mt-[1%] pt-[1%]">
                    <img src={LogoText} alt="NoniTitle" className="w-[75%] mx-auto" />
                    <p className=" text-white text-[30px] font-Bahnschrift antialiased w-[90%] mx-auto ">
                        Transformamos ideas en experiencias de juego extraodinarios. Como creadores apasionados, diseñamos mundos únicos donde cada detalle importa y la creatividad no tiene límites.
                    </p>
                    <div className=" flex justify-end w-[90%] mx-auto mt-auto mb-[5%]">
                        <div className=" bg-white hover:bg-gray-400 rounded-full w-[40%] h-[75px] flex">
                            <h2 className="m-auto font-semibold font-Bahnschrift text-blue-600 text-[25px] hover:cursor-pointer ">Contactanos</h2>
                        </div>
                    </div>
                </div>

                <div className="flex w-[50%] h-[100%] mt-[1%]">
                    <div className="w-1/2 flex">
                        <img src="" alt="img-1" className=" w-[90%] h-[95%] mx-auto mt-[5%] bg-slate-300" />
                    </div>

                    <div className=" w-1/2 flex">
                        <img src="" alt="img-2" className=" w-[90%] h-[95%] mx-auto mt-[5%] bg-slate-300" />
                    </div>
                </div>
            </div>

            <div className="flex ml-[7.5%]">
                <div className="w-[60px] h-[60px] bg-white rounded-full mr-10">

                </div>

                <div className="w-[60px] h-[60px] bg-white rounded-full">

                </div>

            </div>

        </div>
    )
}