import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/aboutImg.png';

const About = () => {

    return (

        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white z-10">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col pt-60 justify-center w-full h-full">

                <div className="pb-1">
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.5,
                            type: "spring",
                            bounce: 0.7,
                            duration: 3,
                        }} className="text-4xl font-bold inline border-b-4 border-gray-500">About</motion.p>

                </div>

                <div className="flex flex-col sm:flex-row gap-16 mt-10 ">

                    <motion.img src={aboutImage} alt="my profile" 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.5,
                        type: "spring",
                        bounce: 0.7,
                        duration: 3,
                    }} className="rounded-2xl mx-auto  w-72 md:w-72" />

                    <div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                type: "spring",
                                bounce: 0.7,
                                duration: 3,
                            }} className="text-4xl font-bold text mt-10">
                            Paul Adrian D. Soncio

                        </motion.h1>

                        <br />

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 1,
                                type: "spring",
                                bounce: 0.7,
                                duration: 3,
                            }} className="text-base">
                            I'm a fresh grauate IT student looking for experience and chances to grow. Currently I enjoy working on
                            a mix of both front and back end web development. I also enjoy handling and managing hardware systems.
                        </motion.p>

                        <br />

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 1.5,
                                type: "spring",
                                bounce: 0.7,
                                duration: 3,
                            }} className="text-base">
                            My hobbies include gaming and photography. It was my love for gaming which pushed me to pursue
                            learning in the tech related space. The modern world always amazes me with it's growth in technology.
                            I often catch myself breaking down how everything works. It's my curious mind that drives me to learn and
                            grow my skills as a developer.
                        </motion.p>

                        <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 2.0,
                            type: "spring",
                            bounce: 0.7,
                            duration: 3,
                        }} className="flex gap-5">

                            <p className="group mt-14 p-1 px-3 rounded-full bg-transparent border border-cyan-500
                                transition ease-in-out hover:-translate-y-1 duration-300 cursor-default">
                                 $gamer
                            </p>

                            <p className="group mt-14 p-1 px-3 rounded-full bg-transparent border border-cyan-500
                                transition ease-in-out hover:-translate-y-1 duration-300 cursor-default">
                                 $codes
                            </p>

                            <p className="group mt-14 p-1 px-3 rounded-full bg-transparent border border-cyan-500
                                transition ease-in-out hover:-translate-y-1 duration-300 cursor-default">
                                 $developer
                            </p>

                            <p className="group mt-14 p-1 px-3 rounded-full bg-transparent border border-cyan-500
                                transition ease-in-out hover:-translate-y-1 duration-300 cursor-default">
                                 $mechanical keyboard
                            </p>

                            <p className="group mt-14 p-1 px-3 rounded-full bg-transparent border border-cyan-500
                                transition ease-in-out hover:-translate-y-1 duration-300 cursor-default">
                                 $coffee
                            </p>

                        </motion.div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;
