"use client";

import React from "react";

interface IntroProps {
  brief: string;
  title:string // Define the `brief` prop
}

const Intro: React.FC<IntroProps> = ({ brief ,title}) => {
  return (
    <>
    <div className="sticky top-[3.75rem] z-10 -mt-4 lg:m-4 lg:rounded-lg 2xl:top-[5.25rem]">
      <div className="hidden lg:block rounded-lg bg-white p-[1.875rem] shadow-md">
        <div className="flex items-center justify-between">
          <a href="#overview" className="cursor-pointer font-medium text-gray-700 hover:text-blue-500">
            Overview
          </a>
          <a href="#itinerary" className="btn-tab cursor-pointer font-medium text-gray-700 hover:text-blue-500">
            Itinerary
          </a>
          <a href="#inclusions" className="btn-tab cursor-pointer font-medium text-gray-700 hover:text-blue-500">
            Inclusions & Exclusions
          </a>
          <a href="#cancellation" className="btn-tab cursor-pointer font-medium text-gray-700 hover:text-blue-500">
            Cancellation Policy
          </a>
          <a href="#packing" className="btn-tab cursor-pointer font-medium text-gray-700 hover:text-blue-500">
            Things To Pack
          </a>
        </div>
      </div>
    </div>
    <section className=" bg-white rounded-lg  lg:m-4 mt-4 shadow-md">
      <div className="overflow-hidden" style={{ maxHeight: "400px" }}>
        <div className="flex flex-col gap-4 lg:gap-5 rounded-lg bg-white p-6 ">
          {/* Heading */}
          <h1 className="text-3xl text-orange font-bold lg:text-4xl lg:font-bold">{title}</h1>
          <hr className="border-gray-300" />

          {/* Content */}
          <div className="flex flex-col gap-4 text-gray-700 text-sm lg:text-base">
            <p>
              {brief}
            </p>
            
            
          </div>
          <div className="text-center lg:text-right lg:pr-4">
        <button className="text-sm font-medium text-blue-500 hover:underline lg:text-base">View More</button>
      </div>
        </div>
      </div>

      {/* View More Button */}
     
    </section>
    </>
  );
};

export default Intro;
