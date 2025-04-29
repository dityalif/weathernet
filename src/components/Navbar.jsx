import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 px-8 text-lg tracking-wider sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center">
          <span className="text-[#2F4F4F] font-bold text-xl transition duration-200 hover:text-[#2F4F4F]/70 active:scale-90">
            WeatherNet
          </span>
        </Link>

        {/* Menu for Large Screens */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li className="transition duration-200 text-[#2F4F4F] hover:text-[#2F4F4F]/70 active:scale-90 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="transition duration-200 text-[#2F4F4F] hover:text-[#2F4F4F]/70 active:scale-90 cursor-pointer">
            <Link to="/forecast">Forecast</Link>
          </li>
          <li className="transition duration-200 text-[#2F4F4F] hover:text-[#2F4F4F]/70 active:scale-90 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      {/* Burger Menu Button for Medium and Small Screens */}
      <button
        className="block md:hidden text-[#2F4F4F] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Dropdown Menu for Medium and Small Screens */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute text-center top-16 left-0 w-full bg-white md:hidden font-semibold shadow-md`}
      >
        <li className="transition duration-200 text-[#2F4F4F] hover:text-[#2F4F4F]/70 active:scale-90 cursor-pointer p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="transition duration-200 text-[#2F4F4F] hover:text-[#2F4F4F]/70 active:scale-90 cursor-pointer p-4">
          <Link to="/forecast">Forecast</Link>
        </li>
        <li className="transition duration-200 text-[#2F4F4F] hover:text-[#2F4F4F]/70 active:scale-90 cursor-pointer p-4">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}