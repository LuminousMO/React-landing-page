import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import Stats from '../assets/stats.webp';

export function Schedule() {
   const leftRef = useRef(null);
    const rightRef = useRef(null);
    
    const isLeftInView = useInView(leftRef, { once: false, amount: 0.5 });
    const isRightInView = useInView(rightRef, { once: false, amount: 0.5 });

    return (
        <section className="container px-4 mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 items-center">

                {/* Left: Image */}
                <motion.div
                    ref={leftRef}
                    initial={{ x: -100, opacity: 0 }}
                    animate={isLeftInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="hover:scale-[1.03] transition-all duration-200 cursor-pointer"
                >
                    <img src={Stats} alt="Schedule-image" />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    ref={rightRef}
                    initial={{ x: 100, opacity: 0 }}
                    animate={isRightInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col justify-center text-start"
                >
                    <p className="text-orange-500 uppercase font-bold text-base my-4 text-start">
                        Schedule
                    </p>

                    <div className="py-3">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Streamline Your Business With Smart Scheduling Solutions
                        </h1>
                    </div>

                    <div className="py-3">
                        <p className="text-gray-700 text-base font-medium">
                            Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.
                        </p>
                    </div>

                    <div className="py-3">
                        <button className="text-blue-600 text-base font-medium cursor-pointer">
                            Explore scheduling features <FaLongArrowAltRight className="inline-block mx-2" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
