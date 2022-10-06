import React from 'react'
import tailwind from "../assets/tailwind.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import git from "../assets/git.png"
import html from "../assets/html.png"
import node from "../assets/node.png"
import sql from "../assets/sql.png"
import arduino from "../assets/arduino.png"
import github from "../assets/github.png"
import netlify from "../assets/netlify.png"
import { motion } from "framer-motion";


const Experience = () => {

    const skills = [
        {
            id: 1,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 2,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id: 5,
            src: nextjs,
            title: "Next JS",
            style: "shadow-white"
        },
        {
            id: 6,
            src: git,
            title: "Git",
            style: "shadow-orange-400"
        },
        {
            id: 7,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 8,
            src: node,
            title: "Node",
            style: "shadow-green-400"
        },
        {
            id: 9,
            src: sql,
            title: "MySQL",
            style: "shadow-cyan-400"
        },
        {
            id: 10,
            src: arduino,
            title: "Arduino",
            style: "shadow-cyan-500"
        },
        {
            id: 11,
            src: github,
            title: "GitHub",
            style: "shadow-gray-500"
        },
        {
            id: 12,
            src: netlify,
            title: "Netlify",
            style: "shadow-cyan-300"
        },
    ]

    return (

        <div name="experience" className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen z-10">

            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

                <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.5,
                    type: "spring",
                    bounce: 0.7,
                    duration: 3,
                }}>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies that I've worked with </p>
                </motion.div>

                <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.8,
                    type: "spring",
                    bounce: 0.7,
                    duration: 3,
                }}
                className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        skills.map(({ id, src, title, style }) => (

                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className="mt-4">{title}</p>
                            </div>
                        ))
                    }

                </motion.div>

            </div>

        </div>
        
    );
};

export default Experience