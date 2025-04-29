import React from "react";

export default function ContentCard({ data }) {
  return (
    <div className="px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 transition transform hover:scale-105 flex items-center space-x-4 bg-gray-200 bg-opacity-30 backdrop-blur-md"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-16 h-16"
              />
            </div>

            {/* Text Content */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2 text-[#2F4F4F]">{item.title}</h3>
              <p className="text-lg text-[#2F4F4F]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}