import { IoStar } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import HeroImage from '../assets/hero-image.png';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    // Separate refs for left and right sections
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    // useInView with once: false, amount: 0.5 means animation triggers when half visible, every time
    const isLeftInView = useInView(leftRef, { once: false, amount: 0.5 });
    const isRightInView = useInView(rightRef, { once: false, amount: 0.5 });

    return (
        <section id="home" className="container mx-auto pt-26 flex flex-col md:flex-row justify-between items-center pb-6 px-4 sm:px-6 lg:px-15">
            {/* Left section (text content) */}
            <motion.div
                ref={leftRef}
                initial={{ x: -140, opacity: 0 }}
                animate={isLeftInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="md:w-1/2 w-full space-y-6"
            >
                <div className="flex items-center bg-gray-50 rounded-full w-fit border border-gray-100 py-2 px-3 hover:bg-gray-200 transition-colors duration-300 cursor-pointer group">
                    <span className="mx-2 text-blue-500 group-hover:text-blue-600">
                        <IoStar />
                    </span>
                    <span className="mx-2 text-md font-medium">Jump start your growth</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold space-y-4">
                    <span className="inline-block">We boost the growth for </span>
                    <span className="text-blue-500 relative inline-block">
                        Startup to Fortune 500
                        <span className="absolute bottom-[-13px] left-0 w-full h-0.5 inline-block bg-blue-200/70"></span>
                    </span>
                    <span className="inline-block"> Companies </span>
                    <span className="inline-block animate-pulse text-4xl md:text-5xl lg:text-6xl">⏰</span>
                </h1>

                <p className="text-gray-600 text-lg md:text-xl max-w-xl">
                    Get the most accurate leads, sales people training and conversions, tools and more – all within the same one billing.
                </p>

                <div className="flex items-center gap-3">
                    <input
                        className="px-3 py-4 border border-gray-200 rounded-lg w-sm focus:outline-blue-400"
                        type="text"
                        placeholder="Email Address"
                    />
                    <button
                        className="bg-blue-500 px-6 py-5 rounded-lg text-white/80 active:text-white hover:bg-blue-700 transition-all duration-200"
                        type="button"
                    >
                        <FaLongArrowAltRight />
                    </button>
                </div>
            </motion.div>

            {/* Right section (image) */}
            <motion.div
                ref={rightRef}
                initial={{ x: 140, opacity: 0 }}
                animate={isRightInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="md:w-1/2 w-full mt-8 md:mt-10 md:pl-16 flex justify-center md:justify-start"
            >
                <img
                    src={HeroImage}
                    alt="hero"
                    className="w-full max-w-sm md:max-w-full object-contain"
                />
            </motion.div>
        </section>
    );
}
