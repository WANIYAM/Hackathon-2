"use client"
import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


const UpperHeader = () => {
  return (
    <div className="bg-white shadow-sm py-3 px-6">
      <div className="flex justify-between items-center">
        {/* Left: Search Icon */}
        <button className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </button>
        {/* Center Section: Title */}
        <div className="flex flex-1 justify-center">
          <h1 className="text-xl font-semibold text-gray-800">Avion</h1>
        </div>

        {/* Right: Profile/Other Icons */}
        <div className="flex space-x-4">
          <button className="text-gray-600">
          <IoCartOutline />
          </button>
          <button className="text-gray-600">
          <CgProfile />
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default UpperHeader;





