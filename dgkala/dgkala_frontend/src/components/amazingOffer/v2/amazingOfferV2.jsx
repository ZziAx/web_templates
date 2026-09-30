import { useEffect, useState } from "react";
import Timer from "../../../modules/timer";
import { UPLOAD_URL } from "../../../core/axios";
import Toman from "@/assets/toman.svg?react";
import useNumberFormat from "../../../../modules/useNumberFormat";
import "./amazingOfferV2.css";
import { useResponsive } from "@shared/responsiveProvider";
import Amazing from "@/assets/amazing.svg?react";

function _AmazingOfferItem({ item, className = "" }) {
  const { formatter } = useNumberFormat();
  return (
    <a href="" className={`amazingOfferV2-item-box  ${className}`}>
      <div class="flex flex-1  items-center justify-center">
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
  const { isTablet } = useResponsive();

  return (
    <div className={`flex w-full  px-4 `}>
      <div
        className={`amazingOfferV2-container  items-end px-2 rounded-[var(--radius-amazingOfferV2_xl)]  gap-4 flex-col ${className} ${isTablet && "rounded-[var(--radius-amazingOfferV2_xl)]"}`}
      >

        <div class="flex flex-row h-auto justify-between items-center w-full px-3">
          <span class="text-body-2 text-white hover:opacity-80">
            مشاهده همه
          </span>
          <div class="flex flex-row gap-2 items-center">
            <h2 class="text-white">تکنوتایم</h2>
            <Amazing class="fill-white w-[20px] h-[20px] flex" />
          </div>
        </div>

        <div class="flex w-full bg-[#fff] opacity-50 h-[1px]" />

{/* <div class="flex flex-1"> */}
        <div className="flex  w-full h-full flex-row-reverse gap-1 hideScroll overflow-x-auto hideScroll">
          {items.map((item, index) => (
            <_AmazingOfferItem
              item={item}
              className={"rounded-[var(--radius-amazingOfferV2_xl)]"}
            />
          ))}
        {/* </div> */}
        </div>
      </div>
    </div>
  );
}
