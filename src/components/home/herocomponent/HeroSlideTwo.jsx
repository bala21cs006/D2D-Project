import React from "react";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import { useSwiperSlide } from "swiper/react";
import frame from "../../../assets/images/frame.png"
import frame1 from "../../../assets/images/frame1.png";
const HeroSlideTwo = () => {
  const { isActive } = useSwiperSlide();
  return (
    <section className=" w-full overflow-hidden">
      <div className=" relative z-10 ">
        <div className="bg-gradient-to-r from-[#F6F1EB] to-[#E7E5E4] min-h-[700px]  grid grid-cols-2 justiy-center items-center">
          <div className="pt-6 relative ml-30">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-teal-600 text-lg font-semibold uppercase">
                Welcome to D2D
              </h1>
              <p className="text-gray-900  mt-5 text-6xl font-semibold">
                Transform Every
              </p>
              <p className="text-teal-600 text-6xl font-semibold mt-2">
                Corner Of Your Home
              </p>
            </motion.div>
            <motion.p
              className="text-gray-600 mt-6 uppercase font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              From
            </motion.p>
            <motion.h1
              className="text-teal-700 text-6xl px-4 font-medium"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                isActive ? { scale: 1, opacity: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-xl align-top">{"\u20B9"}</span>249
            </motion.h1>
            <motion.div
              className="mt-10 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/products"
                className=" rounded-lg px-6 py-4  bg-teal-600  hover:bg-teal-700 text-white font-semibold "
              >
                Explore Products
              </Link>
            </motion.div>
          </div>
          <div className="relative">
            <motion.img
              src={frame}
              alt="Frame"
              className="w-[500px] relative z-10 right-20 "
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={
                isActive
                  ? { opacity: 1, x: 0, scale: 1, y: [0, -15, 0] }
                  : { opacity: 0, x: 100, scale: 0.8 }
              }
              transition={{
                duration: 1,
                y: { duration: 4, repeat: Infinity, ease: easeInOut },
              }}
            />

            <motion.img
              src={frame1}
              alt="frame1"
              className="absolute w-[500px] right-20 top-20 z-20"
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={
                isActive
                  ? { opacity: 1, scale: 1, rotate: 0, y: [0, -25, 0] }
                  : { opacity: 0, scale: 0.5, rotate: -20 }
              }
              transition={{
                duration: 1,
                delay: 0.8,
                y: { duration: 5, ease: easeInOut },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideTwo;
