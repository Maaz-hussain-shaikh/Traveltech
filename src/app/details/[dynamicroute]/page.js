
import ImageCom from "../ImageCom";
import Information from "../Information";


async function fetchDestinationData(slug) {
  try {
    const res = await fetch(`http://localhost:3000/api/Destination?${slug}`);
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (error) {
    console.error("Data fetch error:", error);
    return null;
  }
}

// मेटाडेटा जनरेट करने के लिए generateMetadata फ़ंक्शन
export async function generateMetadata({ params }) {
  const { dynamicroute } = await params;
  try {
    const res = await fetch(`http://localhost:3000/api/Destination?${dynamicroute}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();

    return {
      title: data.title,
      description: data.brief,
      openGraph: {
        title: data.title,
        description: data.brief,
        url: `http://localhost:3000/destination/${dynamicroute}`,
        images: [
          {
            url: "/images/home-bg-1.jpg",
            alt: data.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "Error",
      description: "Unable to fetch metadata",
    };
  }
}


export async function generateStaticParams() {
  return ["Panchmarhi", "Manali"].map((destination) => ({
    dynamicroute: destination,
  }));
}

export default async function Home({ params }) {
  const { dynamicroute } = await params;
  const data = await fetchDestinationData(dynamicroute);

  // If Data Not Found, Show Error Page
  if (!data) {
    return (
      <div className="bg-gray-100 text-center py-10">
        <p className="text-xl text-red-600">Error: This route is not found</p>
      </div>
    );
  }

    return (
      <>     
        <div className="bg-gray-100">
        <ImageCom src={data.imgurl} />
        <Information data={data} />
      </div>
      
      </>
      
    );
  } 



//   "use client";

// import React from "react";
// import Brief from "./Brief";
// import Itdropdown from "./Itdropdown";
// import Thingstoknow from "./Thingstoknow";
// import Policies from "./Policies";
// import Faq from "./Faq";
// import Pricechart from "./Pricechart";
// import Responcivedetails from "./Responcivedetails";

// interface Props {
//   name: string;
//   brief: string;
//   it: any[];
//   inclusion: string[];
//   exclusion: string[];
//   thingstotake: string[];
//   Booking: string[];
//   Cancellation: string[];
//   Genterms: string[];
//   FAQ: { question: string; answer: string }[];
//   note: string;
//   Batches: any[];
//   Quadprice: number;
//   Tripleprice: number;
//   Doubleprice: number;
//   DiscountQuadprice: number;
//   DiscountTripleprice: number;
//   DiscountDoubleprice: number;
//   duration: string;
//   pickup: string;
//   drop: string;
//   off: number;
// }

// const TripDetails: React.FC<Props> = ({
//   name,
//   brief,
//   it,
//   inclusion,
//   exclusion,
//   thingstotake,
//   Booking,
//   Cancellation,
//   Genterms,
//   FAQ,
//   note,
//   Batches,
//   Quadprice,
//   Tripleprice,
//   Doubleprice,
//   DiscountQuadprice,
//   DiscountTripleprice,
//   DiscountDoubleprice,
//   duration,
//   pickup,
//   drop,
//   off,
// }) => {
//   return (
//     <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-0">
//       <div className="flex relative flex-col pt-2 sm:flex-row">
//         {/* Left Section */}
//         <div className="flex-shrink-0 w-full sm:w-2/3 sm:mr-4 sm:mb-4">
//           <Brief name={name} brief={brief} />

//           {/* Detailed Itinerary */}
//           <div className="flex flex-col w-full mt-8">
//             <div className="flex flex-col">
//               <h2 className="text-2xl font-bold">Detailed Itinerary</h2>
//               <span className="font-medium text-text">Your days at a glance</span>
//             </div>
//             <Itdropdown info={it} />
//           </div>

//           {/* Things to Know */}
//           <Thingstoknow inclusion={inclusion} exclusion={exclusion} thingstotake={thingstotake} />

//           {/* Policies Section */}
//           <div className="flex flex-col w-full mt-8">
//             <div className="flex flex-col">
//               <h2 className="text-2xl font-bold">Our Policies</h2>
//               <span className="font-medium text-text">Please read them once</span>
//             </div>
//             <Policies name="Booking Policy" terms={Booking} />
//             <Policies name="Cancellation Policy" terms={Cancellation} />
//             <Policies name="General Policy" terms={Genterms} />
//           </div>

//           {/* FAQs Section */}
//           <div className="flex flex-col w-full mt-8">
//             <div className="flex flex-col">
//               <h2 className="text-2xl font-bold">FAQs</h2>
//               <span className="font-medium text-text">Frequently asked questions</span>
//             </div>
//             {FAQ.map((item, index) => (
//               <Faq key={index} question={item.question} answar={item.answer} />
//             ))}
//           </div>
//         </div>

//         {/* Right Section */}
//         <Pricechart
//           note={note}
//           Batches={Batches}
//           nameoftrip={name}
//           Quadprice={Quadprice}
//           Tripleprice={Tripleprice}
//           Doubleprice={Doubleprice}
//           DiscountQuadprice={DiscountQuadprice}
//           DiscountTripleprice={DiscountTripleprice}
//           DiscountDoubleprice={DiscountDoubleprice}
//           duration={duration}
//           pickup={pickup}
//           drop={drop}
//           percentage={off}
//         />

//         <Responcivedetails
//           Batches={Batches}
//           Quadprice={Quadprice}
//           nameoftrip={name}
//           Tripleprice={Tripleprice}
//           Doubleprice={Doubleprice}
//           DiscountQuadprice={DiscountQuadprice}
//           DiscountTripleprice={DiscountTripleprice}
//           DiscountDoubleprice={DiscountDoubleprice}
//           duration={duration}
//           pickup={pickup}
//           drop={drop}
//           percentage={off}
//         />
//       </div>
//     </div>
//   );
// };

// export default TripDetails;
