import React from 'react'
import newsTicker from "../assets/portfolio/newsTicker.jpg";
import taKape from "../assets/portfolio/taKape.jpg";
import theSis from "../assets/portfolio/theSis.jpg";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: newsTicker,
            name: "Live News Ticker",
            href: 'https://spiffy-alpaca-805a55.netlify.app'
        },
        {
            id: 2,
            src: taKape,
            name: "Takape",
            href: 'https://takape-vhlum.mongodbstitch.com/#/login'
        },
        {
            id: 3,
            src: theSis,
            name: "Inventory and Temperature Monitor for Bio-Freezers",
            href: 'https://github.com/illunaaa-PA/thesis-package'
        },
         
    ]

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                <div className="pb-8">

                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>

                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

                {
                    portfolios.map(({id, src, name, href}) => (

                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">

                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />

                        <div className="flex items-center justify-center">

                        <a href={href} target="_blank" rel="noreferrer">
                            <button className="font-bold px-6 py-3 m-4 duration-200 hover:scale-105">{name}</button>
                        </a>
                        </div>
                    </div>

                    ))
                }

                    
                </div>
            </div>
        </div>
    );
};

export default Portfolio