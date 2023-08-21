"use client"
import Image from "next/image";
import Logo from "../../public/Logo.png"
import { SlArrowLeft } from "react-icons/sl";

const Header = () => {
    return (
        <div className="bg-red-800 flex font-serif justify-between">
            <div className="flex justify-start">
                <Image className="w-16 pl-3 pr-2 py-1" src={Logo} alt="Logo" />
                <span className="text-white text-2xl flex items-center">Bulacan State University</span>
            </div>
            <div className="flex text-white text-2xl items-center justify-end">
                <div className="h-full flex">
                    <SlArrowLeft size={50} />
                    <SlArrowLeft size={50} />
                </div>
                <span>Login</span>
                <div className="h-full flex">
                    <SlArrowLeft size={50} />
                    <SlArrowLeft size={50} />
                </div>

                <span>Register</span>
            </div>
        </div>
    );
}

export default Header;