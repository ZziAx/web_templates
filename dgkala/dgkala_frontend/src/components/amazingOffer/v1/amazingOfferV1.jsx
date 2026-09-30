import { useEffect, useState } from "react";
import Timer from "../../../modules/timer";
import { UPLOAD_URL } from "../../../core/axios";
import Toman from "@/assets/toman.svg?react";
import useNumberFormat from "../../../../modules/useNumberFormat";
import "./amazingOfferV1.css";
import { useResponsive } from "@shared/responsiveProvider";

function _AmazingOfferItem({ item, className = "" }) {

  const { formatter } = useNumberFormat();
  return (
    <a
      href=""
      className={`amazingOfferV1-item-box ${className}`}
    >
      <div class="flex flex-1">
        <img src={UPLOAD_URL + item.image} class="object-cover" />
      </div>

      <div class="flex flex-col items-end gap-1 flex-3 ">
        <div class="flex">
          <span class="!text-[12px] line-clamp-2 !overflow-hidden">
            {item.description}
          </span>
        </div>

        <div class="flex flex-row gap-1 flex-1 items-center ">
          <Toman class="flex w-[14px] h-[14px] " />

          <span class="!text-[16px]">{formatter(29000)}</span>
        </div>
      </div>
    </a>
  );
}

export function AmazingOffer({
  items,
  className = "bg-[#d52d4f]",
  remained = new Date(2027, 2, 2),
}) {
  // isMobileLg
  const {isTablet} = useResponsive();
    
  return (
    <div className={`flex w-full ${isTablet && "px-4"}`}>
    <div
      enterKeyHint="hh"
      alt="erw"
      className={`amazingOfferV1-container ${className} ${isTablet && "rounded-[var(--radius-amazingOfferV1_xl)]"}`}
    >
      <div className="flex w-full flex-row-reverse gap-1  overflow-x-auto hideScroll">
        <div class="flex flex-col items-center justify-center aspect-[0.7] ">
          <span class="line-clamp-2 text-right !text-[20px] text-white">
            پیشنهاد
            <br /> شگفت انگیز
          </span>
          {/* <Timer debug={true} /> */}
        </div>

        {items.map((item, index) => (
          <_AmazingOfferItem
            item={item}
            className={`${index === 0 ? "amazingOfferV1-first-item" : ""} ${index === items.length - 1 ? "amazingOfferV1-last-item" : ""}`}
          />
        ))}

        <div class="amazingOfferV1-more-box">
          <h4>مشاهده همه</h4>
        </div>

      </div>
    </div>
    </div>
  );
}
