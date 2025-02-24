"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css/navigation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review: "This service was absolutely amazing. Highly recommended! lorem23jkhsdjkfhjkshdfhsdhfjshdfjhsajkdhkjdhfkjhsdh",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review: "Had a fantastic experience. Great customer safsadmflkjsdklfjklsadjfkljsakldfkljsdlkjflkjsadjfjsdfkljsdljkfsservice!",
    rating: 4,
  },
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review: "A seamless and hassle-free process. Would use again!",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review: "A seamless and hassle-free process. Would use again!",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review: "A seamless and hassle-free process. Would use again!",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review: "A seamless and hassle-free process. Would use again!",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review: "A seamless and hassle-free process. Would use again!",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review: "A seamless and hassle-free process. Would use again!",
    rating: 5,
  },

];

const TestimonialSlider = () => {
  const swiperRef = useRef({});

  return (
    <>
    <div className="bg-gray-100 p-6">

   
     <div className="flex flex-col mb-6 gap-[0.125rem] items-center"><p className="text-[0.75rem] font-bold uppercase tracking-[0.375rem] text-orange lg:text-lg undefined">REVIEWS</p><h2 className="text-3xl font-medium capitalize lg:text-h2">What our Clients Say About Us</h2></div>
 
    <div className="w-full lg:px-16 mx-auto  ">
      
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ clickable: true }}
        
        // autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>

            <div className="flex h-full flex-col gap-4 rounded-lg bg-white shadow-lg p-4 ">
              {/* Background Graphic */}
              

              {/* Testimonial Text */}
              <blockquote className="max-h-32 overflow-auto text-gray-700 text-sm ">
                “The Kashmir Great Lake Trek with Just Wravel was an absolute dream come true.
                This journey touched my heart in ways I never expected, and I’m forever grateful.” Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quibusdam! Cum, officiis. Quo, magnam? Placeat, nihil. Corporis distinctio quis doloremque! Quidem perferendis qui pariatur iure ullam dolorum consectetur ad ea ex est quia eos veritatis voluptate nobis aut, sed a possimus. Accusantium ipsa vel laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae excepturi dolorum optio voluptate ducimus quam, nam ipsum perferendis delectus. Vitae exercitationem cum nemo.
              </blockquote>

              {/* User Details */}
              <div className="flex items-center gap-3">

                <div>
                  <p className="text-sm font-semibold">Anurag Bhardwaj</p>
                  <p className="text-xs text-gray-500">Verified Traveller</p>
                </div>
              </div>

              {/* Star Ratings */}
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  
                    <Star key={i} className="w-5 h-5 fill-current"/>
                   
                  
                ))}
              </div>
              <div className="grid grid-cols-6 gap-4 rounded-[0.75rem]  lg:bg-white p-4 lg:rounded-t-none 2xl:p-8">
                <div className="col-span-2">
                  <Image alt="Kashmir Winter Trip" loading="lazy" width={121} height={76} decoding="async" data-nimg="1" className="h-full max-h-[100px] w-full rounded-[.75rem] object-cover" src="/images/home-bg-1.jpg" style={{ color: "transparent" }} />
                </div>
                <div className="col-span-4">
                  <p className="mb-4 line-clamp-2 text-p-md font-medium">Kashmir Winter Trip</p><a className="btn-primary-light inline-flex items-center gap-[0.375rem] bg-blue-tint" href="/backpacking-trips/india/jammu-and-kashmir/kashmir-backpacking-trip-winter-gulmarg">Try Yourself <svg xmlns="https://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 19 12" className="text-blue">
                    <path fill="currentColor" d="M11.793 10.293a1 1 0 001.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 10-1.414 1.414L15.086 5H1.444C.923 5 .5 5.448.5 6s.423 1 .944 1h13.642l-3.293 3.293z">
                    </path>
                  </svg>
                  </a>
                </div>
              </div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-4 mt-4  justify-center">
              <button
                onClick={() => swiperRef.current?.slidePrev()} // Move to the previous slide
                className="rounded-full border border-orange bg-orange p-2 text-white transition-all duration-300 ease-out hover:bg-white hover:text-orange lg:p-3"
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
                className="rounded-full border border-orange bg-orange p-2 text-white transition-all duration-300 ease-out hover:bg-white hover:text-orange lg:p-3"
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
    </div> </div></>
  );
};

export default TestimonialSlider;
