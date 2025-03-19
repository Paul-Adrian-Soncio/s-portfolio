import React from 'react'
import newsTicker from "../assets/portfolio/newsTicker.jpg";
import taKape from "../assets/portfolio/taKape.jpg";
import theSis from "../assets/portfolio/theSis.jpg";
import { motion } from "framer-motion";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: newsTicker,
            name: "Live News Ticker",
            href: 'https://spiffy-alpaca-805a55.netlify.app',
            desc: "A TV sized screensaver with a live world news ticker",
            stack: "React     TailwindCSS     Netlify     JavaScript",
            type: "Web App",
        },
        {
            id: 2,
            src: taKape,
            name: "Takape",
            href: 'https://takape-vhlum.mongodbstitch.com/#/login',
            desc: "Takape is a simple website for finding cafes across Panay",
            stack: "React   TailwindCSS   Firebase   MongoDB   NodeJS   ExpressJS",
            type: "Web App",
        },
        {
            id: 3,
            src: theSis,
            name: "BioLab",
            href: 'https://github.com/illunaaa-PA/thesis-package',
            desc: "A temperature monitoring and inventory system for ultra-low Biofreezers",
            stack: "React    Arduino    MySQL    CayenneMQTT    NodeMCU ",
            type: "Web and Mobile App with Hardware",
        },

    ]

    return (
        <div name="portfolio" className="bg-gradient-to-b from-gray-800 to-black w-full text-white h-full z-10">

            <div className="max-w-screen-lg px-4 py-10 mx-auto flex flex-col justify-center w-full h-full z-10">

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.5,
                        type: "spring",
                        bounce: 0.7,
                        duration: 3,
                    }} className="pb-8 z-10">

                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>

                    <p className="py-6 text-cyan-500">Check out some of my work right here</p>
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
                    }} className="flex flex-col px-12 sm:px-0 z-10">

                    {
                        portfolios.map(({ id, src, name, href, desc, stack, type }) => (

                            <div key={id} className="flex sm:flex-row flex-col pt-20 gap-10">

                                <div className="w-64 sm:w-128 h-36 sm:h-128">
                                    <img src={src} alt="" className="border-2 border-white object-cover rounded-md" />
                                </div>

                                <div className="flex flex-col w-64 sm:w-128 whitespace-pre-wrap">

                                    <p className="mb-4 text-base text-gray-300 md:text-lg">{type}</p>

                                    <a href={href} target="_blank" rel="noreferrer">
                                        <h2 className=" mb-5 text-2xl font-semibold text-gray-100 md:text-3xl
                                        duration-200 hover:scale-105">{name}</h2>
                                    </a>

                                    <p className="mb-8 mt-4 mr-10 text-base text-gray-300
                                     pb-3 md:text-lg">{desc}</p>

                                    <a href={href} target="_blank" className="flex items-center gap-2 text-xl font-semibold
                                     text-blue-400 md:text-2xl hover:text-blue-500" rel="noreferrer">

                                        <button className="flex pb-5">
                                            View Site
                                            <span className="group-hover:scale-75 duration-300">
                                                <BsBoxArrowUpRight size={25} className="ml-1 w-full" />
                                            </span>

                                        </button>
                                    </a>

                                    <span className="w-full border-b-2 border-gray-500"></span>

                                    <p className="text-xs mt-5 md:text-sm text-cyan-500">{stack}</p>

                                </div>
                            </div>

                        ))
                    }

                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio