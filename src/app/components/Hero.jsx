"use client";
import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingLuggage, faMapLocationDot, faThumbsUp, faIcons } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/TourOffer.module.css";
import Card from './Card';
import TestimonialSlider from './TestimonialSlider';
import Footer from './Footer';
const Hero = () => {

    const handleCall = () => {
        window.location.href = "tel:+918982001240"; // Replace with your actual contact number
    }

    return (
        <>
            <div
                className="relative flex flex-col items-center bg-center bg-cover h-[30rem] z-1"
                style={{
                    backgroundImage: `url(/images/home-bg-1.jpg)`,
                }}
            >
                {/* Scroll Indicator */}
                {/* <div className="flex items-center justify-center relative flex-shrink-0 h-16">
                    <div className="icon-scroll"></div>
                </div> */}
            </div>
            <section className="bg-orange max-w-4xl mx-auto -mt-32 relative z-30 rounded-lg shadow-lg">
                <section className="max-w-screen-xl w-full mx-auto py-12 px-2">
                    <section className="w-full grid gap-1 grid-cols-2 sm:grid-cols-5">
                        {/* Trusted Vendors */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-baseline">
                                <FontAwesomeIcon icon={faPersonWalkingLuggage} className="text-3xl ml-2 sm:ml-4 sm:text-3xl text-white" />
                                <span className="text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white font-bold">75+</span>
                            </div>
                            <span className="text-white sm:text-lg font-semibold mt-4">Trusted Vendors</span>
                        </div>

                        {/* Regions Unlocked */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-baseline">
                                <FontAwesomeIcon icon={faMapLocationDot} className="text-3xl ml-2 sm:ml-4 sm:text-3xl text-white" />
                                <span className="text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white font-bold">25+</span>
                            </div>
                            <span className="text-white sm:text-lg font-semibold mt-4">Regions Unlocked</span>
                        </div>

                        {/* Travellers Hosted */}
                        <div className="flex flex-col items-center mt-8 sm:mt-0">
                            <div className="flex items-baseline">
                                <FontAwesomeIcon icon={faThumbsUp} className="text-3xl ml-2 sm:ml-4 sm:text-3xl text-white" />
                                <span className="text-3xl ml-2 sm:ml-4 sm:text-3xl font-bold font-black text-white">
                                    10<span className="text-2xl sm:text-4xl">k+</span>
                                </span>
                            </div>
                            <span className="text-white sm:text-lg font-semibold mt-3">Travellers Hosted</span>
                        </div>

                        {/* Average Rating */}
                        <div className="flex flex-col items-center mt-8 sm:mt-0">
                            <div className="flex items-baseline">
                                <FontAwesomeIcon icon={faIcons} className="text-3xl ml-2 sm:ml-4 sm:text-3xl text-white" />
                                <span className="text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white font-bold">
                                    4.5<span className="text-2xl">/5</span>
                                </span>
                            </div>
                            <span className="text-white sm:text-lg font-semibold mt-4">Average Rating</span>
                        </div>

                        {/* Social Community */}
                        <div className="flex flex-col items-center mt-8 sm:mt-0 col-span-2 sm:col-span-1">
                            <div className="flex items-baseline">
                                <FontAwesomeIcon icon={faPersonWalkingLuggage} className="text-3xl ml-2 sm:ml-4 sm:text-3xl text-white" />
                                <span className="text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white font-bold">20k+</span>
                            </div>
                            <span className="text-white sm:text-lg font-semibold mt-4">Social Community</span>
                        </div>
                    </section>
                </section>
            </section>
            <Card/>

        </>
    )
}

export default Hero
