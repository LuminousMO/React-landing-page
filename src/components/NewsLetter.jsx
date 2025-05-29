import { FaLongArrowAltRight } from "react-icons/fa";
export function NewsLetter() {
    return (
        <section className="container mx-auto px-4 lg:px-8 xl:px-16 py-8">
            <div className="bg-blue-600 rounded-2xl overflow-hidden">
                <div className="relative z-10 px-6 lg:px-20 py-10 md:py-20">
                    {/* gradient bg */}
                    <div className="absolute top-0 xl:right-110 w-full h-full bg-blue-700 clip-path-slant hidden md:block"></div>

                    {/* content */}
                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        {/* left content */}
                        <div className="text-white max-w-lg text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
                                Subscribe newsletter
                            </h2>
                            <p className="text-white text-opacity-80 text-sm sm:text-base">
                                Best cooks and best delivery guys all at your service. Hot tasty food
                            </p>
                        </div>

                        {/* right content */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
                            />
                            <button className="flex justify-center items-center w-full sm:w-auto cursor-pointer hover:bg-green-700 transition-all duration-300 bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl lg:flex">
                                <span>Discover </span><span className="mx-2 mt-1"><FaLongArrowAltRight /></span>
                               
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {
                    `.clip-path-slant {
                    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
}`
                }
            </style>
        </section>
    );

}