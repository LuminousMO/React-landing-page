import { FaCircle } from "react-icons/fa6";
export function Purpose() {
    return (
        <>
            <div className=" w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
                <div className="flex flex-col md:flex-row md:justify-around md:items-center container px-4 mx-auto">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:px-11">
                        <div className="">
                            <p className="text-purple-600 text-sm mb-2 font-medium">Achieve More</p>
                            <h2 className="text-3xl font-bold md:w-4/5 w-full md:text-4xl text-gray-800">Purpose of a convoy is to keep your team</h2>
                        </div>

                        <div className="">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 flex items-center justify-start rounded-lg">
                                    <FaCircle className=" text-purple-700" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold text-gray-900 mb-2"> Built for impact</h1>
                                <p className=" text-gray-600">We identity and nature a truly diverse team of designers, developers and marketers.</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 flex items-center justify-start rounded-lg">
                                    <FaCircle className=" text-orange-700" />
                                </div>
                            <div>
                                <h1 className="text-xl font-semibold text-gray-900 mb-2 "> In sync with you</h1>
                            <p className="text-gray-600">We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}