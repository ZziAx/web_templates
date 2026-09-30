import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import AdminListImageItem from "./admin/adminListImageItem";
import { useEffect, useMemo, useState } from "react";
import { BASE_URL, UPLOAD_URL } from "../../../core/axios";
import { useResponsive } from "@shared/responsiveProvider";



export function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotSize = 6;
  const {aspect} = props;

  const {isMobileMd,isLaptop} =useResponsive();

  const items = [
    {
      mobile:
        "/uploads/static/banner_SlideBanner_1uZbmi_5e9ba89f-e82c-4c70-a48f-588f19dc9d95.webp",
      laptop:
        "/uploads/static/banner_SlideBanner_1uZbmi_5e9ba89f-e82c-4c70-a48f-588f19dc9d95.webp",
    },
    {
      mobile:
        "/uploads/static/banner_SlideBanner_jiIARD_73a5aefc-66e7-4d4e-ba6d-3fd456d83487.webp",
      laptop:
        "/uploads/static/banner_SlideBanner_jiIARD_73a5aefc-66e7-4d4e-ba6d-3fd456d83487.webp",
    },
    {
      mobile:
        "/uploads/static/banner_SlideBanner_gF6WTh_02b25cf7-8591-4692-8897-9dd2b6b72f7b.webp",
      laptop:
        "/uploads/static/banner_SlideBanner_gF6WTh_02b25cf7-8591-4692-8897-9dd2b6b72f7b.webp",
    },
    {
      mobile:
        "/uploads/static/banner_SlideBanner_ivCdV6_74dad0e9-b7d3-4469-b75d-d4be64c84351.webp",
      laptop:
        "/uploads/static/banner_SlideBanner_ivCdV6_74dad0e9-b7d3-4469-b75d-d4be64c84351.webp",
    },
  ];





  return (
    <div class="w-full  mx-auto">
      <div class="relative flex flex-1 justify-center items-center w-full h-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          grabCursor={true}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <a href="">
              <div
                class={`flex items-center  justify-center bg-black overflow-hidden `}
              >
                {/* 1080/540 */}
                <img
                  class="flex h-full  object-cover"
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
