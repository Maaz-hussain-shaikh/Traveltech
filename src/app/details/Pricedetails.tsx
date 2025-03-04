"use client"
import React, { useState } from "react";
import Link from "next/link";


 
const quadprice=0;




const picuppoint=[{location:"Indore",Extraprice:0,Time:"12AM"},{location:"Dewas",Extraprice:100,Time:"1AM"},{location:"Bhopal",Extraprice:200,Time:"32AM"}]
const droppoint=[{location:"Indore",Extraprice:0,Time:"12AM"},{location:"Pipariya",Extraprice:0,Time:"1AM"},{location:"Bhopal",Extraprice:100,Time:"32AM"}]

interface PriceProps {
  Quadprice: number,
  Doubleprice:number,
  Tripleprice:number,
  Batchdata:{ 
    id: number; 
    date: string; 
    Extraprice: number; 
  }[];
  Pickup: {
    location: string;
    Extraprice: number;
    Time: string;
}[];
Drop: {
  location: string;
  Extraprice: number;
  Time: string;
}[]// Define the `brief` prop
}

const Pricedetails: React.FC<PriceProps> = ({ Quadprice,Doubleprice,Tripleprice,Batchdata,Drop,Pickup })=> {
  
  const[Sharing,setSharing]=useState("Quad")
  const[price,setprice]=useState(Quadprice)
  const[Batch,setBatch]=useState("Please Selecte Batch In Blow")
const [selectedDrop,setSelectedDrop]=useState("Not Selected")
const [selectedPickup,setSelectedPickup]=useState("Not Selected")
const[somedata,setdata]=useState({
  setextrapikup:0,
  setextradrop:0,
  setbatchextra:0,
})
const [showStartDropdown, setShowStartDropdown] = useState(false);
const [showEndDropdown, setShowEndDropdown] = useState(false);

  const updateprice = (sharing:string, pickup:string, drop:string, batch:string ,BatchExtracost:number ,pickupExtra:number ,dropExtra:number) => {
    let totalPrice = Quadprice;
  
  // Add extra price for sharing type
  if (sharing === "Quad") totalPrice += quadprice;
  if (sharing === "Triple") totalPrice += Tripleprice;
  if (sharing === "Double") totalPrice += Doubleprice;

  // Add extra costs
  totalPrice += BatchExtracost + pickupExtra + dropExtra;
  setdata((prevData) => ({
    ...prevData,
    setextrapikup: pickupExtra,
    setextradrop: dropExtra,
    setbatchextra: BatchExtracost,
  }));
    setprice(totalPrice);
  };
  
  // Handlers for selections
  const handleSelectBatch = (date:string, id:number,BatchExtracost:number) => {
    setBatch(`Batch ${id}: ${date}`);
    updateprice(Sharing, selectedPickup, selectedDrop,Batch,BatchExtracost, somedata.setextrapikup,somedata.setextradrop);
  };
  
  const handleSelectSharing = (sharing:string) => {
    if(sharing==="Quad"){
      setSharing("Quad")
    }if(sharing==="Triple"){
      setSharing("Triple")
    }if(sharing==="Double"){
      setSharing("Double")
    };
    updateprice(sharing, selectedPickup, selectedDrop, Batch,somedata.setbatchextra, somedata.setextrapikup,somedata.setextradrop);
  };
  
  const handlePickupChange = (location:string , pickupExtra:number) => {
    setSelectedPickup(location);
    setShowStartDropdown(!showStartDropdown)
    updateprice(Sharing, location, selectedDrop, Batch,somedata.setbatchextra,pickupExtra,somedata.setextradrop);
  };
  
  const handleDropChange = (location:string,dropExtra:number) => {
    setSelectedDrop(location);
    setShowEndDropdown(!showEndDropdown)
    updateprice(Sharing, selectedPickup, location, Batch,somedata.setbatchextra,somedata.setextrapikup,dropExtra);
  };
 
  return (
    <div className="flex-col hidden w-full py-2 mr-4 mt-4 sm:flex-grow sm:flex sm:mt-0">
      <div className="sticky top-[5rem]  max-h-[calc(100vh-5rem)] basis-1/3 overflow-auto 2xl:top-[6.5rem]">
        <div className="flex flex-col gap-3">
          {/* Pricing Card */}
          <div className="rounded-[1.25rem] bg-white px-6 py-4">
            <div className="flex flex-col gap-2 2xl:gap-3">
              {/* Price Section */}
              <div className="flex flex-col gap-[0.625rem]">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium 2xl:text-xl">Starting From</h2>
                  <div className="rounded-full bg-[#ffe9c2] px-[0.625rem] py-[0.125rem] text-sm text-[#ffa402]">
                    ₹ 1,500 OFF
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-gray-400 line-through">₹ {price+1500}</p>
                  <div className="flex grow items-center justify-between">
                    <h2 className="text-3xl font-medium text-orange 2xl:text-3xl">
                      ₹ {price}
                    </h2>
                    <div className="hidden rounded-full bg-blue-100 px-4 py-[0.375rem] text-sm lg:block">
                      Per Person
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Now Button */}
              <Link
                href="/booking/package?slug=kedarkantha-trek"
                className="hidden text-white rounded-full bg-orange text-center px-4 py-[0.375rem] text-lg lg:block"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Pricing Details */}
          <div className="flex flex-col gap-[0.625rem] rounded-[0.625rem] bg-white lg:px-6 lg:py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium lg:text-xl">Pricing</h2>
              <div className="flex items-center gap-3 2xl:gap-4">
                <div className="flex items-center ">

                  <div className="group relative">
                    <p>Occupancy</p>

                    <div className="absolute left-16 top-full hidden w-[78vw] max-w-[400px] -translate-x-1/2 rounded-[0.625rem] bg-white p-4 text-center text-xs shadow-lg group-hover:block z-10">
                      <p className="py-1 text-gray-400">
                        <span className="font-medium text-gray-800">Double -</span>{" "}
                        Room will be shared between 2 people.
                      </p>
                      <p className="py-1 text-gray-400">
                        <span className="font-medium text-gray-800">Triple -</span>{" "}
                        Room will be shared between 3 people.
                      </p>
                      <p className="py-1 text-gray-400">
                        <span className="font-medium text-gray-800">Quad -</span>{" "}
                        Room will be shared between 4 people.
                      </p>
                    </div>
                  </div>
                </div>
                <p>-</p>
                
                <button className={`relative  ${Sharing==="Quad" ? "btn-tab-active" : "btn-tab"}`} onClick={()=>{handleSelectSharing("Quad")}}>
                  Quad
                  <span className={`absolute -mb-2 bottom-[-0.120rem] left-0 h-[2px] w-full rounded-full bg-orange transition-opacity ${Sharing==="Quad" ? "opacity-100" : "opacity-0"}`}></span>
                </button>

                <button className={`relative  ${Sharing==="Triple" ? "btn-tab-active" : "btn-tab"}`} onClick={()=>{handleSelectSharing("Triple")}}>
                  Triple
                  <span className={`absolute  -mb-2 bottom-[-0.120rem] left-0 h-[2px] w-full rounded-full bg-orange transition-opacity ${Sharing==="Triple" ? "opacity-100" : "opacity-0"}`}></span>
                </button>

                <button className={`relative  ${Sharing==="Double" ? "btn-tab-active" : "btn-tab"}`} onClick={()=>{handleSelectSharing("Double")}}>
                  Double

                <span className={`absolute -mb-2 bottom-[-0.120rem] left-0 h-[2px] w-full rounded-full bg-orange transition-opacity ${Sharing==="Double" ? "opacity-100" : "opacity-0"}`}></span>
                </button>
              </div>
            </div>
            <hr />

            <div className="scrollbar-styled flex  flex-col gap-[0.625rem] ">
              {/* Pricing Item */}
              <div className="hidden rounded-lg  bg-blue-100 px-4 py-[0.375rem] text-sm lg:block">
                  {Batch} 
                  </div>
              <div>
                <div className="flex flex-col gap-2 rounded-[0.5rem] border p-[0.625rem] shadow-sm">
                  <div className="flex w-full items-center justify-between gap-1.5 rounded-lg transition-all duration-100 ease-out lg:gap-4 lg:px-5 ">
                    <div>
                      <p className="text-sm lg:text-base">Start Point : </p>
                      <div className="relative col-span-1  w-full grow rounded-full  bg-alert-extra-light cursor-pointer">
                        <div className=" bg-orange h-full rounded-md p-1 text-center text-[0.625rem] leading-4 tracking-wide text-white lg:text-xs w-full bg-alert" onClick={() => setShowStartDropdown(!showStartDropdown)}>
                       {selectedPickup}
                        </div>
                        
                        {showStartDropdown &&  <ul className="absolute left-0 mt-1 w-full rounded-lg border bg-white shadow-lg">
                    {Pickup.map((location, index) => (
                      <li
                        key={index}
                        className="cursor-pointer px-3 py-2 hover:bg-blue-100"
                        onClick={()=>{handlePickupChange(location.location,location.Extraprice)}}
                      >
                        {location.location}
                      </li>
                    ))}
                  </ul>}
                      </div>


                      <p className="text-xs text-gray-400 lg:text-sm">08-Feb</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 19 12">
                      <path d="M11.793 10.293a1 1 0 001.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 10-1.414 1.414L15.086 5H1.444C.923 5 .5 5.448.5 6s.423 1 .944 1h13.642l-3.293 3.293z"></path>
                    </svg>
                    <div>
                      <p className="text-sm lg:text-base">End Point :
                      </p>

                      <div className="relative col-span-1  w-full grow rounded-md  bg-alert-extra-light cursor-pointer">
                        <div className=" bg-orange h-full rounded-md p-1 text-center text-[0.625rem] leading-4 tracking-wide text-white lg:text-xs w-full bg-alert" onClick={() => setShowEndDropdown(!showEndDropdown)}>
                          {selectedDrop}
                        </div>

                        {showEndDropdown &&  <ul className="absolute left-0 mt-1 w-full rounded-md border bg-white shadow-lg">
                    {Drop.map((location, index) => (
                      <li
                        key={index}
                        className="cursor-pointer px-3 py-2 hover:bg-blue-100" onClick={()=>{handleDropChange(location.location,location.Extraprice)}}
                      >
                        {location.location}
                      </li>
                    ))}
                  </ul>}
                      
                      </div>

                      <p className="text-xs text-gray-400 lg:text-sm">10-Feb</p>
                    </div>
                  </div>
                  <div className="flex grow items-center justify-center">

                    <div className="flex w-full items-center justify-between gap-[0.625rem] px-[0.625rem] py-1 text-sm lg:text-md">

                      {/* Vehicle Type */}
                      <p className="text-sm font-medium lg:text-md">Tempo Traveller</p>
                      <p>-</p>

                      {/* Occupancy */}
                      <p className="grow">Triple Occupancy</p>

                      {/* Price */}
                      <div>
                        <p className="whitespace-nowrap text-xs font-medium leading-3 line-through">
                          ₹ 11,500
                        </p>
                        <p className="whitespace-nowrap font-medium leading-4">
                          ₹ {price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Batch List */}

          </div>

          <div className="flex flex-col gap-[0.625rem] rounded-[0.625rem] bg-white lg:px-6 lg:py-4">
            <h2 className="text-lg font-medium lg:text-xl">Batches</h2>

            <hr />
            <div className="scrollbar-styled max-h-[150px] overflow-auto">
              {Batchdata.map((batch,index) => (
                <div
                  key={index}
                  className="" onClick={()=>{handleSelectBatch(batch.date,batch.id,batch.Extraprice)}}
                >
                  <div className="hidden rounded-lg mb-2 bg-blue-100 px-4 py-[0.375rem] text-sm lg:block">
                     Batche {batch.id} - {batch.date}
                  </div>
                </div>
              ))}
            </div></div>

          {/* Action Buttons */}
          <div className="flex gap-[0.75rem] rounded-[1.25rem] bg-white px-6 py-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/919205720303?text=Hi Wraveler! I am interested in Kedarkantha Trek"
              className="inline-flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-full bg-green-100"
              aria-label="Chat on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 28 28"
                className="text-xl"
              >
                <path fill="#01AC15"></path>
              </svg>
            </a>
            <button className="btn-primary-light grow border border-blue-600">
              Send Query
            </button>
            <button className="btn-primary-light grow border border-blue-600">
              Get PDF
            </button>
          </div>
        </div>
      </div></div>
  );
};

export default Pricedetails;



