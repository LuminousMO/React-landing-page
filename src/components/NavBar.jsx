import { useState } from "react"
import { IoMenu, IoCloseSharp } from 'react-icons/io5';
import { motion } from "motion/react";
export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const menu = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About Us" },
        { href: "#service", label: "Our Services" },
        { href: "#testimonial", label: "Testimonial" },
    ]
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-white/97 shadow-sm border-b-gray-600 z-100">
                <motion.div
                initial={{ y:-100, opacity:0}}
                animate={{ y:0, opacity:1}}
                transition={{ duration:0.7}}
                className="flex justify-around max-sm:justify-between items-center w-full px-4 sm:px-6 md:h-20 h-16">
                    <div className="flex">
                        <div className="w-4 h-4 rounded-full bg-blue-400 hover:bg-blue-600 cursor-pointer transition-all duration-300"></div>
                        <div className="w-4 h-4 rounded-full -ml-1.5 bg-red-600 hover:bg-red-400 cursor-pointer transition-all duration-300"></div>
                    </div>

                    {/* Button menu for mobile */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden px-2 font-medium text-2xl">
                        {isMenuOpen ? <IoCloseSharp /> : <IoMenu />}
                    </button>

                    


                    {/* Menu for desktop */}
                    <div className="hidden md:flex justify-center gap-10">
                        {menu.map((link, index) => {
                            return <a href={link.href} onClick={() => setActiveLink(link.href)}
                                className={`text-sm font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full hover:after:bg-blue-400 after:transition-all after:duration-300
                                 ${activeLink == link.href ? "text-blue-500 after:w-full after:bg-blue-500" : "text-gray-500 hover:text-gray-900"}`} key={index}>
                                {link.label}</a>
                        })}
                    </div>

                    <button className="hidden md:block bg-blue-500 text-white px-5 py-2 text-sm font-medium rounded-lg hover:shadow-sm hover:bg-blue-700 transition-all duration-250">Get In Touch</button>
                </motion.div>
                {/* Menu for mobile */}
                    {
                        isMenuOpen && (
                            <div className="md:hidden bg-white border-t border-gray-200 transition-all duration-200">
                                <div className=" container mx-auto px-4 ">
                                    {menu.map((link, index) => {
                                        return <a href={link.href} onClick={() => setActiveLink(link.href)}
                                            className={`block text-sm font-medium py-2
                                 ${activeLink == link.href ? "text-blue-500 after:w-full after:bg-blue-500" : "text-gray-500 hover:text-gray-900"}`} key={index}>
                                            {link.label}</a>
                                    })}
                                </div>
                            </div>
                        )
                    }
            </nav>
        </>
    )
}