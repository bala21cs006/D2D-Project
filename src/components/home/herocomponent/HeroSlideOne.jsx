import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSwiperSlide } from "swiper/react";
import car1 from "../../../assets/images/car1.png";
import car2 from "../../../assets/images/car2.png";
import car3 from "../../../assets/images/car3.png";
const HeroSlideOne = () => {
  const { isActive } = useSwiperSlide();

  return (
    <section className=" w-full overflow-hidden">
      <div className=" relative z-10 ">
        <div className=" bg-gradient-to-r from-[#1E293B] to-[#134E4A] min-h-[700px] grid grid-cols-2 justiy-center items-center">
          <motion.div
            className="absolute left-10"
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={
              isActive
                ? { opacity: 1, scale: [0.8, 1.1, 0.9, 1], y: [50, 0, 0] }
                : { opacity: 0, y: 50, scale: 0.5 }
            }
            transition={{ duration: 3, delay: 0.8, ease: "easeInOut" }}
          >
            <div className=" absolute inset-0"></div>

            <img
              src={car2}
              alt="car"
              className="relative w-[400px] h-[400px] drop-shadow-[0_0_30px_rgba(59,130,246,0.6)] "
            />
          </motion.div>

          <div className="pt-6 ml-120 relative left-50 ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-white text-lg font-semibold uppercase ">
                Welcome To D2D
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-white mt-5 text-6xl font-semibold  ">
                Everything You Love,
              </p>
              <p className="mt-2 text-teal-400 text-6xl font-semibold ">
                Delivered To Your Door
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-white mt-6 uppercase font-semibold">From </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              <h1 className="text-teal-400 text-6xl px-4 font-medium">
                <span className="text-xl align-top">{"\u20B9"}</span>249
              </h1>
            </motion.div>

            <motion.div
              className="mt-10 mb-5"
              initial={{ opacity: 0, y: 60 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link
                to="/products"
                className=" text-black rounded-lg px-6 py-4 bg-white  hover:bg-teal-500 hover:text-white font-semibold"
              >
                Explore Products
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center items-center  drop-shadow-[0_30px_30px_rgba(20,184,166,0.35)]"
            animate={
              isActive
                ? { y: [0, -25, 0], rotate: [0, 5, -5, 0] }
                : { y: 0, rotate: 0 }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={car1} alt="car" />
          </motion.div>

          <motion.div
            className="absolute right-10 bottom-5"
            initial={{ opacity: 0, x: 0 }}
            animate={isActive ? { opacity: 1, x: -1000 } : { opacity: 0, x: 0 }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={car3}
              alt="car"
              className="relative w-[200px] h-[200px] "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideOne;
