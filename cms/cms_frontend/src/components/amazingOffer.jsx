import { useEffect, useState } from "react";
import Timer from "../modules/timer";

function Card({ className = "" }) {
  return (
    <div
      className={`flex h-full aspect-[0.7] bg-white ${className}`}
    />
  );
}



export function AmazingOffer({remained = new Date(2027,2,2)}) {
  const items = [1, 2, 3, 4, 5];



  return (
    <div enterKeyHint="hh" alt="erw" className="flex cursor-pointer bg-[#d52d4f] py-5 h-[270px] w-full laptop:rounded-2xl mobile:rounded-none">
      <div className="flex w-full flex-row-reverse gap-1">
        <div class="flex flex-col items-center justify-center aspect-[0.7] ">

<Timer debug={true}/>


        </div>
        {items.map((item, index) => (
          <Card
            key={item}
            className={`${index === 0 ? "rounded-r-xl" : ""} ${index === items.length-1 ? "rounded-l-xl" : ""}`}
          />
        ))}

        <div class="flex flex-1  text-white justify-center items-center">
          <h4>
            مشاهده همه
          </h4>

        </div>
      </div>
    </div>
  );
}
