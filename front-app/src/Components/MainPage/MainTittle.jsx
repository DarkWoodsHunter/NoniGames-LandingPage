import LogoText from "../../Assets/noniTitle2.png"

export default function MainTittle() {
    return (
        <div className=" w-[100%] h-svh bg-blue-900 mt-[150px]">
            <div className="flex justify-center h-[700px]">
                <div className="flex flex-col w-[35%] h-[100%] mt-[1%] pt-[1%]">
                    <img src={LogoText} alt="NoniTitle" className="w-[75%] mx-auto" />
                    <p className=" text-white text-xl font-black w-[90%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className=" flex justify-end w-[90%] mx-auto mt-auto mb-[5%]">
                        <div className=" bg-white hover:bg-gray-400 rounded-full w-[30%] h-[75px] flex">
                            <h2 className="m-auto">Lorem Ipsum</h2>
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