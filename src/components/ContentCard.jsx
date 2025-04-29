import React from "react";

export default function ContentCard({ data }) {
  return (
    <div className="border rounded-lg shadow-lg p-6 sm:p-4 bg-gray-200 bg-opacity-30 backdrop-blur-md flex-grow 
    flex flex-col items-center justify-center transition duration-200 hover:scale-105">
      <img src={data.icon} alt={`${data.title} icon`} className="w-24 h-24 sm:w-16 sm:h-16 mb-4" />
      <h3 className="text-2xl sm:text-xl font-bold text-[#2F4F4F]">{data.title}</h3>
      <p className="text-lg sm:text-sm text-[#2F4F4F]">{data.description}</p>
    </div>
  );
}