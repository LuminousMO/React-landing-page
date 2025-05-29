import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import MonitorImage from '../assets/monitor.webp';

export function MonitorSection() {
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    const isLeftInView = useInView(leftRef, { once: false, amount: 0.4 });
    const isRightInView = useInView(rightRef, { once: false, amount: 0.4 });

    return (
        <section className="container px-4 mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 items-center">
                
                {/* Left Content - Text */}
                <motion.div
                    ref={leftRef}
                    initial={{ x: -100, opacity: 0 }}
                    animate={isLeftInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col justify-center text-start order-2 md:order-1"
                >
                    <p className="text-green-500 uppercase font-bold text-base my-4 text-start">
                        Monitor
                    </p>

                    <div className="py-3">
                        <h1 className="text-3xl md:text-4xl md:w-xl font-bold">
                            Introducing best mobile carousels, Fast, fluid, and <br /> user-friendly.
                        </h1>
                    </div>

                    <div className="py-3">
                        <p className="text-gray-700 text-base font-medium">
                            Discover the power of modern mobile carousels that deliver a seamless browsing experience. Whether you're showcasing products, highlighting features, or guiding users through a story, our solution ensures smooth transitions, responsive design, and optimized performance across all devices.
                        </p>
                    </div>

                    <div className="py-3">
                        <button className="text-blue-600 text-base font-medium cursor-pointer">
                            Explore scheduling features <FaLongArrowAltRight className="inline-block mx-2" />
                        </button>
                    </div>
                </motion.div>

                {/* Right Content - Image */}
                <motion.div
                    ref={rightRef}
                    initial={{ x: 100, opacity: 0 }}
                    animate={isRightInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="hover:scale-[1.03] transition-all duration-200 cursor-pointer flex justify-center order-1 md:order-2"
                >
                    <img src={MonitorImage} alt="Schedule-image" />
                </motion.div>
            </div>
        </section>
    );
}
