"use client"; // Required for Swiper to work in Next.js
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Card Data (Replace with your actual data)
const cardData = [
  {
    id: 1,
    title: "Har Ki Dun Trek",
    location: "Dehradun to Dehradun",
    difficulty: "Moderate",
    duration: "6N/7D",
    season: "Apr - Nov",
    price: "₹ 13,500",
    rating: 4.5,
    reviews: "7k",
    image: "/images/Himachal.png",
    link: "/treks/india/uttarakhand/har-ki-dun-trek",
  },
  {
    id: 2,
    title: "Har Ki Dun Trek",
    location: "Dehradun to Dehradun",
    difficulty: "Moderate",
    duration: "6N/7D",
    season: "Apr - Nov",
    price: "₹ 13,500",
    rating: 4.5,
    reviews: "7k",
    image: "/images/Himachal.png",
    link: "/treks/india/uttarakhand/har-ki-dun-trek",
  },
  {
    id: 3,
    title: "Har Ki Dun Trek",
    location: "Dehradun to Dehradun",
    difficulty: "Moderate",
    duration: "6N/7D",
    season: "Apr - Nov",
    price: "₹ 13,500",
    rating: 4.5,
    reviews: "7k",
    image: "/images/Himachal.png",
    link: "/treks/india/uttarakhand/har-ki-dun-trek",
  },
  {
    id: 4,
    title: "Har Ki Dun Trek",
    location: "Dehradun to Dehradun",
    difficulty: "Moderate",
    duration: "6N/7D",
    season: "Apr - Nov",
    price: "₹ 13,500",
    rating: 4.5,
    reviews: "7k",
    image: "/images/Himachal.png",
    link: "/treks/india/uttarakhand/har-ki-dun-trek",
  },
  {
    id: 5,
    title: "Har Ki Dun Trek",
    location: "Dehradun to Dehradun",
    difficulty: "Moderate",
    duration: "6N/7D",
    season: "Apr - Nov",
    price: "₹ 13,500",
    rating: 4.5,
    reviews: "7k",
    image: "/images/Himachal.png",
    link: "/treks/india/uttarakhand/har-ki-dun-trek",
  },
  {
    id: 6,
    title: "Har Ki Dun Trek",
    location: "Dehradun to Dehradun",
    difficulty: "Moderate",
    duration: "6N/7D",
    season: "Apr - Nov",
    price: "₹ 13,500",
    rating: 4.5,
    reviews: "7k",
    image: "/images/Himachal.png",
    link: "/treks/india/uttarakhand/har-ki-dun-trek",
  },
  // Add more cards here
];

const Slider = () => {
  const regions = ["South India", "West India", "North India"];
  const swiperRef = useRef(null);
  return (
    <>
    <div className="flex items-center justify-between lg:py-10 lg:px-16 px-4 mt-2 ">
                {/* Title Section */}

                <div className="flex flex-col gap-[0.125rem] ">
                    <p className="text-lg font-medium uppercase tracking-[0.375rem] text-gray-light lg:text-p-md undefined">category</p>

                    <h2 className="text-3xl font-medium capitalize lg:text-h2">
                        Group Departures
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {regions.map((region) => (
                            <button
                                key={region}
                                className="border border-gray-600 text-primary text-center p-2 rounded-lg focus:outline-none hover:bg-gray-200 transition"
                                aria-label={`Select ${region}`}
                            >
                                <span className="flex items-center text-sm">{region}</span>
                            </button>
                        ))}


                    </div>
                    
                </div>
                <div className="flex gap-4 mt-7 justify-end">
          <button
            onClick={() => swiperRef.current?.slidePrev()} // Move to the previous slide
            className="rounded-full border border-blue-600 bg-blue-600 p-2 text-white transition-all duration-300 ease-out hover:bg-white hover:text-blue-600 lg:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8.293 11.293a1 1 0 000 1.414l5 5a1 1 0 001.414-1.414L10.414 12l4.293-4.293a1 1 0 00-1.414-1.414l-5 5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()} // Move to the next slide
            className="rounded-full border border-blue-600 bg-blue-600 p-2 text-white transition-all duration-300 ease-out hover:bg-white hover:text-blue-600 lg:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M9.293 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 12 9.293 7.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
                
            </div>
    <section className="lg:px-16 px-2">
      <div className="container mx-auto ">

        <Swiper
          modules={[Navigation]}
          spaceBetween={16} // Space between cards
          slidesPerView={2} // Default for mobile
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 3, // 2 cards on mobile
            },
            1024: {
              slidesPerView: 4, // 3 cards on desktop
            },
          }}
          className="w-full"
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <Link href={card.link}>
                <div className="relative block overflow-hidden rounded-lg text-white h-[350px] sm:h-[350px] lg:h-[360px] 2xl:h-[490px] group">
                  {/* Image */}
                  <Image
                    src="/images/Himachal.png"
                    alt="Dayara Bugyal Trek"
                    fill
                    className="rounded-lg object-cover"
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-t from-black/90 from-10% via-black/0 via-65% to-black/0 to-90%"></div>

                  {/* Best Seller Badge */}
                  <div className="absolute left-0 top-3 rounded-r-lg bg-green-500 px-2 py-1 text-[10px] text-white font-semibold">
                    Best Seller
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-3 left-2 right-2 w-[calc(100%-1rem)] text-white">
                    {/* Title */}
                    <h2 className="line-clamp-2 text-sm font-semibold leading-4">
                      Dayara Bugyal Trek
                    </h2>

                    {/* Location */}
                    <div className="mt-2 inline-flex max-w-full items-center rounded-md bg-white px-1 py-[2px] text-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 10 14"
                        className="text-blue-500"
                      >
                        <path
                          fill="currentColor"
                          d="M5 6.666a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333zM5 .333A4.667 4.667 0 00.335 5c0 3.5 4.667 8.666 4.667 8.666S9.667 8.5 9.667 5A4.667 4.667 0 005.001.333z"
                        />
                      </svg>
                      <p className="line-clamp-1 text-gray-800 ml-1">Dehradun to Dehradun</p>
                    </div>

                    {/* Duration and Season */}
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M17.333 9A8.333 8.333 0 11.667 9a8.333 8.333 0 0116.666 0zM9 4a.833.833 0 00-.833.833v5c0 .46.373.834.833.834h4.167a.833.833 0 100-1.667H9.833V4.833A.833.833 0 009 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-[10px]">3N/4D</p>
                      </div>
                      <div className="h-[12px] w-[1px] bg-white"></div>
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            fill="currentColor"
                            d="M15 14a1 1 0 100-2 1 1 0 000 2z"
                          />
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M4 1a1 1 0 012 0v1h8V1a1 1 0 112 0v1h1a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3h1V1zM2 15V8h16v7a1 1 0 01-1 1H3a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-[10px] whitespace-nowrap">Feb</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-2 flex items-center gap-2">
                      <p className="text-[12px] font-medium text-white line-through">
                        ₹ 8,000
                      </p>
                      <p className="text-[14px] font-medium text-white">₹ 7,000</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>

    </section>
    
    </>
  );
};

export default Slider;