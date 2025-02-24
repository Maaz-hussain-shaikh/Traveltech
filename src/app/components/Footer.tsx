import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (<>


        <footer className="bg-white text-gray-700">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col lg:flex-row justify-center gap-4">
                    {/* Company Information */}


                    {/* Quick Links */}
                    <section className="flex flex-col  lg:gap-4 rounded-lg bg-blue-50 px-4 py-3 items-center">


                        <div className="flex flex-col gap-3">
                            {/* Address */}
                            <div className="flex items-start text-sm font-medium gap-2">

                                <div className="">

                                    <ul className="flex lg:flex-col flex-row gap-6 lg:gap-2 text-2xl lg:text-xl">
                                        <li><Link href="/backpacking-trips"><FontAwesomeIcon icon={faInstagram} className=" icon-transition " /></Link></li>
                                        <li><Link href="/backpacking-trips "><FontAwesomeIcon icon={faFacebook} className="icon-transition " /></Link></li>
                                        <li><Link href="/backpacking-trips"><FontAwesomeIcon icon={faYoutube} className=" icon-transition " /></Link></li>
                                        <li><Link href="/backpacking-trips"><FontAwesomeIcon icon={faWhatsapp} className="icon-transition " /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-4 rounded-lg bg-blue-50 px-4 py-3">


                        <div className="flex flex-col gap-3">
                            {/* Address */}
                            <div className="flex items-start text-sm font-medium gap-2">

                                <div className="min-w-[30%]">

                                    <ul className="flex flex-col gap-2 ">
                                        <li><Link href="/backpacking-trips"></Link></li>
                                        <li><Link href="/treks">About</Link></li>
                                        <li><Link href="/weekend-getaways">Contact Us</Link></li>
                                        <li><Link href="/biking-trips">Our Blogs</Link></li>
                                        <li><Link href="/upcoming-trips">Career With Us</Link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="flex flex-col gap-4 rounded-lg bg-blue-50 px-4 py-3">
                        {/* Heading */}
                        <h2 className="text-lg font-semibold">Contact Us</h2>

                        {/* Contact Details */}
                        <div className="flex flex-col gap-3">
                            {/* Address */}
                            <div className="flex items-start gap-2">
                                <div className="shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        aria-label="Location Icon"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M12 4a5 5 0 00-5 5c0 2.788 1.612 6.867 5 10.555 3.388-3.688 5-7.767 5-10.555a5 5 0 00-5-5zM5 9a7 7 0 0114 0c0 3.652-2.164 8.579-6.293 12.707a1 1 0 01-1.414 0C7.164 17.58 5 12.652 5 9z"
                                            clipRule="evenodd"
                                        />
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M12 10a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium">
                                    B-42, 2nd Floor, Tower- B, The Corenthum, Block A, Industrial Area,
                                    Sector 62, Noida, Uttar Pradesh 201301
                                </p>
                            </div>

                            {/* Phone Number */}
                            <div className="flex items-start gap-2">
                                <div className="shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                        aria-label="Phone Icon"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M1.485 1.29A4.364 4.364 0 00.302 3.444l-.05.258c-.778 3.946.21 7.476 3.47 10.713 2.14 2.124 3.762 2.997 5.983 3.316.36.052.736.09 1.184.123l.92.056 1.66.086c.385.022.893-.051 1.577-.212l.104-.03a4.284 4.284 0 001.598-7.064l-.15-.141a4.272 4.272 0 00-5.711-.034l-.193.175-1.033 1.034a.657.657 0 01-.844.072c-.544-.383-1.99-1.798-2.342-2.28a.66.66 0 01.065-.855l.91-.91.077-.064.116-.107.063-.062a4.408 4.408 0 000-6.228 4.396 4.396 0 00-6.221 0zM2.88 2.687a2.424 2.424 0 013.43 0 2.43 2.43 0 01-.182 3.6l-.983.976a2.636 2.636 0 00-.262 3.42c.48.656 2.08 2.222 2.798 2.729l.138.091a2.63 2.63 0 003.238-.382l.954-.956.013-.007.092-.09a2.3 2.3 0 013.236.02c.9.9.9 2.36 0 3.26l-.153.14a2.281 2.281 0 01-.518.327l-.149.06-.254.056-.268.05a2.254 2.254 0 01-.429.043l-2.004-.104-.53-.035-.461-.039c-.216-.02-.412-.044-.6-.07-1.779-.256-3.022-.925-4.874-2.764-2.691-2.672-3.525-5.436-2.975-8.65l.057-.312c.052-.32.149-.595.292-.847.088-.158.24-.362.394-.516z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <Link
                                    href="tel:+918871658568"
                                    className="text-sm font-medium"
                                    aria-label="Call us at +91-8871658568"
                                >
                                    +91 8871658568
                                </Link>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-2">
                                <div className="shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        aria-label="Email Icon"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3H5zm-.174 2.015C4.882 6.005 4.94 6 5 6h14c.06 0 .118.005.174.015L12 10.798 4.826 6.015zM4 7.87V17a1 1 0 001 1h14a1 1 0 001-1V7.869l-7.445 4.963a1 1 0 01-1.11 0L4 7.87z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <Link
                                    href="mailto:info@travelltech.com"
                                    className="text-sm font-medium"
                                    aria-label="Email us at info@travelltech.com"
                                >
                                    info@travelltech.com
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer Bottom */}
                <hr className="my-6 border-gray-300" />
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© 2015-2024 Travel tech Pvt. Ltd.</p>
                    <div className="flex items-center gap-5">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <div className="h-6 w-[1px] bg-gray-300"></div>
                        <Link href="/terms-and-condition">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer></>
    );
};

export default Footer;