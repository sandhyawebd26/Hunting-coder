import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-indigo-950	 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href={"/"} className="text-white text-xl font-bold">
            Hunting Coder
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white text-xl focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-16 p-5">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/About" className="text-white">
            About
          </Link>
          <Link href="/Blog" className="text-white">
            Blog
          </Link>
          <Link href="#" className="text-white">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Links */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-blue-500">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/" className="text-white">
                Home
              </Link>
              <Link href="/About" className="text-white">
                About
              </Link>
              <Link href="/Blog" className="text-white">
                Blog
              </Link>
              <Link href="#" className="text-white">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
