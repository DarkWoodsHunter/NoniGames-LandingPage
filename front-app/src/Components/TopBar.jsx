

function TopMenuButton(botonName) {
        return (
            <div className=" h-full w-[200px] flex hover:bg-blue-950">
                <h1 className="text-center text-white text-xl font-semibold m-auto">{botonName.botonName}</h1>
            </div>
        )
    }


export default function TopBar() {

    
    return (
        <>
            <div className=" w-full h-[150px] bg-blue-900 flex justify-between fixed top-0 drop-shadow-lg">

                <img  alt="Noni_log" className="bg-white h-[100px] w-[100px] my-auto mx-[10%]" />

                <div className="flex">
                    <TopMenuButton botonName="HOME"/>
                    <TopMenuButton botonName="WHAT WE DO"/>
                    <TopMenuButton botonName="PROYECTS"/>
                    <TopMenuButton botonName="CONTACT"/>
                    <TopMenuButton botonName="STUDIOS"/>
                </div>
            </div>
        </>
    )
}