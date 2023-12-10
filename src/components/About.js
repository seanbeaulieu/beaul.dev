import React from "react";

export default function About() {
    return (
        <div className="text-gray-400 bg-gray-900 body-font min-h-screen">
            <section id="about">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4x1 text-3x1 mb-4 font-medium text-white">
                            Welcome!
                            <br className="hidden lg:inline-block" />I am a recent graduate from the University of Minnesota Twin-Cities.
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            I love to build computer applications and analyze data.
                        </p>
                        <div className="flex justify-center">
                            <a href="/contact"
                                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                Contact Me 
                            </a>
                            <a href="/projects"
                                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                My Projects
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded"
                            alt="hero"
                            src='./portrait.jpg'
                        />
                    </div>
                </div>
            </section>
        </div>
    )
};