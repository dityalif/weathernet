import React from "react";
import ContentCard from "../components/ContentCard";

const Home = () => {
  const weatherData = [
    {
      title: "Jakarta",
      description: "Sunny, 30°C",
      icon: "/img/sunny.png", 
    },
    {
      title: "Bandung",
      description: "Thunderstorm, 24°C",
      icon: "/img/storm.png",
    },
    {
      title: "Surabaya",
      description: "Cloudy, 28°C",
      icon: "img/cloudy.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-8 text-center -mt-16">
      <h1 className="text-4xl font-bold mb-4 text-[#2F4F4F]">Welcome to WeatherNet</h1>
      <p className="text-xl text-[#2F4F4F] mb-14">Check the current weather in your city!</p>
      <div className="w-full max-w-screen-xl">
        <ContentCard data={weatherData} />
      </div>
    </div>
  );
};

export default Home;