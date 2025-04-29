import React, { useState, useEffect } from "react";
import ContentCard from "../components/ContentCard";
import LeftCard from "../components/LeftCard";
import RightCard from "../components/RightCard";

const Home = () => {
  const weatherData = [
    {
      title: "Jakarta",
      description: "Sunny, 30°C",
      icon: "/img/sunny.png",
      feelsLike: 32,
      windSpeed: 15,
      humidity: 60,
      uvIndex: 7,
      lastUpdated: "10:00 AM",
    },
    {
      title: "Bandung",
      description: "Thunderstorm, 24°C",
      icon: "/img/storm.png",
      feelsLike: 23,
      windSpeed: 20,
      humidity: 80,
      uvIndex: 5,
      lastUpdated: "9:45 AM",
    },
    {
      title: "Surabaya",
      description: "Cloudy, 28°C",
      icon: "/img/cloudy.png",
      feelsLike: 29,
      windSpeed: 10,
      humidity: 70,
      uvIndex: 6,
      lastUpdated: "10:15 AM",
    },
  ];

  const [selectedCity, setSelectedCity] = useState("Jakarta");
  const [isFirstLoad, setIsFirstLoad] = useState(true); 
  
  useEffect(() => {
    if (!isFirstLoad) {
      alert(`You selected ${selectedCity}!`);
    } else {
      setIsFirstLoad(false); 
    }
  }, [selectedCity]);

  const filteredData = weatherData.find((city) => city.title === selectedCity);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full px-4 sm:px-8 pt-16 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2F4F4F]">Welcome to WeatherNet</h1>
      <p className="text-lg sm:text-xl text-[#2F4F4F] mb-6">Check the current weather in your city!</p>

      {/* Dropdown to select city */}
      <div className="mb-8">
        <label htmlFor="city" className="mr-4 text-base sm:text-lg font-semibold text-[#2F4F4F]">
          Select City:
        </label>
        <select
          id="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="p-2 border rounded-lg text-[#2F4F4F] transition duration-200"
        >
          {weatherData.map((city) => (
            <option key={city.title} value={city.title}>
              {city.title}
            </option>
          ))}
        </select>
      </div>

      {/* Cards Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl gap-6">
        <LeftCard data={filteredData} />
        <ContentCard data={filteredData} />
        <RightCard data={filteredData} />
      </div>

      {/* Footer */}
      <footer className="w-full mt-16 py-4 text-[#2F4F4F]">
        <p className="text-sm">
          © {new Date().getFullYear()} WeatherNet. All rights reserved. Created by Ditya
        </p>
      </footer>
    </div>
  );
};

export default Home;