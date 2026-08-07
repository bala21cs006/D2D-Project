import React from "react";
import { FaCarSide, FaGift, FaHome, FaStar } from "react-icons/fa";
import { GiTrophy, GiPuzzle } from "react-icons/gi";
import { MdKitchen } from "react-icons/md";
const PromoBanner = () => {
  const items = [
    {
      text: "NEW ARRIVALS",
      icon: <FaStar />,
    },
    {
      text: "RC CARS",
      icon: <FaCarSide />,
    },
    {
      text: "KIDS FAVOURITES",
      icon: <GiPuzzle />,
    },
    {
      text: "HOME ESSENTIALS",
      icon: <FaHome />,
    },
    {
      text: "KITCHEN MUST-HAVES",
      icon: <MdKitchen />,
    },
    {
      text: "EXCLUSIVE DEALS",
      icon: <FaGift />,
    },
  ];
  return (
    <section className="py-6 overflow-hidden bg-gradient-to-r from-[#1E293B] to-[#134E4A]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center ">
            <div className="flex items-center  gap-3 mx-8 text-white text-lg font-semibold">
              <span className="text-yellow-300 text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
            <span className=" w-2 h-2 rounded-full bg-white "> </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoBanner;
