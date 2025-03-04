"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faLaptop, faBagShopping, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const tripData = [
  { name: "Pachmarhi", url: "/Details/Pachmarhi" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Traveltech Home">
            <Image
              src="/images/traveltech logo.png"
              alt="Traveltech Logo"
              width={40}
              height={40}
              className="h-12 w-auto"
              priority
            />
            <span className="ml-2 text-2xl font-bold ">Traveltech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
            <div className="relative">
              <button
                className="flex items-center space-x-2  hover:text-orange-600"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                aria-label="Toggle Packages Dropdown"
              >
                <div className="flex items-center justify-between w-full px-2 py-2 font-semibold sm:px-0 sm:py-0 hover:text-orange focus:outline-none focus:text-orange" >
                  <div className="flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-6 icon-transition"><FontAwesomeIcon icon={faPaperclip} className="text-lg" /></div>
                    <div className="flex flex-row items-center justify-center cursor-pointer">
                      <p className="mt-1 text-sm font-semibold hover:text-orange-600 ">Packages</p>
                    </div>
                  </div>
                </div>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg" aria-label="Packages Dropdown">
                  {tripData.map((trip, index) => (
                    <li key={index} className="border-b last:border-0">
                      <Link href={trip.url} className="block px-4 py-2 hover:bg-gray-100" aria-label={`Go to ${trip.name}`}>
                        {trip.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <NavItem name="Corporate Tours" url="/Corporate" icon={faLaptop} />
            <NavItem name="About Us" url="/About" icon={faPaperclip} />
            <NavItem name="Travel Essentials" url="/Travelshop" icon={faBagShopping} />

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <div className="w-6 icon-transition ">

              <FontAwesomeIcon icon={faBars} className="text-2xl icon-transition" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="w-64 bg-white h-full shadow-lg px-4 py-6">
            {/* Close Button */}
            <button
              className="mb-4 text-right"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
            >
              <div className="w-6 icon-transition ">

                <FontAwesomeIcon icon={faTimes} className="text-xl icon-transition " />
              </div>
            </button>

            {/* Mobile Navigation */}
            <ul className="space-y-4" aria-label="Mobile Navigation">
              <NavItemMobile name="Corporate Tours" url="/Corporate" icon={faLaptop} setMenu={setMobileMenuOpen} />
              <NavItemMobile name="About Us" url="/About" icon={faPaperclip} setMenu={setMobileMenuOpen} />
              <NavItemMobile name="Travel Essentials" url="/Travelshop" icon={faBagShopping} setMenu={setMobileMenuOpen} />

              {/* Dropdown for Packages */}
              <li className="cursor-pointer">
                <button
                  className="flex items-center w-full space-x-2 "
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  aria-label="Toggle Packages Dropdown"
                >
                  <div className="w-6 icon-transition ">
                    <FontAwesomeIcon icon={faPaperclip} className="text-lg icon-transition" />
                  </div>

                  <span>Packages</span>
                </button>
                {isDropdownOpen && (
                  <ul className="ml-6 mt-2 space-y-2" aria-label="Packages Dropdown">
                    {tripData.map((trip, index) => (
                      <li key={index}>
                        <Link
                          href={trip.url}
                          className="block px-4 py-2 bg-gray-100 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                          aria-label={`Go to ${trip.name}`}
                        >
                          {trip.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>

            {/* WhatsApp Contact */}
            <div className="mt-6">
              <Link
                href="https://wa.me/+918982001240?text=Hey Traveltech, I want to book a trip!"
                className="block w-full bg-orange-600 text-white text-center py-2 rounded-md font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Contact us on WhatsApp"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/** Navigation Item for Desktop */
const NavItem = ({ name, url, icon }) => {
  return (
    <Link
      href={url}
      className="flex items-center space-x-2  hover:text-orange-600"
      aria-label={`Go to ${name}`}
    >
      <div className="flex items-center justify-between w-full px-2 py-2 font-semibold sm:px-0 sm:py-0 hover:text-orange focus:outline-none focus:text-orange" >
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="w-6 icon-transition">

            <FontAwesomeIcon icon={icon} className="text-lg icon-transition" />
          </div>

          <div className="flex flex-row items-center justify-center cursor-pointer">
            <p className="mt-1 text-sm font-semibold hover:text-orange-600 ">{name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

/** Navigation Item for Mobile */
const NavItemMobile = ({ name, url, icon, setMenu }) => {
  return (
    <li>
      <Link
        href={url}
        className="flex items-center space-x-2 "
        onClick={() => setMenu(false)}
        aria-label={`Go to ${name}`}
      >
        <div className="w-6 icon-transition">

          <FontAwesomeIcon icon={icon} className="text-lg icon-transition" />
        </div>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default Navbar;