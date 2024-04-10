import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";
import { Button } from "@material-tailwind/react";

const SliderSection = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        // scrollbar={{ draggable: false }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="swiper_slider_1">
          <div className="slider_text header_title text-4xl flex justify-center items-center flex-col w-full h-full">
            <h3 className="text-nowrap text-center">Back to the school,</h3>
            <p className="text-nowrap text-center"> the stylish way.</p>
            <Button className="mt-5">KNOW MORE</Button>
          </div>

        </SwiperSlide>
        <SwiperSlide className="swiper_slider_2">
          <div className="slider_text header_title text-4xl flex justify-center items-center flex-col w-full h-full">
            <h3 className="text-nowrap text-center">Back to the school,</h3>
            <p className="text-nowrap text-center"> the stylish way.</p>
            <Button className="mt-5">KNOW MORE</Button>
          </div>

        </SwiperSlide>

        <SwiperSlide className="swiper_slider_3">
          <div className="slider_text header_title text-4xl flex justify-center items-center flex-col w-full h-full">
            <h3 className="text-nowrap text-center">Back to the school,</h3>
            <p className="text-nowrap text-center"> the stylish way.</p>
            <Button className="mt-5">KNOW MORE</Button>
          </div>

        </SwiperSlide>

        <SwiperSlide className="swiper_slider_4">
          <div className="slider_text header_title text-4xl flex justify-center items-center flex-col w-full h-full">
            <h3 className="text-nowrap text-center">Back to the school,</h3>
            <p className="text-nowrap text-center"> the stylish way.</p>
            <Button className="mt-5">KNOW MORE</Button>
          </div>

        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default SliderSection;
