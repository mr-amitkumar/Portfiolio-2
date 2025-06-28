import {Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp} from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-gray-800 h-[35vh] sm:h-[20vh] ">
            <div className="flex flex-row  gap-6 align-middle justify-between items-center max-w-4xl mx-auto px-4 h-full">
                <div className="flex flex-col gap-3">
                    <nav>
                        <h1 className="text-white sm:text-[20px] text-[15px] ">Important Links!</h1>
                        <ul className="flex flex-col sm:flex-row sm:gap-2 gap-1 text-white font-semibold cursor-pointer sm:text-xl text-[17px] ml-6">
                            <li className="hover:text-gray-400 transition-all duration-300"><Link to="/">Home</Link></li>
                            <li className="hover:text-gray-400 transition-all duration-300"><Link to="/about">About</Link></li>
                            <li className="hover:text-gray-400 transition-all duration-300"><a href="">Project</a></li>
                            <li className="hover:text-gray-400 transition-all duration-300"><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-white sm:text-[20px] text-[15px] ">Social Links</h1>
                    <ul className="flex sm:flex-row flex-col gap-4 text-white font-semibold cursor-pointer sm:text-[18px] text-[15px] ml-6">
                        <li className="hover:text-blue-400 transition-all duration-300"><a href=""><FaLinkedin className="text-[20px]" /><p className="sm:block hidden text-[16px]">LinkedIn</p></a></li>
                        <li className="hover:text-orange-400 transition-all duration-300"><a href=""><FaInstagram className="text-[20px]" /><p className="sm:block hidden text-[16px]">Instagram</p></a></li>
                        <li className="hover:text-gray-400 transition-all duration-300"><a href=""><FaGithub className="text-[20px]" /><p className="sm:block hidden text-[16px]">GitHub</p></a></li>
                        <li className="hover:text-green-400 transition-all duration-300"><a href=""><FaWhatsapp className="text-[20px]" /><p className="sm:block hidden text-[16px]">WhatsApp</p></a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-center text-gray-300 text-sm">© 2025 All rights reserved.</p>
                    <p className="text-center text-gray-300 text-sm"> made by <strong className="text-yellow-400">Amit Kumar Mahapatra</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
