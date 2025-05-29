import { FaLayerGroup, FaRegClock } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbBulbFilled } from "react-icons/tb";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export function SupportSection() {
    const leftRef = useRef(null);
    const leftTopRef = useRef(null);
    const rightTopRef = useRef(null);
    const leftBottomRef = useRef(null);
    const rightBottomRef = useRef(null);

    const isLeftInView = useInView(leftRef, { once: false, amount: 0.5 });
    const isLeftTopInView = useInView(leftTopRef, { once: false, amount: 0.5 });
    const isRightTopInView = useInView(rightTopRef, { once: false, amount: 0.5 });
    const isLeftBottomInView = useInView(leftBottomRef, { once: false, amount: 0.5 });
    const isRightBottomInView = useInView(rightBottomRef, { once: false, amount: 0.5 });
    return (
        <>
            <section id="service" className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <motion.div
                        ref={leftRef}
                        initial={{ x: -140, opacity: 0 }}
                        animate={isLeftInView ? { x: 0, opacity: 1 } : { x: -100 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="flex justify-center flex-col md:text-start my-3">
                        <h1 className="text-2xl md:text-3xl w-70 md:w-60 font-bold my-2">Future of support with new shape</h1>
                        <p className="text-gray-500 w-70 md:w-60 my-2"> Discuss your goals, determine success metrics, identify problems</p>

                        <div className=" py-3">
                            <div className="">
                                <input checked type="radio" className="accent-purple-500" />
                                <span className="text-gray-500"> UX design content strategy</span>
                            </div>

                            <div className="my-2">
                                <input checked type="radio" className="accent-purple-500" />
                                <span className="text-gray-500"> Development bring</span>
                            </div>
                        </div>

                        <div className="md:text-start text-center">
                            <button className="bg-purple-500 text-white font-medium px-5 py-3 hover:bg-purple-800 transition-all duration-200 rounded-full">Get started</button>
                        </div>
                    </motion.div>
                    <div className="py-6 grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 md:gap-16 gap-5 items-center">
                        <motion.div
                            ref={leftTopRef}
                            initial={{ x: -100, y: -100, opacity: 0 }}
                            animate={isLeftTopInView  ? { x: 0, y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="flex justify-center md:justify-start">
                            <div className="text-start max-w-xs">
                                <div className="mb-2">
                                    <FaLayerGroup className="text-blue-800 text-3xl" />
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold my-3">Web Design</h1>
                                <p className="md:w-70 text-lg text-gray-500 my-3">One for all and all for one, Multihounds are always ready.</p>
                                <button className="uppercase text-purple-700 font-medium text-lg cursor-pointer my-2">learn More</button>
                            </div>
                        </motion.div>

                        <motion.div
                            ref={rightTopRef}
                            initial={{ x: 100, y: -100, opacity: 0 }}
                            animate={isRightTopInView  ? { x: 0, y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="flex justify-center md:justify-start">
                            <div className="text-start max-w-xs">
                                <div className="">
                                    <TbBulbFilled className="text-yellow-600 text-3xl" />
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold my-3">Ad-Creatives</h1>
                                <p className="md:w-70 text-lg text-gray-500 my-3">Alphabet Village and the subline of her own road.</p>
                                <button className="uppercase text-purple-700 font-medium text-lg cursor-pointer my-2">learn More</button>
                            </div>
                        </motion.div>

                        <motion.div
                            ref={leftBottomRef}
                            initial={{ x: -100, y: 100, opacity: 0 }}
                            animate={isLeftBottomInView  ? { x: 0, y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="flex justify-center md:justify-start">
                            <div className="text-start max-w-xs">
                                <div className="">
                                    <IoMdSettings className="text-pink-700 text-3xl" />
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold my-3">Automation</h1>
                                <p className="md:w-70 text-lg text-gray-500 my-3">Little Blind Text should turn around and return.</p>
                                <button className="uppercase text-purple-700 font-medium text-lg cursor-pointer my-2">learn More</button>
                            </div>
                        </motion.div>

                        <motion.div
                            ref={rightBottomRef}
                            initial={{ x: 100, y: 100, opacity: 0 }}
                            animate={isRightBottomInView  ? { x: 0, y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="flex justify-center md:justify-start">
                            <div className="text-start max-w-xs">
                                <div className="">
                                    <FaRegClock className="text-cyan-600 text-3xl" />
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold my-3">Infographics</h1>
                                <p className="md:w-70 text-lg text-gray-500 my-3">Nothing the copy said could convince her.</p>
                                <button className="uppercase text-purple-700 font-medium text-lg cursor-pointer my-2">learn More</button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section >
        </>
    )
}