import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
export function Footer() {
    return (
        <>
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-sm md:px-12 md:py-8 bg-amber-100/20 rounded-lg border-none border-b-1">
                    <div className="max-w-85 px-4 py-2">
                        <div className="flex items-center">
                            <div className="w-4 h-4 rounded-full bg-blue-400 hover:bg-blue-600 cursor-pointer transition-all duration-300"></div>
                            <div className="w-4 h-4 rounded-full -ml-1.5 bg-red-600 hover:bg-red-400 cursor-pointer transition-all duration-300"></div>
                            <h1 className="text-basic font-medium mx-2">The Next Design</h1>
                        </div>

                        <p className="my-3 text-gray-500">The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>

                        <div className=" flex md:justify-start items-center my-2 justify-center">
                            <FaFacebookF className="bg-red-200 text-gray-700 w-8 me-3 h-8 p-2 rounded-full" />
                            <FaTwitter className="bg-red-200 text-gray-700 w-8 me-3 h-8 p-2 rounded-full" />
                            <FaLinkedinIn className="bg-red-200 text-gray-700 w-8 me-3 h-8 p-2 rounded-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4  mx-auto gap-8 ">
                        <div className="text-start">
                            <h1 className="text-base font-medium my-2">Comapany</h1>
                            <div className="space-y-1">
                                <p className="text-gray-600 cursor-pointer ">About</p>
                                <p className="text-gray-600 cursor-pointer ">Terms of Use</p>
                                <p className="text-gray-600 cursor-pointer ">Privacy Policy</p>
                                <p className="text-gray-600 cursor-pointer ">How it Works</p>
                                <p className="text-gray-600 cursor-pointer ">Contact Us</p>
                            </div>
                        </div>
                        <div className="text-start">
                            <h1 className="text-base font-medium my-2">GetHelp</h1>
                            <div className="space-y-1">
                                <p className="text-gray-600 cursor-pointer ">Support Carrer</p>
                                <p className="text-gray-600 cursor-pointer ">24h Service</p>
                                <p className="text-gray-600 cursor-pointer ">Quick Chat</p>
                                <p className="text-gray-600 cursor-pointer">Live Agent</p>
                                <p className="text-gray-600 cursor-pointer">Help Desk</p>
                            </div>
                        </div>
                        <div className="text-start">
                            <h1 className="text-base font-medium my-2">Support</h1>
                            <div className="space-y-1">
                                <p className="text-gray-600 cursor-pointer ">FAQ</p>
                                <p className="text-gray-600 cursor-pointer ">Policy</p>
                                <p className="text-gray-600 cursor-pointer ">Business</p>
                                <p className="text-gray-600 cursor-pointer">Community</p>
                                <p className="text-gray-600 cursor-pointer">Technical Help</p>
                            </div>
                        </div>
                        <div className="text-start">
                            <h1 className="text-base font-medium my-2">Contact</h1>
                            <div className="space-y-1">
                                <p className="text-gray-600 cursor-pointer ">WhatsApp</p>
                                <p className="text-gray-600 cursor-pointer ">SUpport 24</p>
                                <p className="text-gray-600 cursor-pointer">Email</p>
                                <p className="text-gray-600 cursor-pointer">Location</p>
                                <p className="text-gray-600 cursor-pointer">Feedback</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex justify-between my-8">
                    <p className="text-gray-500 text-base font-medium">Copyright &copy; 2025 luminous.com</p>
                    <p className="text-gray-500 text-base font-medium"> Created by Luminous</p>
                </div>
            </section>
        </>
    )
}