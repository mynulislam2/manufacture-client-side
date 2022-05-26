import React from "react";
import { Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
// const swiper = new Swiper('');
const Banner = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper1"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:" linear-gradient(rgba(52, 155, 235,0.1), rgba(0, 0, 0, 0.2)),url(https://demo.webdigify.com/WCM01/WCM022_hammer/wp-content/uploads/2022/05/Main-banner-02.jpg)"
          }}
          data-swiper-parallax="-10%"
        ></div>
        <SwiperSlide>
          <div className=" uppercase">
            <div className="title" data-swiper-parallax="-300%">
              best discount up to 50% off
            </div>
            <div className="subtitle" data-swiper-parallax="-200%">
              best power tools
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                get up to 50% discount
              </p>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="uppercase">
            <div className="title" data-swiper-parallax="-300%">
              best discount up to 50% off
            </div>
            <div className="subtitle" data-swiper-parallax="-200%">
              summer 10% sale          </div>
            <div className="text" data-swiper-parallax="-100">

              <p>for all power tools</p>

            </div>
          </div>

        </SwiperSlide>
      </Swiper>
    </div>

  );
};

export default Banner;