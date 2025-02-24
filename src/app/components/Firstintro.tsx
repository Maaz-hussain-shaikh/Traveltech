import React from "react";
import Image from "next/image";

const Firstintro = () => {
  const phoneNumber = "7566788885";
  const message = "Hey Travel Tech, I want to schedule my trip";
  
  // WhatsApp link (WhatsApp numbers don't need encoding)
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <>
    <section className="lg:p-12 p-4">
      <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-stretch w-full">
          {/* Image Section */}
          <div className="w-full h-72 sm:h-auto rounded-lg sm:w-1/2 relative overflow-hidden">
            <Image
              src="/images/staticimg/person logo.jpg"
              alt="Travel tech community"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="w-full sm:w-1/2 flex flex-col py-8 sm:py-24 sm:pl-8">
            <span className="uppercase tracking-wide font-semibold text-gray-700 sm:text-lg">
              Discover the Magic:
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold mt-2">
              Join Our Vibrant <span className="text-orange-600">Community!</span>
            </h1>
            <p className="mt-4 text-gray-600 sm:text-lg">
              Welcome to the heart of Travel tech. Our community is where
              adventure begins and friendships flourish. Whether you're a solo
              traveler or part of a group, our trips offer the perfect blend of
              luxury and affordability. Connect with fellow adventurers, enjoy
              fantastic group experiences, and empower local artists to shine.
              Safety is our priority, ensuring peace of mind for all travelers,
              including solo and female explorers. Join us on a journey of
              discovery and create memories that last a lifetime.
            </p>

            {/* Join Us Button */}
            <button className="bg-orange text-white font-semibold px-6 py-3 sm:text-xl rounded-lg w-full mt-8 hover:bg-orange-700 transition-colors">
  Join Us!
</button>
          </div>
        </div>
      </div>
    </section>

<section className="max-w-screen-lg w-full mx-auto h-96 sm:h-120 mt-2">
      <section className="relative w-full h-full">
        <div className="grid grid-cols-4 grid-rows-3 gap-1 sm:rounded-lg overflow-hidden w-full h-full">
          
          {/* Large Image 1 */}
          <figure className="w-full h-full row-span-2 col-span-2 hover:opacity-75">
            <Image
              src="/images/staticimg/staticimg1.jpg"
              alt="Group trip adventure with friends"
              width={800}
              height={600}
              className="object-cover object-center w-full h-full rounded-lg"
              priority
            />
            <figcaption className="sr-only">A thrilling group trip</figcaption>
          </figure>

          {/* Small Image 1 */}
          <figure className="w-full h-full row-span-1 col-span-1 hover:opacity-75">
            <Image
              src="/images/staticimg/Kasmir1-min.jpg"
              alt="Fun trip in Kashmir"
              width={400}
              height={300}
              className="object-cover object-center w-full h-full rounded-lg"
              loading="lazy"
            />
            <figcaption className="sr-only">A fun-filled trip in Kashmir</figcaption>
          </figure>

          {/* Small Image 2 */}
          <figure className="w-full h-full row-span-1 col-span-1 hover:opacity-75">
            <Image
              src="/images/staticimg/swagimg.jpg"
              alt="Stranger group enjoying a trip"
              width={400}
              height={300}
              className="object-cover object-center w-full h-full rounded-lg"
              loading="lazy"
            />
            <figcaption className="sr-only">A group of travelers enjoying their adventure</figcaption>
          </figure>

          {/* Large Image 2 */}
          <figure className="w-full h-full row-span-2 col-span-2 hover:opacity-75">
            <Image
              src="/images/staticimg/Kashmirgroup-min.jpg"
              alt="Travel Tech India group exploring"
              width={800}
              height={600}
              className="object-cover object-center w-full h-full rounded-lg"
              loading="lazy"
            />
            <figcaption className="sr-only">Travel Tech India group on an expedition</figcaption>
          </figure>

          {/* Large Image 3 */}
          <figure className="w-full h-full row-span-2 col-span-2 hover:opacity-75">
            <Image
              src="/images/staticimg/Groupg.jpg"
              alt="College trip adventure"
              width={800}
              height={600}
              className="object-cover object-center w-full h-full rounded-lg"
              loading="lazy"
            />
            <figcaption className="sr-only">A college group trip having fun</figcaption>
          </figure>

        </div>
      </section>
    </section>
    <section className="flex items-center justify-center py-10 ">
      <div className="container max-w-5xl bg-white rounded-lg shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Left Side - Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/staticimg/Costomer care.png"
              alt="Travel Tech Customer Care"
              width={250}
              height={150}
              className="rounded-lg"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center m-auto text-center md:text-left">
            <h1 className="mb-1.5 text-2xl sm:text-4xl font-bold">
              Lost in <span className="text-orange">Wanderlust?</span>
            </h1>
            <p className="text-gray-700 mb-4 text-lg">
              Don't hesitate! Hit the button below and let's find your perfect adventure.
            </p>
            
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange hover:bg-green-600 text-center text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            >
               Reach out to us
            </a>
          </div>

        </div>
      </div>
    </section>
</>
  );
};

export default Firstintro;