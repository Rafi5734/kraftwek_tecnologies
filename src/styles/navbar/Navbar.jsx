import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavbarMain = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <nav className="p-4 text-black">
        <div className="container mx-auto flex justify-end items-center">
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to={"/"}
                  className="font-bold me-10 text-black hover:text-orange-500 hover:border-orange-500 border-b-2 border-transparent transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about-us"}
                  className="font-bold me-10 text-black hover:text-orange-500 hover:border-orange-500 border-b-2 border-transparent transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold me-10 text-black hover:text-orange-500 hover:border-orange-500 border-b-2 border-transparent transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold me-10 text-black hover:text-orange-500 hover:border-orange-500 border-b-2 border-transparent transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to={"/faqs"}
                  className="font-bold me-10 text-black hover:text-orange-500 hover:border-orange-500 border-b-2 border-transparent transition duration-300"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="md:hidden flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        
        {isMobileMenuOpen && (
          <div className="md:hidden flex justify-end">
            <ul className="flex flex-col space-y-4 mt-4">
              <li>
                <Link to={"/"} className="font-bold text-black hover:text-orange-500 underline underline-offset-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about-us"} className="font-bold text-black hover:text-orange-500 underline underline-offset-1">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="font-bold text-black hover:text-orange-500 underline underline-offset-1">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="font-bold text-black hover:text-orange-500 underline underline-offset-1">
                  Contact
                </a>
              </li>
              <li>
                <Link to={"/faqs"} className="font-bold text-black hover:text-orange-500 underline underline-offset-1">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarMain;
