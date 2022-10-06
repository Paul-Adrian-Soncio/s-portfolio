import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

    return (

        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white z-10">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

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

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.5,
                        type: "spring",
                        bounce: 0.7,
                        duration: 3,
                    }} className="text-xl mt-10">
                    Hello! I am Paul Adrian D. Soncio, 23 years of age, and I reside in Iloilo, Philippines.
                </motion.p>

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
                    }} className="text-xl">
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
                    }} className="text-xl">
                    My hobbies include gaming and photography. It was my love for gaming which pushed me to pursue
                    learning in the tech related space. The modern world always amazes me with it's growth in technology.
                    I often catch myself breaking down how everything works. It's my curious mind that drives me to learn and
                    grow my skills as a developer.
                </motion.p>

            </div>

        </div>
    );
};

export default About;
