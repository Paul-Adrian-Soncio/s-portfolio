import React from 'react';
import heroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = () => {

    const links = [
        {
            href: '/PAUL-ADRIAN-SONCIO-RESUME.pdf',
            download: true,
        },
    ]

    const list = {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.5
          }
        }
    };
      
    const item = {
        hidden: { y: 50, opacity: 0 },
        show: { 
            y: 0, opacity: 1, 
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 2,
            } 
        }
    };

    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black
        via-black to-gray-800 z-0 ">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center
            justify-center h-full px-4 md:flex-row z-10">
             
                <motion.div className="flex flex-col justify-center h-full"
                    // initial={{ y: 20, opacity: 0 }}
                    // animate={{ y: 0, opacity: 1 }}
                    initial="hidden"
                    animate="show"
                    variants={list}
                >
                    <motion.p variants={item} className="text-gray-400 py-4 max-w-md text-2xl md:text-2xl">
                        Hi 👋 I'm
                    </motion.p>

                    <motion.h2 variants={item} className="text-4xl sm:text-6xl font-bold text-white">
                        Paul Adrian
                    </motion.h2>

                    <motion.p variants={item} className="text-gray-400 py-4 max-w-md">
                        I'm a fresh graduate Information Technology student from West Visayas State University,
                        Iloilo City, Philippines. Currently, I love to work on web applications using technologies
                        like React, Tailwind and Next JS.
                    </motion.p>

                    <motion.div variants={item} className="gap-4 pt-4 flex flex-wrap">

                        <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-transparent
                         hover:bg-gradient-to-r from-cyan-500 to-blue-500 border border-cyan-500 hover:border-transparent cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>

                        {links.map(({ href, download }) => (

                            <a href={href} download={download} >
                                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                         from-blue-500 to-cyan-500 cursor-pointer">
                                    Resume
                                    <span className="group-hover:scale-75 duration-300">
                                        <FiDownload size={25} className="ml-1" />
                                    </span>
                                </button>
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div className="z-10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 2,
                        type: "spring",
                        bounce: 0.7,
                        duration: 2,
                    }}
                >
                    <img src={heroImage} alt="my profile" className="rounded-2xl
                    mx-auto w-2/3 md:w-2/3" />
                </motion.div>

            </div>

        </div>
    );
};

export default Home