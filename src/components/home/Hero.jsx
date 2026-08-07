import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import HeroSlideOne from "./herocomponent/HeroSlideOne";
import HeroSlideTwo from "./herocomponent/HeroSlideTwo";
const Hero = () => {
  return (
    <section>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <HeroSlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlideTwo />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
