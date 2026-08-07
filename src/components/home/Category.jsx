import React from "react";
import { useState, useEffect } from "react";
import home from "../../assets/images/home.png";
import kitchen from "../../assets/images/kitchen.png";
import bottles from "../../assets/images/bottles.png";
import bag from "../../assets/images/bag.png";
import toys from "../../assets/images/toys.png";
import frame2 from "../../assets/images/frame2.png";
import car from "../../assets/images/car3.png";
import decor from "../../assets/images/decor.png";
import clock from "../../assets/images/clock.png";
const categories = [
  {
    name: "Home Essentials",
    image: home,
  },
  {
    name: "Kitchenware",
    image: kitchen,
  },
  {
    name: "Bottles",
    image: bottles,
  },
  {
    name: "Bags",
    image: bag,
  },
  {
    name: "Toys",
    image: toys,
  },
  {
    name: "Wallart",
    image: frame2,
  },
  {
    name: "RC Car",
    image: car,
  },
  {
    name: "Home Decor",
    image: decor,
  },
  {
    name: "Wall Clock",
    image: clock,
  },
];

const Category = () => {

  const[activeIndex,setActiveIndex] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setActiveIndex((prev)=>(prev + 1) % categories.length);
    },2000);

    return ()=>clearInterval(interval);
  },[]);
  return (
    <section className="py-16  ">
      <h2 className="text-4xl font-extrabold  ml-10 mb-8 text-gray-800  ">
        Our Categories
      </h2>

      <div className="flex justify-center  gap-14 flex-wrap">
        {categories.map((category, index) => (
          <div key={index} className="text-center group cursor-pointer">
            <div className="group cursor-pointer flex flex-col items-center">
              <div
               className={`w-36 h-36 rounded-2xl overflow-hidden bg-white border-4 flex items-center justify-center 
                ${activeIndex===index ? "scale-100 shadow-2xl border-yellow-400 " :"shadow-lg border-yellow-50 "}`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 group-hover:translate-y-2 group-hover:shadow-2xl"
                />
              </div>

              <h3 className="mt-6 text-lg font-medium text-[#1E3A5F]">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Category;
