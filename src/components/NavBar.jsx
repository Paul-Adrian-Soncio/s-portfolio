import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import illuna from "../assets/illunaTxT.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    return (
        <div className="flex justify-between items-center
    w-full h-20 px-4 text-white bg-black z-20">
            <div className="mt-14 ml-20">
                {/* <h1 className="text-5xl font-signature ml-2">illuna</h1> */}
                <motion.img 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  bounce: 0.7,
                  duration: 2,
                }} src={illuna} alt="logo" className="ml-2 h-20 w-100" />
            </div>

            <ul className="hidden md:flex z-20 mt-14 mr-20">
                {links.map(({ id, link }) => (

                    <motion.li 
                    initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 1,
                    type: "spring",
                    bounce: 0.7,
                    duration: 2,
                  }} key={id} className="px-4 cursor-pointer capitalize font-medium
             text-gray-500 hover:scale-105 duration-200 z-20">

                        <Link to={link} smooth duration={500}> {link} </Link>

                    </motion.li>

                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-30
         text-gray-500 md:hidden">

                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (

                <ul className="flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b
        from-black to-gray-800 text-gray-500 z-20">

                    {links.map(({ id, link }) => (

                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">

                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}> {link} </Link>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavBar