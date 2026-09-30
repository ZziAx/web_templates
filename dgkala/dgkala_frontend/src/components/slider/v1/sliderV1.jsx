import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import AdminListImageItem from "./admin/adminListImageItem";
import { useEffect, useMemo, useState } from "react";
import { BASE_URL, UPLOAD_URL } from "../../../core/axios";
import { useResponsive } from "@shared/responsiveProvider";

export function FilesList(props) {
  const { items, aspect = 1.0 } = props;

  if (items.length == 0) return;

  return (
    <div class="flex shadow-box p-1  w-full ">
      <div class="flex flex-row gap-2 flex-1 ">
        {items.map((item, index) => (
          <div></div>
          // <AdminListImageItem item={item} aspect={aspect}/>
        ))}
      </div>
    </div>
  );
}

export function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotSize = 6;
  const {aspect} = props;

  const {isMobileMd,isLaptop} =useResponsive();

  const items = [
    {
      mobile:
        "/uploads/static/4a155c8d1bc65f2a19c192ad57689d6b86770e86_1775473478.gif",
      laptop:
        "/uploads/static/4106b6b994531727be949eeb80df06c59b50e245_1775469826.gif",
    },
    {
      mobile:
        "/uploads/static/4c5c1621c2e6cd1673b448e27f11a2bc70b41347_1776201221.jpg",
      laptop:
        "/uploads/static/c0f0e7865814d9fe8ec8d2cc386b8d09c8ed4bef_1776201220.jpg",
    },
    {
      mobile:
        "/uploads/static/45b2510ed35d3807d0a8144d6d5327a5ed279aeb_1775997096.jpg",
      laptop:
        "/uploads/static/17345b4e97c2517a9e2da2a9b132f20eb3a08902_1775997096.jpg",
    },
    {
      mobile:
        "/uploads/static/ef3729133e4f37ce99b53463892ecd7d7f6e5098_1776262863.jpg",
      laptop:
        "/uploads/static/17345b4e97c2517a9e2da2a9b132f20eb3a08902_1775997096.jpg",
    },
  ];





  return (
    <div class="w-full  mx-auto">
      <div class="relative flex flex-1 justify-center items-center w-full h-full">
        <Swiper
          spaceBetween={isMobileMd ? 0 : 10}
          slidesPerView={isMobileMd ? 1.0 : 1.2}
          modules={[Navigation, Pagination, Autoplay]}
          grabCursor={true}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <a href="">
              <div
                class={`flex items-center  justify-center bg-black overflow-hidden aspect-auto ${!isMobileMd && "rounded-xl"}`}
              >
                {/* 1080/540 */}
                <img
                  class="flex h-full min-h-[200px]"
                  src={
                    UPLOAD_URL +
                   (isMobileMd ? item.laptop : item.mobile)
                  }
                />
              </div>
              </a>
            </SwiperSlide>
            
          ))}
        </Swiper>

        {items.length > 0 && (
          <div class={`absolute flex bottom-3 gap-2 items-center flex-1 z-50`}>
            {items.map((item, index) => (
              <div
                key={index}
                class={`rounded-full transition-all duration-200 ${index == activeIndex ? "w-[20px] h-[6px] bg-white active" : "w-[5px] h-[5px] bg-[#474747]"}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
