import React from "react";
// import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";

import illuna from "../assets/illunaTxT.png";

const Footer = () => {


    return (
        <>
            <footer className="bg-gradient-to-t from-blue-500 to-cyan-500 mx-auto w-full">

                <div className="max-w-7xl mx-auto w-full py-5 space-y-5 text-white">

                    <div className="flex justify-center">

                        <img to="Home" onClick={() => {
                            scroll.scrollToTop();
                        }} src={illuna} alt="logo" className="h-20 w-100 cursor-pointer" />

                        </div>

                        <span className="flex justify-center">
                            © 2022 Paul Adrian Soncio. All Rights Reserved.
                        </span>

                </div>
            </footer>
        </>

    )
}

export default Footer