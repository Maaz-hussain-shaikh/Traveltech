// Importing an icon instead of Material Icons
import Link from "next/link";
import Slider from "./Slider"
import style from "../styles/TourOffer.module.css"
import Firstintro from "./Firstintro";

export default function Card() {
      const destinationard = [
         {
          name: "Har Ki Dun Trek",
          url: "/images/Himachal.png",
          href: "/details/Panchmarhi",
        },
        {
          name: "Brahmatal Trek",
          url: "/images/Himachal.png",
          href: "/details/Panchmarhi",
        },
        {
          name: "Kedarkantha Trek",
          url: "/images/Himachal.png",
          href: "/details/Panchmarhi",
        },
        {
          name: "Kedarkantha Trek",
          url: "/images/Himachal.png",
          href: "/details/Panchmarhi",
        }
        // ]Add more destinations as needed
      ]
    
    return (
        <>
            <Slider/>
            <div className={`${style.jCihag}`}>
      <div className={`${style.kwYMGm}`}>
        {/* Section Heading */}
        <div className=" flex items-center text-[#515151] text-[26px] font-[400] leading-[39px]  justify-center">
          

          <h2 className="dlvSJV text-2xl font-black font-bold text-center sm:text-4xl">
            Discover the <span className="text-orange-600">Trendiest</span> Travel Spots
          </h2>
        </div>

      </div>

      {/* Destination Cards */}
      <div className={`${style.iNvskg}`}>
        {Object.keys(destinationard).map((elm, index) => {
          const destination = destinationard[index];
          return (
            <Link href={destination.href} key={elm}>
              <div
                className={`${style.fxsTJR}`}
                style={{
                  backgroundImage: `url(${destination.url})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                {/* Gradient Overlay */}
                <div className={`${style.iuvGsx}`}></div>

                {/* Content */}
                <div className={`${style.cAnrOf}`}>
                  {/* Add any content here (e.g., destination name, price, etc.) */}
              
                </div>

                {/* Shimmer Effect */}
                <div className={`${style.SnjhR} `}></div>
              </div>
            </Link>
          );
        })}
      </div>
      
    </div>
    <Firstintro/>
    
        </>
    );
}
