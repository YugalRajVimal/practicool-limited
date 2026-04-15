import React from "react";
import { Link } from "react-router-dom";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiArrowNarrowRight,
  HiArrowSmRight,
} from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6 px-5 md:px-0 border-t-4 border-gold/80 relative z-20 ">
      {/* Background Gradient Accent */}
      <div className="absolute left-0 right-0 top-0 h-20 bg-gold/10 blur-2xl pointer-events-none -z-1" />
      {/* Main Content - 3 columns, flex, w-1/3 each */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between relative z-10 gap-10 md:gap-0">
        {/* Branding Column */}
        <div className="w-full md:w-1/3 md:pl-6 mb-8 md:mb-0 flex flex-col items-start">
          <Link to="/" className="mb-4 flex items-center gap-3 group">
            <span className="font-display text-2xl font-bold tracking-tight text-gold drop-shadow group-hover:text-white transition-all">
              Practicool
            </span>
          </Link>
          <p className="text-white/80 text-base max-w-sm mb-4 leading-relaxed">
            Smart wholesale solutions for UK retailers. Reliable fulfilment. Competitive pricing. Personal service.
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:practicoollimiteddirector@gmail.com"
              className="rounded-full p-2 bg-gold/90 hover:bg-gold/100 transition text-navy text-xl"
              aria-label="Email Practicool"
            >
              <HiMail />
            </a>
            <a
              href="tel:+447002982480"
              className="rounded-full p-2 bg-gold/90 hover:bg-gold/100 transition text-navy text-xl"
              aria-label="Call Practicool"
            >
              <HiPhone />
            </a>
            {/* <a
              href="https://goo.gl/maps/hG8VWLsYfqvPDU7J9"
              className="rounded-full p-2 bg-gold/90 hover:bg-gold/100 transition text-navy text-xl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find Practicool on the map"
            >
              <HiLocationMarker />
            </a> */}
          </div>
        </div>

        {/* Navigation/Quick Links Column */}
        <div className="w-fit  mb-8 md:mb-0 flex flex-col">
          <h3 className="text-lg font-semibold mb-4 text-gold font-display">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center group text-white/90 hover:text-gold transition font-body"
              >
                <span>Home</span>
                <HiArrowNarrowRight className="ml-2 text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="flex items-center group text-white/90 hover:text-gold transition font-body"
              >
                <span>Products</span>
                <HiArrowNarrowRight className="ml-2 text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center group text-white/90 hover:text-gold transition font-body"
              >
                <span>About</span>
                <HiArrowNarrowRight className="ml-2 text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center group text-white/90 hover:text-gold transition font-body"
              >
                <span>Contact</span>
                <HiArrowNarrowRight className="ml-2 text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Details Column */}
        <div className="w-fit flex flex-col">
          <h3 className="text-lg font-semibold mb-4 text-gold font-display">Contact</h3>
          <ul className="space-y-2">
            <li className="flex flex-row gap-2 flex-nowrap items-center ">
              <a
                href="mailto:practicoollimiteddirector@gmail.com"
                className="flex flex-row gap-2 flex-nowrap items-center group text-white/90 hover:text-gold transition font-body "
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex flex-row flex-nowrap items-center ">
                  <HiMail className="inline-block mr-2 text-gold flex-shrink-0" />
                  practicoollimiteddirector@gmail.com
                </span>
                <HiArrowSmRight className="ml-2 text-lg group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </li>
            <li className="flex flex-row gap-2 flex-nowrap items-center ">
              <a
                href="tel:+447002982480"
                className="flex flex-row gap-2 flex-nowrap items-center group text-white/90 hover:text-gold transition font-body "
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex flex-row flex-nowrap items-center ">
                  <HiPhone className="inline-block mr-2 text-gold flex-shrink-0" />
                  +44&nbsp;7002&nbsp;982480
                </span>
                <HiArrowSmRight className="ml-2 text-lg group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </li>
            <li className="flex flex-row gap-2 flex-nowrap items-center ">
              <a
                href="https://goo.gl/maps/hG8VWLsYfqvPDU7J9"
                className="flex flex-row gap-2 flex-nowrap items-center group text-white/90 hover:text-gold transition font-body "
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex flex-row flex-nowrap items-center ">
                  <HiLocationMarker className="inline-block mr-2 text-gold flex-shrink-0" />
                  30a High Road Wood Green London N22 6BX
                </span>
                <HiArrowSmRight className="ml-2 text-lg group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </li>
          </ul>
        </div>
   
      </div>
      {/* Divider */}
      <div className="my-8 border-t border-white/15"></div>
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70 font-body">
        <div>
          &copy; {new Date().getFullYear()} Practicool Ltd. All rights reserved.
        </div>
        <div>
          <span>
            Designed with <span className="text-gold">♥</span> in London.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;