export default function MainContact() {
    return (
        <>
            <div className="w-[100%] h-svh bg-slate-900">
                <div className="flex w-[80%] h-[80%] mx-auto justify-center">
                    <div className=" h-[80px] my-auto mr-[40px] bg-pink-300">
                        <span className="text-blue-600 font-Bahnschrift text-[50px]">Escribinos</span>
                    </div>

                    <div className="flex flex-col h-[75%] my-auto">
                        <div className="flex">
                            <input className="rounded-full pl-[10px] w-[300px] h-[60px]" placeholder="Nombre"></input>
                            <input className="rounded-full pl-[10px] w-[300px] ml-[10px]" placeholder="Apellido"></input>
                        </div>
                        <input className="rounded-full pl-[10px] mt-[10px] w-[610px] h-[60px]" placeholder="Asunto"></input>
                        <textarea className="rounded-xl pl-[10px] mt-[10px] h-[300px] pt-3 px-2" placeholder="Mensaje"></textarea>
                        <div className="rounded-full pl-[30px] mt-[20px] w-[200px] h-[60px] bg-white hover:bg-slate-600 hover:cursor-pointer">
                            <span className="text-blue-600 font-Bahnschrift text-[45px] hover:cursor-pointer">Enviar</span>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}