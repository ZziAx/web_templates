import { Column } from "../layout/column";
import { Row } from "../layout/row";
import { ShoppingBag, SearchNormal1, Link } from "iconsax-reactjs";
import Logo from "@/assets/logo.svg?react";
import { NavLink } from "react-router-dom";

function SearchBar() {
  return (
    <NavLink className="flex flex-1"  to={"/search"} end>
    
    <div class="flex h-full w-full bg-neutral-100 p-3 rounded">

      <Row class="flex flex-1 gap-2 justify-end items-center">
        <h4 class="font-iranyekan text-[13px]  text-neutral-500">جستجو</h4>
        <SearchNormal1 size="26" color="black" />
      </Row>

    </div>
    </NavLink>

  );
}

export function Header() {
  const navs = ["سوپرمارکت", "پرفروش ترین ها", "Orange"];



  return (
    <div
      className="flex w-full justify-between flex-row shadow border-b-1 border-solid  border-black-200 pt-4 pr-4"
     
    >
      <div class="flex flex-1 h-32" >
        
        <Column class="flex h-full p-4">
          <Row class="flex ">
            <div class="flex  divide-solid divide-[#C5C5C5] gap-5  justify-start items-center  flex-1 p-3 pl-6 ">
              <div class="flex h-full items-center justify-center">
                <ShoppingBag size="25" color="black" />
              </div>

              <div class="flex h-full pl-2">
                <div class="flex border px-5 font-iranyekan text-[13px] border-neutral-200 h-full items-center justify-center bg-white hover:bg-light-100  hover:text-black cursor-pointer rounded-lg  normal-transition">
                  ورود | ثبت نام
                </div>
              </div>
            </div>
          </Row>

          <Row class="flex-1"></Row>
        </Column>

        <Column>
          <div class="flex flex-1">
            <div class="flex flex-3 bg-blue-200  h-full">
              <Row class="flex flex-row gap-6">
                <SearchBar />

                <div className="flex  bg-red-200 justify-center items-center">
                  <Logo class="text-red-200 w-[100%]" />
                </div>
              </Row>
            </div>

          </div>

          <div class="flex flex-1 items-end justify-end">
            <ul class="flex flex-row-reverse h-[65%] gap-5">
              {navs.map((item, i) => (
                <li
                // w-[100px]
                  class="relative inline-block  underline-animate cursor-pointer p-2 h-full"
                  key={i}
                >
                  <text class="font-iranyekan line-clamp-1 text-[12px] text-neutral-600">
                    {item}
                  </text>
                </li>
              ))}
            </ul>
          </div>


        </Column>
      </div>
    </div>
  );
}
