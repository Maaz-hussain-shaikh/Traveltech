"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";

// Skeleton Loader Component
const SkeletonCard = () => (
  <div className="relative block overflow-hidden rounded-lg h-[350px] sm:h-[350px] lg:h-[360px] 2xl:h-[490px] animate-pulse bg-gray-200">
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent rounded-lg" />
    <div className="absolute bottom-3 left-2 right-2 w-[calc(100%-1rem)]">
      <div className="h-6 bg-gray-300 rounded-full w-3/4 mb-3" />
      <div className="h-4 bg-gray-300 rounded-full w-1/2 mb-4" />
      <div className="h-5 bg-gray-300 rounded-md w-full mb-2" />
      <div className="flex gap-2">
        <div className="h-4 bg-gray-300 rounded-full w-1/4" />
        <div className="h-4 bg-gray-300 rounded-full w-1/4" />
      </div>
    </div>
  </div>
);

const Slider = () => {
  const API_URL = "https://traveltechbackend.vercel.app/traveltech/api/getCards?status=Inactive";
  const regions = ["South India", "West India", "North India"];
  const swiperRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setData(response.data);
        console.log(response.data ) // Ensure data is always an array
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section aria-label="Group Departures" className="lg:px-16 px-2 py-8">
      {/* Section Header */}
      <header className="flex items-center justify-between px-1 mt-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-medium capitalize lg:text-4xl">
            Group Departures
          </h1>
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

        {/* Navigation Controls */}
        <div className="flex gap-4 mt-7 justify-end">
          <button
            onClick={() => swiperRef.current?.slidePrev()} // Move to the previous slide
            className="rounded-full border border-orange bg-orange p-2 text-white transition-all duration-300 ease-out hover:bg-white hover:text-blue-600 lg:p-3"
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
            className="rounded-full border border-orange bg-orange p-2 text-white transition-all duration-300 ease-out hover:bg-white hover:text-blue-600 lg:p-3"
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
      </header>

      {/* Swiper Slider */}
      <div className="container mx-auto mt-8">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {data?.map((card) => (
              <SwiperSlide key={card.id}>
              <Link href={`/details/${card.id}`}>
                <div className="relative block overflow-hidden rounded-lg text-white h-[350px] sm:h-[350px] lg:h-[360px] 2xl:h-[490px] group">
                  {/* Image */}
                  <Image
                    src={card.imgurl_1}
                    alt={card.title}
                    fill
                    className="rounded-lg object-cover"
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-t from-black/90 from-10% via-black/0 via-65% to-black/0 to-90%"></div>

                  {/* Best Seller Badge */}
                  <div className="absolute left-0 top-3 rounded-r-lg bg-green-500 px-2 py-1 text-[10px] text-white font-semibold">
                    {card.tag}
                  </div>
                  {/* Content */}
                  <div className="absolute bottom-3 left-2 right-2 w-[calc(100%-1rem)] text-white">
                    {/* Title */}
                   
                    {card.tag && (
                        <h2 className="line-clamp-2 text-sm font-semibold leading-4">
                          {card.tag}
                        </h2>
                      )}
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
                        <p className="text-[10px]">{card.duration}</p>
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
                      <p className="text-[14px] font-medium text-white">₹ {card.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
         
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Slider;
