import React from 'react';
import heroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

const Home = () => {

    // const particlesInit = useCallback(async (engine) => {
    //     console.log(engine);
    //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     await loadFull(engine);
    //   }, []);
    
    //   const particlesLoaded = useCallback(async (container) => {
    //     await console.log(container);
    //   }, []);

    const links = [
        {
            href: '/PAUL-ADRIAN-SONCIO-RESUME.pdf',
            download: true,
        },
    ]

    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black
        via-black to-gray-800 z-0 ">

        {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 0,
                  },
                background: {
                    color: "#",
                },
                onDiv: {
                    enable: true,
                },
                autoPlay: true,
                fpsLimit: 120,
                interactivity: {
                    detectsOn: "canvas",
                events: {
                    onClick: {
                    enable: false,
                    mode: "push",
                    },
                    onHover: {
                    enable: false,
                    mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                    quantity: 4,
                    },
                    repulse: {
                    distance: 200,
                    duration: 0.4,
                    },
                },
                },
                particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                    default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
                },
                detectRetina: true,
            }}
            /> */}

            <div className="max-w-screen-lg mx-auto flex flex-col items-center
            justify-center h-full px-4 md:flex-row z-10">

                <motion.div className="flex flex-col justify-center h-full"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 1,
                        type: "spring",
                        bounce: 0.7,
                        duration: 2,
                    }}
                >
                    <p className="text-gray-400 py-4 max-w-md text-2xl md:text-2xl">
                        Hi 👋 I'm
                    </p>

                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        Paul Adrian Soncio
                    </h2>

                    <p className="text-gray-400 py-4 max-w-md">
                        I'm a fresh graduate Information Technology student from West Visayas State University,
                        Iloilo City, Philippines. Currently, I love to work on web applications using technologies
                        like React, Tailwind and Next JS.
                    </p>

                    <div className="gap-4 pt-4 flex flex-wrap">

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
                    </div>
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