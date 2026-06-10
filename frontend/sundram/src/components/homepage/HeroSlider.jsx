import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "/banner-img/banner1.jpg",
  },

  {
    id: 2,
    image: "/banner-img/banner2.jpg",
  },

  {
    id: 3,
    image: "/banner-img/banner3.jpg",
  },
];

const HeroSlider = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-white">

        <Swiper
          modules={[
            Autoplay,
            Pagination,
            Navigation,
          ]}
          loop={true}
          speed={900}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="heroSlider"
        >

          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>

              <div className="relative w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[580px] bg-black">

                {/* Banner Image */}
                <img
                  src={slide.image}
                  alt="banner"
                  className="
                    w-full 
                    h-full 
                    object-contain 
                    bg-white
                  "
                />

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* CUSTOM CSS */}
        <style jsx>{`
          .heroSlider .swiper-button-next,
          .heroSlider .swiper-button-prev {
            color: white;
            background: rgba(0, 0, 0, 0.45);
            width: 46px;
            height: 46px;
            border-radius: 50%;
            transition: 0.3s ease;
          }

          .heroSlider .swiper-button-next:hover,
          .heroSlider .swiper-button-prev:hover {
            background: rgba(0, 0, 0, 0.7);
          }

          .heroSlider .swiper-button-next:after,
          .heroSlider .swiper-button-prev:after {
            font-size: 16px;
            font-weight: bold;
          }

          .heroSlider .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: white;
            opacity: 0.6;
          }

          .heroSlider .swiper-pagination-bullet-active {
            width: 28px;
            border-radius: 20px;
            background: #16a34a;
            opacity: 1;
          }

          @media (max-width: 768px) {
            .heroSlider .swiper-button-next,
            .heroSlider .swiper-button-prev {
              width: 36px;
              height: 36px;
            }

            .heroSlider .swiper-button-next:after,
            .heroSlider .swiper-button-prev:after {
              font-size: 12px;
            }
          }
        `}</style>

      </section>
    </>
  );
};

export default HeroSlider;