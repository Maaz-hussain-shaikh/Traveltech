"use client";
import React, { useState } from "react";

interface ItiProps {
    it: {
       Heading: string,
      Schedule:string
    }[]

}
const ItineraryDay: React.FC<ItiProps>= ({it}) => {
    const [isOpen, setIsOpen] = useState();

    const toggleid = (id:any) => {
        setIsOpen(isOpen === id ? null : id);
      };
    return (
        <section className=" bg-white rounded-lg  lg:m-4 mt-2 shadow-md">
            <div className="overflow-hidden" >
                <div className="flex flex-col gap-2 lg:gap-2 rounded-lg bg-white p-6 ">
                    {/* Heading */}
                    <h2 className="text-2xl text-orange font-bold">Detailed Itinerary</h2>
                    <span className="font-medium  text-sm">Your days at a glance</span>
                    <hr className="border-gray-300" />

                    <div className={`flex flex-wrap gap-5 lg:gap-5 rounded-xl `} >

                        {it.map((item,index)=>(<React.Fragment key={index}>
                        <div className={`${isOpen === index ? "flex w-full gap-[0.625rem] items-start " : "flex w-full gap-[0.625rem] items-center rounded-xl p-2 shadow-md"}`} >
                            {/* Day Number Box */}


                            <div
                                className={`flex shrink-0 basis-[40px] cursor-pointer items-center justify-center rounded-[.25rem] bg-gray-700/5 py-2 transition-all duration-300${isOpen === index ? "w-30 lg:w-20 lg:basis-[80px] lg:rounded-[0.625rem] lg:py-4" : "w-30 h-15 lg:h-20 lg:w-20 lg:basis-[80px] lg:rounded-[0.625rem]"}`}
                                onClick={() => toggleid(index)}
                            >
                                <div className="flex items-center flex-col lg:flex-row-reverse lg:gap-2">
                                    {/* Adjusted font size for better mobile readability */}
                                    <h6 className="text-base font-semibold lg:text-lg xl:text-xl">{index+1}</h6>
                                    <p className="text-sm lg:text-md xl:text-lg">Day</p>
                                </div>
                            </div>

                            {/* Itinerary Details */}
                            
                            <div className="grow " onClick={() => toggleid(index)}>
                                <h3 className="cursor-pointer text-sm font-medium lg:text-lg">
                                    {item.Heading}
                                </h3>
                                {isOpen === index && (<div className="itinerary-description mt-[0.375rem] text-sm text-gray-500 lg:mt-2 lg:text-base" dangerouslySetInnerHTML={{ __html: item.Schedule }}/>)}
                            </div>

                            {/* Arrow Icon */}
                            <div className={`${isOpen === index?"cursor-pointer rotate-180 mr-4":"cursor-pointer rotate-360 mr-4"}`} onClick={() => toggleid(index)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 13 7">
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M7.207 6.707a1 1 0 01-1.414 0l-5-5A1 1 0 012.207.293L6.5 4.586 10.793.293a1 1 0 111.414 1.414l-5 5z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        </React.Fragment>))}
                    </div>
                    
                    

                </div>
            </div>
        </section>
    );
};

export default ItineraryDay;