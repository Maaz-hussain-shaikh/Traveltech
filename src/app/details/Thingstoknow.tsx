"use client"; // Required for state in Next.js App Router
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faBed,
  faUtensils,
  faPersonHiking,
  faVanShuttle,
  faTruckField,
  faSailboat,
  faTicket,
  faHandHoldingDollar,
  faCakeCandles,
  faMusic,
  faPlaneSlash,
  faBurger,
  faPaperclip,
  faCloudSun,
  faTemperatureHalf,
  faBan,
  faMountain,
  faBarcode,
  faTriangleExclamation,
  faMartiniGlassCitrus,
  faHandSparkles,
  faShoePrints,
  faBottleDroplet,
  faBatteryFull,
  faNotesMedical,
  faBottleWater,
  faSimCard,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";


interface inclutionType {

  inclution: {
    name: string;
    icon: string;
    inc: string;
  }[]
  exclution: {
    name: string;
    icon: string;
    inc: string;
  }[]
  thingsToTake: {
    name: string;
    icon: string;
    inc: string;
  }[]

}
const Thingstoknow: React.FC<inclutionType> = ({ inclution, exclution, thingsToTake }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };


  const thingstotakeIcons: Record<string, React.ReactNode> = {
    moisturizer: <FontAwesomeIcon icon={faHandSparkles} className="text-sm icon-transition" />,
    hiking: <FontAwesomeIcon icon={faPersonHiking} className="text-sm icon-transition" />,
    Shoes: <FontAwesomeIcon icon={faShoePrints} className="text-sm icon-transition" />,
    Moisturizer: <FontAwesomeIcon icon={faBottleDroplet} className="text-sm icon-transition" />,
    Essentials: <FontAwesomeIcon icon={faBatteryFull} className="text-sm icon-transition" />,
    First_Aid_Kit: <FontAwesomeIcon icon={faNotesMedical} className="text-sm icon-transition" />,
    Reusable_Water_bottle: <FontAwesomeIcon icon={faBottleWater} className="text-sm icon-transition" />,
    Sim_Card: <FontAwesomeIcon icon={faSimCard} className="text-sm icon-transition" />,
    Spare_Plastic_Bags: <FontAwesomeIcon icon={faBagShopping} className="text-sm icon-transition" />,
    expenses:  <FontAwesomeIcon icon={faHandHoldingDollar} className="text-sm icon-transition" />,
  Transport:  <FontAwesomeIcon icon={faPlaneSlash} className="text-sm icon-transition" />,
  Meals:  <FontAwesomeIcon icon={faBurger} className="text-sm icon-transition" />,
  Tickets:  <FontAwesomeIcon icon={faTicket} className="text-sm icon-transition" />,
  Natural_Calamities:  <FontAwesomeIcon icon={faCloudSun} className="text-sm icon-transition" />,
  Room_Heater:  <FontAwesomeIcon icon={faTemperatureHalf} className="text-sm" />,
  Priority_High:  <FontAwesomeIcon icon={faBan} className="text-sm icon-transition" />,
  Rohtang_pass:  <FontAwesomeIcon icon={faMountain} className="text-sm icon-transition" />,
  Tax:  <FontAwesomeIcon icon={faBarcode} className="text-sm icon-transition" />,
  Personal_Expenses:  <FontAwesomeIcon icon={faHandHoldingDollar} className="text-sm icon-transition" />,
  Warning:  <FontAwesomeIcon icon={faTriangleExclamation} className="text-sm icon-transition" />,
  Honeymoon_Kit:  <FontAwesomeIcon icon={faMartiniGlassCitrus} className="text-sm icon-transition" />,
  Accommodation:  <FontAwesomeIcon icon={faBed} className="text-sm icon-transition" />,
  Trip_Captain:  <FontAwesomeIcon icon={faPersonHiking} className="text-sm icon-transition" />,
  Traveler:  <FontAwesomeIcon icon={faVanShuttle} className="text-sm icon-transition" />,
  Gypsy:  <FontAwesomeIcon icon={faTruckField} className="text-sm icon-transition" />,
  Shikara_Ride:  <FontAwesomeIcon icon={faSailboat} className="text-sm icon-transition" />,
  Cake:  <FontAwesomeIcon icon={faCakeCandles} className="text-sm icon-transition" />,
  Music:  <FontAwesomeIcon icon={faMusic} className="text-sm icon-transition" />,
    
  };
  
  // Define the prop types
  interface IconProps {
    name: string;
    icon: keyof typeof thingstotakeIcons; // Ensure the key exists in thingstotakeIcons
    inc: string;
  }
  
  // Functional Component
  const Item: React.FC<IconProps> = ({ name, icon, inc }) => {
    const IconComponent = thingstotakeIcons[icon];
  
    return (
      <div className="flex flex-col p-4 rounded-lg border border-gray-200 space-y-1 justify-start">
        {/* Icon */}
        <div className="w-6 icon-transition">{IconComponent}</div>
  
        {/* Title */}
        <span className="font-semibold text-sm">{inc}</span>
  
        {/* Description */}
        <div className="text-xs text-gray-600">
          <p>{name}</p>
        </div>
      </div>
    );
  };
  return (

    <section className=" bg-white rounded-lg  lg:m-4 mt-4 shadow-md">
      <div className="overflow-hidden" >
        <div className="flex flex-col gap-2 lg:gap-2 rounded-lg bg-white p-6 ">
          {/* Heading */}
          <h2 className="text-2xl text-orange font-bold">Things to know</h2>
          <span className="font-medium  text-sm">Before you go</span>
          <hr className="border-gray-300" />
          {/* Content */}
          <div className="flex flex-col w-full ">
            <div className="grid w-full grid-cols-1 gap-4  sm:grid-cols-3">
              {/* Inclusions */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-bold text-lg">What's included</h3>
                <div className="flex flex-col space-y-2">
                  {inclution.slice(0, showMore ? thingsToTake.length : 2).map((item, index) => (
                     <Item key={index} name={item.inc} inc={item.name} icon={item.icon}/>
                  ))}

                </div>
              </div>


              <div className="flex flex-col space-y-4">
                <h3 className="font-bold text-lg">What's not included</h3>
                <div className="flex flex-col space-y-2">
                  {exclution.slice(0, showMore ? thingsToTake.length : 2).map((item, index) => (
                    <Item key={index} name={item.inc} inc={item.name} icon={item.icon}/>
                  ))}
                  <button className="text-sm font-medium text-orange-600" onClick={toggleShowMore}>
                    {showMore ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>

              {/* Things to Carry */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-bold text-lg">What to carry</h3>
                <div className="flex flex-col space-y-2">
                  {thingsToTake.slice(0, showMore ? thingsToTake.length : 2).map((item, index) => (
                    <Item key={index} name={item.inc} inc={item.name} icon={item.icon}/>
                  ))}

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* View More Button */}

    </section>

  );
}
export default Thingstoknow;
