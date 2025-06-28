import Image from "../../assets/pics.jpg";
import { MdArrowOutward } from "react-icons/md";
const Home = () => {
    return (
        <div className="bg-gray-300 h-[90vh] sm:h-[88.7vh] text-white">
            <div className="flex flex-col sm:flex-row   gap-2 sm:gap-6 align-middle justify-center items-center h-full">
                <div className="flex flex-col gap-1 sm:gap-2 text-center sm:text-left max-w-2xl px-4">
                    <h1 className="text-orange-600 text-3xl sm:text-4xl font-semibold">Hey 👋,</h1>
                    <p className="text-gray-700 text-2xl sm:text-3xl">I'm <strong className="text-red-600">Amit Kumar Mahapatra,</strong></p>
                    <p className="text-gray-700 text-xl sm:text-2xl">
                        <strong className="text-green-600">Web Developer (Front-end developer)</strong> | Problem Solver | Quick Learner
                    </p>
                    <p className="text-gray-700">building the Frontend of Websites and <strong className="text-blue-600">web-applications</strong> that lead to the success of the overall product</p>

                    <button className="bg-orange-500 flex justify-center align-middle px-1 py-2 rounded-md shadow-lg text-black font-semibold hover:bg-orange-400 sm:text-xl transition-all duration-300">Go To Projects <MdArrowOutward className="items-center ml-2 rounded-full  text-2xl sm:text-3xl p-1 border-black border-2"/></button>

                </div>
                <div className="border-2 p-2 rounded-full text-gray-600 shadow-md shadow-gray-600 border-gray-600 sm:mt-0 mt-4 sm:mb-0 mb-4 ">
                    <img src={Image} alt="" className="h-[190px] sm:h-[220px] p-2 rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default Home;
