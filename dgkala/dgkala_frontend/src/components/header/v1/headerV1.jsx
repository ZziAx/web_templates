// import { Column } from "../layout/column";
// import { Row } from "../layout/row";
import { SearchNormal1, Link } from "iconsax-reactjs";
import LogoDigikala from "@/assets/digikala.svg?react";
import SearchTrend from "@/assets/searchTrend.svg?react";
import CartOff from "@/assets/cartOff.svg?react";

import Amazing from "@/assets/amazing.svg?react";

import { NavLink } from "react-router-dom";
import { useResponsive } from "@shared/responsiveProvider";

const Column = ({ children,className }) => {
  return <div class={"flex flex-col flex-1 "+className}>{children}</div>;
};

const Row = ({ children ,className}) => {
  return <div class={"flex flex-row flex-1 "+className}>{children}</div>;
};
function SearchBar() {
  return (
    <NavLink className="flex flex-1 h-[45px]" to={"/search"} end>
      <div class="flex h-full w-full bg-neutral-100 p-3 rounded">
        <Row className="flex flex-1 gap-2 justify-end items-center">
          <span class="font-iranyekan text-body-2  text-neutral-500">جستجو </span>
          <SearchNormal1 size="26" color="black" />
        </Row>
      </div>
    </NavLink>
  );
}

export function Header() {
  const navs = [
    {
      icon: Amazing,
      name: "سوپرمارکت",
    },
    {
      icon: SearchTrend,
      name: "پرفروش ترین ها",
    },
    {
      icon: Amazing,
      name: "شگفت انگیز ها",
    },
    {
      icon: Amazing,
      name: "طلای دیجیتال",
    },
  ];

  const { isMobileLg } = useResponsive();

  if (!isMobileLg) {
    // [rgba(242, 243, 245,1.0)]
    return (
      <div class="flex flex-row  items-center justify-center gap-6 w-full bg-[#f2f3f5] h-[80px] p-[20px]">
        <div class="flex h-full aspect-[1.0] rounded-full bg-white border-[1px] border-neutral-200"></div>
       
        <div class="flex flex-row flex-1  gap-3  items-center border-[1px] border-neutral-200 bg-white  justify-end px-3 rounded-full">
       
          <LogoDigikala class="w-[120px]" />
     <span class="text-body-1 text-neutral-300">
      جستجو در
      </span>  
          <SearchNormal1 />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-between   flex-row shadow border-b-1 border-solid  border-black-200 px-6 pt-8">
      
      
      <div class="flex flex-1 h-full">

      
          <Row className="flex h-full items-start pl-6 gap-5">
            {/* <div class="flex bg-black divide-solid divide-[#C5C5C5] gap-5  justify-start items-start h-full flex-1 p-3 pl-6 "> */}
              
              
              <div class="flex h-auto items-start  p-2   justify-start">
                <a href="">
                  <CartOff class="w-[25px] h-[25px] opacity-60" />
                </a>
              </div>

              <div class="flex h-[40px] pl-2">
                <a href="">
                  <div class="flex border px-5 font-iranyekan text-[13px] border-neutral-100 h-full items-center justify-center bg-white hover:bg-light-100  hover:text-black cursor-pointer rounded-lg  normal-transition">
                    ورود | ثبت نام
                  </div>
                </a>
              </div>
            {/* </div> */}
          </Row>






        <Column className="gap-2">
          <div className="flex flex-1">
            <div class="flex flex-3   items-start  h-full">
              <Row className="flex flex-row gap-6 justify-center ">
                <SearchBar />

                <div className="flex  justify-center items-center">
                  <LogoDigikala class="text-red-200 w-[200px]" />
                </div>
              </Row>
            </div>
          </div>

          <div class="flex h-[50px] items-end justify-end ">
            <ul class="flex flex-row-reverse h-[65%] gap-5 ">
              {navs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a href="">
                    <li
                      // w-[100px]
                      class="relative flex inline-block gap-2 underline-animate flex-row transition-all duration-200 curve-linear  cursor-pointer p-2 h-full"
                      key={i}
                    >
                      <text class="font-iranyekan  line-clamp-1 text-[12px] text-neutral-600">
                        {item.name}
                      </text>

                      <div>
                        <Icon class="flex w-[20px] h-[20px] border-red-200 opacity-50" />
                      </div>

                      {/* <div class="absolute flex bottom-0 w-full h-[2px]  underline-animate"></div> */}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
        </Column>
      </div>
    </div>
  );
}

// .underline-animate{
//     /* border-bottom: 2px; */
//     animation: ripple-out 1.5s ease-out forwards;
//     background-color: red;
//     align-items: center;
//     justify-content: center;
// }
