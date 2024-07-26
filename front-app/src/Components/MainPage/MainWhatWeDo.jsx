import { Link } from "react-router-dom";

export default function MWhatWeDo() {
    return (
        <>
            <div className=" bg-blue-900 w-[100%] h-svh flex flex-col">

                <h3 className="text-blue-600 bg-pink-300 font-semibold text-[30px] w-[15%] ml-[300px] text-center mt-[50px] font-Bahnschrift">¿Qué hacemos?</h3>

                <slick className="flex justify-between mt-[30px] w-[70%] mx-auto">
                    <Link to="Producto">
                        <div className="bg-white rounded-3xl w-[350px] h-[600px]"></div>
                    </Link>
                    <Link to="Producto">
                        <div className="bg-white rounded-3xl w-[350px] h-[600px]"></div>
                    </Link>
                    <Link to="Producto">
                        <div className="bg-white rounded-3xl w-[350px] h-[600px]"></div>
                    </Link>
                </slick>

                <div className="bg-white hover:bg-gray-900 hover:cursor-pointer w-[250px] h-[50px] rounded-full ml-[72%] mt-[30px] flex">
                    <div className="bg-pink-300 h-[30px] w-[180px] mx-auto my-auto relative">
                        <div className=" text-blue-600 font-semibold text-center text-[30px] absolute top-[-10px] left-[20px] text-nowrap">Ver más -{">"}</div>
                    </div>
                </div>
            </div>
        </>
    )
}