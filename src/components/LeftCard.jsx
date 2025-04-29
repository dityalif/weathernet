import React from "react";

export default function LeftCard({ data }) {
  return (
    <div className="border rounded-lg shadow-lg p-6 sm:p-4 bg-gray-200 bg-opacity-30 backdrop-blur-md 
    flex-grow flex flex-col justify-center transition duration-200 hover:scale-105">
      <h3 className="text-2xl sm:text-xl font-bold mb-4 text-[#2F4F4F]">Details</h3>
      <p className="text-lg sm:text-sm text-[#2F4F4F]">
        <strong>Feels Like:</strong> {data.feelsLike}°C
      </p>
      <p className="text-lg sm:text-sm text-[#2F4F4F]">
        <strong>Wind Speed:</strong> {data.windSpeed} km/h
      </p>
    </div>
  );
}