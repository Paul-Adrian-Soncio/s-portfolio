import React from 'react'

const About = () => {
    return (

        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                <div className="pb-1">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>

                <p className="text-xl mt-10">
                Hello! I am Paul Adrian D. Soncio, 23 years of age, and I reside in Iloilo, Philippines.
                </p>

                <br />

                <p className="text-xl">
                I'm a fresh grauate IT student looking for experience and chances to grow. Currently I enjoy working on 
                a mix of both front and back end web development. I also enjoy handling and managing hardware systems.
                </p>

                <br />

                <p className="text-xl">
                My hobbies include gaming and photography. It was my love for gaming which pushed me to pursue
                learning in the tech related space. The modern world always amazes me with it's growth in technology.
                I often catch myself breaking down how everything works. It's my curious mind that drives me to learn and 
                grow my skills as a developer.
                </p>

            </div>

        </div>
    );
};

export default About;
