import Image from "../../assets/pics.jpg";
import { FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { useState } from "react";
const About = () => {
    const [selected, setSelected] = useState(null);

    const educationDetails = {
        tenth: "Passed 10th from Modern Public School with 75% in 2019.",
        twelfth: "Passed 12th from Newtonian Higher Secondary School with 81% in 2021.",
        btech: "B.Tech in Computer Science from Srinix College, CGPA: 7.71.",
    };

    const items = [
        { key: "tenth", label: "10th" },
        { key: "twelfth", label: "12th" },
        { key: "btech", label: "B.Tech" },
    ];
    return (
        <div className="bg-gray-300 min-h-screen text-black">
            <div className="flex  flex-col gap-4 align-middle justify-center item-center mx-auto px-4 max-w-4xl  ">
                <h1 className="text-center mt-6 text-2xl sm:text-3xl font-semibold">About Me</h1>
                <div className="flex flex-col sm:flex-row gap-4 align-middle justify-center items-center h-full">
                    <div className="flex flex-col gap-2 text-center sm:text-left max-w-2xl px-4">
                        <p className="text-gray-800 text-lg sm:text-xl">
                            Hello! I'm <strong className="text-blue-600">Amit Kumar Mahapatra</strong>, a passionate <strong className="text-orange-600"> web developer</strong> with a focus on <strong className="text-red-600">front-end technologies</strong>. I love creating modern and user-friendly web applications that provide seamless experiences. My journey in web development has been driven by a desire to solve problems and continuously learn new skills.
                        </p>
                        <p className="text-gray-800 text-lg sm:text-[19px]">
                            I specialize in <strong className="text-yellow-600">HTML, CSS, and JavaScript</strong>, and I'm always eager to explore new frameworks and libraries to enhance my projects. Whether it's building <strong className="text-green-600">responsive designs or optimizing performance</strong>, I strive to deliver high-quality code and innovative solutions.
                        </p>
                        <p className="text-gray-800 text-[16px] sm:text-[18px]">
                            In addition to my <strong className="text-pink-600">technical skills,</strong> I believe in the power of collaboration and communication. I enjoy working with teams to bring ideas to life and contribute to projects that make a difference. Let's connect and create something amazing together!
                        </p>
                    </div>
                    <div className="border-2 p-3 rounded-full shadow-lg border-gray-400 mb-9 " >
                        <img src={Image} alt="" className="p-1 rounded-full sm:h-[220px] sm:w-[1024px] h-[190px] " />
                    </div>
                </div>



                <div className="flex flex-col gap-2 align-middle justify-center items-center h-full mb-6">
                    <h1 className="font-semibold sm:text-3xl text-2xl ">Skills</h1>
                    <div className="flex flex-col sm:flex-row gap-5 mt-5 " >
                        <div className="flex flex-col gap-3">
                            <h1 className="sm:text-xl text-[16px] text-gray-800">Languages</h1>
                            <div className="flex gap-3 sm:border-r-2 sm:pr-3 border-gray-800">
                                <p className="text-sm text-orange-500 font-semibold"><FaHtml5 className="text-orange-600 text-[20px] sm:text-4xl " />Html</p>
                                <p className="text-sm text-blue-500 font-semibold">
                                    <FaCss3 className="text-blue-600 text-[20px] sm:text-4xl" />Css</p>
                                <p className="text-sm text-yellow-500 font-semibold">
                                    <IoLogoJavascript className="text-yellow-500 text-[20px] sm:text-4xl" />Js
                                </p>
                            </div>


                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-[16px] sm:text-xl text-gray-800">FrameWork</h1>
                            <div className="flex gap-3">
                                <p className="text-sm text-violet-500 font-semibold"><FaBootstrap className="text-violet-600 text-[20px] sm:text-4xl" />Bs</p>
                                <p className="text-sm text-blue-500 font-semibold">
                                    <BiLogoTailwindCss className="text-blue-600 text-[22px] sm:text-4xl" />Tcss</p>
                                <p className="text-sm text-blue-400  font-semibold">
                                    <FaReact className="text-blue-300  font-semibold text-[20px] sm:text-4xl" />React
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 max-w-xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4">Education</h1>

                    <div className=" flex  sm:flex-row flex-col  justify-center  align-middle items-center gap-3 h-[120px]space-y-3">
                        {items.map((item) => (
                            <div
                                key={item.key}
                                className="border rounded-lg p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition"
                                onClick={() =>
                                    setSelected(selected === item.key ? null : item.key)
                                }
                            >
                                <h2 className="text-lg font-semibold">{item.label}</h2>
                                {selected === item.key && (
                                    <p className="mt-2 text-gray-700">
                                        {educationDetails[item.key]}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
