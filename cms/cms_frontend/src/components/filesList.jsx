import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AdminListImageItem from "./admin/adminListImageItem";
import { useState } from "react";

export function FilesList(props) {
  const { items, aspect = 1.0 } = props;

  if (items.length == 0) return;

  return (
    <div class="flex shadow-box p-1  w-full ">
      <div class="flex flex-row gap-2 flex-1 ">
        {items.map((item, index) => (
          <AdminListImageItem item={item} aspect={aspect}/>
        ))}
      </div>
    </div>
  );
}

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotSize = 6;

  const items = [1, 2, 3];

  return (
    <div class="w-full  mx-auto">
      <div class="relative flex flex-1 justify-center items-center w-full h-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          grabCursor={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {items.map((item) => (
            <SwiperSlide key={item}>
              <div class="flex items-center justify-center ">
                <img
                  class="flex w-full "
                  src="https://picsum.photos/1219/300?1"
                />
              </div>
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
