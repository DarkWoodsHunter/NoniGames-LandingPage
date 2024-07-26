import { Link } from "react-router-dom"
import NoniLogo from "../Assets/NoniLogo.png"

function TopMenuButton(botonName) {
    return (
        <div className=" h-full w-[200px] flex hover:bg-blue-950 hover:cursor-pointer">
            <h1 className="text-center text-white text-xl font-semibold m-auto font-Lilita+One">{botonName.botonName}</h1>
        </div>
    )
}


export default function TopBar() {


    return (
        <>
            <div className=" w-full h-[150px] bg-blue-900 flex justify-between fixed top-0 drop-shadow-lg">
                <Link to="/">
                    <img src={NoniLogo} alt="Noni_log" className=" h-[100px] w-[75px] my-auto mx-[10%] mt-[25px] ml-[200px] hover:cursor-pointer" />
                </Link>
                <div className="flex mr-[50px]">
                    <TopMenuButton botonName="Inicio" />
                    <TopMenuButton botonName="Que hacemos" />
                    <TopMenuButton botonName="Proyectos" />
                    <TopMenuButton botonName="Contactanos" />
                </div>
            </div>
        </>
    )
}