
import { UPLOAD_URL } from "../../../core/axios";
import Toman from "@/assets/toman.svg?react";
import useNumberFormat from "../../../../modules/useNumberFormat";
import "./singleRowSectionV2.css";
import { useResponsive } from "@shared/responsiveProvider";
import Amazing from "@/assets/amazing.svg?react";

function _SingleRowSectionItem({ item, className = "" }) {
  const { formatter } = useNumberFormat();
  return (
    <a href="" className={`sectionV2-item-box  ${className}`}>
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

export function SingleRowSection({
  items,
  className = "bg-white border-[1.5px] border-[rgba(145,158,188,1.0)]",
  remained = new Date(2027, 2, 2),
}) {
  // isMobileLg
  const { isTablet } = useResponsive();

  return (
    <div className={`flex w-full  px-4 `}>
      <div
        className={`sectionV2-container  items-end px-2 rounded-[var(--radius-sectionV2_xl)]  gap-4 flex-col ${className} ${isTablet && "rounded-[var(--radius-sectionV2_xl)]"}`}
      >

        <div class="flex flex-row h-auto justify-between items-center w-full px-5 pt-2 ">
          <span class="text-body-2 text-black hover:opacity-80">
            مشاهده همه
          </span>
          <div class="flex flex-row gap-2 items-center">
            <h2 class="text-black font-bold">پرچمداران بازار</h2>
          </div>
        </div>


{/* <div class="flex flex-1"> */}
        <div className="flex  w-full h-full   flex-row-reverse gap-1  overflow-x-auto hideScroll">
          {items.map((item, index) => (
            <_SingleRowSectionItem
              item={item}
              className={"border-l-[1px] border-neutral-200"}
            />
          ))}
        {/* </div> */}
        </div>
      </div>
    </div>
  );
}
