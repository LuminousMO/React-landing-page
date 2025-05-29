import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoRocket } from "react-icons/io5";
export function Features() {
    return (
        <>
            <section id="about" className=" container mx-auto px-4 pt-16">
                <div className=" text-center mt-10 mb-20">
                    <h1 className="text-3xl md:text-4xl font-medium"> How can we help your business?</h1>
                    <p className="text-gray-700 my-3">When you resell desnik, you build trust and increase</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-300 to-pink-300 text-white">
                            <FaSearch className="text-2xl md:text-3xl" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-medium mt-5">Find out what you need</h1>
                        <p className="text-gray-700 max-w-xs py-3">
                            We present you a proposal and discuss nitty-gritty like.
                        </p>
                    </div>

                    
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-300 to-pink-300 text-white">
                            <IoMdSettings className="text-2xl md:text-3xl" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-medium mt-5">Work out the details</h1>
                        <p className="text-gray-700 max-w-xs py-3">
                            Communication protocols apart from engagement models.
                        </p>
                    </div>

                    
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-300 to-pink-300 text-white">
                            <IoRocket className="text-2xl md:text-3xl" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-medium mt-5">We get to work fast</h1>
                        <p className="text-gray-700 max-w-xs py-3">
                            Once everything is approved, we launch your solution swiftly.
                        </p>
                    </div>
                </div>

                <div className="text-center py-10">
                    <button className=" hover:bg-blue-800 bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">Become a Partner</button>
                </div>

            </section>
        </>
    )
}