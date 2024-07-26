import tempImg from "../../Assets/tempImg.png"

export default function MainTitle() {
    return (
        <>
            <div className=" mt-[150px]">
                <div className="flex">
                    <div className="w-[50%] h-[800px]">

                        <div className="mt-[25px]">
                            <h1 className="text-[175px] text-center text-blue-600 font-bold">Proyecto</h1>
                        </div>

                        <div className="w-[72%] mx-auto">
                            <p className="text-[33px] font-Bahnschrift">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea odit placeat aut temporibus explicabo eius perspiciatis, dolor, quis maiores eligendi molestiae adipisci! Alias quae a ipsam, atque reiciendis blanditiis quam!</p>
                        </div>

                    </div>

                    <div className="w-[50%]">
                        <img src={tempImg} alt="alt" className="mx-auto mt-[200px] w-[500px] h-[500px]"/>

                    </div>

                </div>
            </div>
        </>
    )
}