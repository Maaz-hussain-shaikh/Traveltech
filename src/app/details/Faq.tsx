"use client";
import React, { useState } from "react";

interface BookingProps {
    Faq: {
        question: string;
        answer: string;
    }[]
    Booking:{ Heading: string; Terms: string; }[]
   

}

const Faq: React.FC<BookingProps>= ({Booking,Faq}) => {
    const [isOpen, setIsOpen] = useState();
    const toggleid = (id:any) => {
        setIsOpen(isOpen === id ? null : id);
      };
    return (
        <section className=" bg-white rounded-lg  lg:m-4 mt-2 shadow-md">
            <div className="overflow-hidden" >
                <div className="flex flex-col gap-2 lg:gap-2 rounded-lg bg-white p-6 ">
                    {/* Heading */}
                    <h2 className="text-2xl text-orange font-bold">Our policies</h2>
                    <span className="font-medium  text-sm">Please read them once</span>
                    <hr className="border-gray-300" />


                    <div className={`flex flex-wrap gap-3 lg:gap-5 rounded-xl `} >
                    {Booking.map((item,index)=>(<React.Fragment key={index}>

                        <div className={`${isOpen === index  ? "flex w-full gap-[0.625rem] items-start" : "flex w-full gap-[0.625rem] items-center rounded-xl p-2 shadow-lg"}`}>
                            {/* Day Number Box */}

                            {/* Itinerary Details */}
                            <div className="grow p-4" onClick={() => toggleid(index)}>
                                <h3 className="cursor-pointer text-sm font-medium lg:text-lg">
                                {item.Heading}
                                </h3>

                                {isOpen === index &&  (
                                    
                                    <div className="itinerary-description mt-[0.375rem] text-sm text-gray-500 lg:mt-2 lg:text-base ml-4" dangerouslySetInnerHTML={{ __html: item.Terms }}/>
                                   
                                )}
                            </div>

                            {/* Arrow Icon */}
                            <div className={`${isOpen === index ?"cursor-pointer rotate-180 mr-4":"cursor-pointer rotate-360 mr-4"}`} onClick={() => toggleid(index)} >
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

                    <h2 className="text-2xl text-orange font-bold mt-8">FAQs</h2>
                    <span className="font-medium  text-sm">Frequently asked questions</span>
                    <hr className="border-gray-300" />
                    <div className={`flex flex-wrap gap-3 lg:gap-5 rounded-xl `} >

                    {Faq.map((item,index)=>(<React.Fragment key={index}>
                        <div className={`${isOpen === index ? "flex w-full gap-[0.625rem] items-start" : "flex w-full gap-[0.625rem] items-center rounded-xl p-2 shadow-lg"}`}>
                            {/* Day Number Box */}

                            {/* Itinerary Details */}
                            <div className="grow p-4" onClick={() => toggleid(index+50)} >
                                <h3 className="cursor-pointer text-sm font-medium lg:text-lg">
                                {item.question}
                                </h3>
                                {isOpen === index+50 && (<div className="itinerary-description mt-[0.375rem] text-sm text-gray-500 lg:mt-2 lg:text-base">
                                    <ul className="list-disc pl-5">
                                        <li>
                                           {item.answer}
                                        </li>
                                        
                                    </ul>
                                    
                                </div>)}
                            </div>

                            {/* Arrow Icon */}
                            <div className={`${isOpen === index?"cursor-pointer rotate-180 mr-4":"cursor-pointer rotate-360 mr-4"}`} >
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

export default Faq;