import SettingsIcon from "@/assets/admin/settings.svg?react";
import { useState, createContext, useContext } from "react";
// import "../../index.css";
import StatsIcon from "@/assets/admin/stats.svg?react";
import ProductsIcon from "@/assets/admin/box-open.svg?react";
import UsersIcon from "@/assets/admin/users.svg?react";
import PagesIcon from "@/assets/admin/layout-fluid.svg?react";
import CampaignsIcon from "@/assets/admin/megaphone.svg?react";

import DiscountIcon from "@/assets/admin/discount.svg?react";
import ExpandSideBarIcon from "@/assets/admin/window-maximize.svg?react";
import { NavLink, useLocation } from "react-router-dom";
import { SideBarSettingsContext } from "../../core/admin-panel";
import { useResponsive } from "@shared/responsiveProvider";

function SelectedBox({ selected }) {
  const { isMobileSm } = useResponsive();
  return (
    <div
      style={{
        width: SideBarSettingsContext.expanded
          ? SideBarSettingsContext.expandedBoxWidth
          : SideBarSettingsContext.iconBoxWidth,
        height: SideBarSettingsContext.iconBoxHeight,
        translate: -SideBarSettingsContext.mr,
      }}
      //  ${isActive ?" bg-red-200" : "bg-blue-200"}
      class={`absolute right-0 normal-transition side-item-base  ${selected ? "primary-shadow side-bg-selected" : ""}`}
    />
  );
}

class NavItem {
  constructor(name, icon, link, size = "20px") {
    this.name = name;
    this.icon = icon;
    this.link = link;
    this.size = size;
  }
}

//  * class Foo extends React.Component {
//        *   static contextType = Ctx
//        *   context!: React.ContextType<typeof Ctx>
//        *   render () {
//        *     return <>My context's value: {this.context}</>;
//        *   }
//        * }
export function AdminSideBar(props) {
  const width = SideBarSettingsContext.width;
  const expandedWidth = SideBarSettingsContext.expandedWidth;
  const { isMobileSm } = useResponsive();

  const { expanded, setExpanded } = props;

  // const [expanded,setExpanded] = useState(SideBarSettingsContext.expanded);

  SideBarSettingsContext.expanded = expanded;
  const items = [
    new NavItem("داشبورد", StatsIcon, "."),

    new NavItem("کاربران", UsersIcon, "users"),

    new NavItem("محصولات", ProductsIcon, "products"),

    new NavItem("صفحه ها", PagesIcon, "pages"),

    new NavItem("کمپین ها", CampaignsIcon, "campaigns"),

    new NavItem("تخفیف", DiscountIcon, "offers", "25px"),
  ];

  const sideContainerClassName =
    `absolute right-0 normal-transition h-full ` +
    (isMobileSm && expanded  && "bg-white z-1");

  if (isMobileSm) {
   
    return (
      <div class="flex ">
        {expanded && <div 
        onClick={()=>{
            SideBarSettingsContext.expanded = !expanded;
                    setExpanded(SideBarSettingsContext.expanded);
        }}
        style={{
          pointerEvents:expanded?"auto":"none"
        }}
        class={`absolute ${expanded?"opacity-100":"opacity-0"} flex w-screen h-screen inset-0 l-0 t-0 bg-[rgba(0,0,0,0.5)] z-1`} />}
        
        <div
          style={{
            width: expanded ? expandedWidth : width,
          }}
          class={ sideContainerClassName}
        >
          {
            expanded && <div class="flex h-full">
            <SideBody
              items={items}
              expanded={expanded}
              width={width}
              expandedWidth={expandedWidth}
              onSelected={()=>{
                SideBarSettingsContext.expanded = !expanded;
                    setExpanded(SideBarSettingsContext.expanded);
              }}
            />
          </div>
  }

          <div class="absolute items-center justify-center inset-0 h-[30px]">
            <div
              style={{
                translate: `-${30 / 2}px`,
              }}
              class={`absolute  left-[50%] ${isMobileSm ? "top-[5px]":"top-3"}`}
            >
              <div class=" flex justify-center  items-center w-[30px] h-[30px] border-[1px]  border-neutral-200 hover:border-neutral-500 bg-light-100  primary-shadow rounded-lg">
                <ExpandSideBarIcon
                  onClick={() => {
                    SideBarSettingsContext.expanded = !expanded;
                    setExpanded(SideBarSettingsContext.expanded);
                  }}
                  style={{
                    fill: expanded ? "var(--color-primary-400)" : null,
                  }}
                  class=" flex w-[20px] h-[20px] flex-1 side-item rotate-90"
                />
              </div>
            </div>
          </div>

          
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        width: expanded ? expandedWidth : width,
      }}
      class={sideContainerClassName}
    >
      <div class="flex flex-col justify-between items-center  py-10 h-full w-full bg-white border-l-[1px] border-neutral-200 ">
        {/* <div class="flex w-[50px] h-[50px] bg-yellow-200 side-item-base" /> */}

        <SideBody
          items={items}
          expanded={expanded}
          width={width}
          expandedWidth={expandedWidth}
        />

        <div class="flex flex-col justify-center items-center pt-10 gap-6 border-t-1 border-neutral-300 w-[80%] ">
          <SettingsIcon class=" w-[30px] side-item" />
          <div
            style={{
              width: expanded ? expandedWidth : width,
            }}
            class="absolute 
           normal-transition
           top-[25px] right-[40px]
           "
          >
            <div class="flex justify-center items-center w-[30px] h-[30px] border-[1px]  border-neutral-200 hover:border-neutral-500 bg-light-100  primary-shadow rounded-lg">
              <ExpandSideBarIcon
                onClick={() => {
                  SideBarSettingsContext.expanded = !expanded;
                  setExpanded(SideBarSettingsContext.expanded);
                }}
                style={{
                  fill: expanded ? "var(--color-primary-400)" : null,
                }}
                class=" flex w-[20px] h-[20px] flex-1 side-item rotate-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideBody(props) {
  const items = props.items;
  const expanded = props.expanded;
  const onSelected = props.onSelected;

  const parentWidth = props.width;
  const expandedParentWidth = props.expandedWidth;

  var iconBoxWidth = SideBarSettingsContext.iconBoxWidth;
  // iconBoxWidth = clamp(iconBoxWidth,0,parentWidth - padding * 2);
  const iconBoxHeight = SideBarSettingsContext.iconBoxHeight;

  // right margin to centerize
  const mr = (parentWidth - iconBoxWidth) / 2;

  const expandedBoxWidth = expandedParentWidth - mr * 2;

  SideBarSettingsContext.expandedBoxWidth = expandedBoxWidth;
  SideBarSettingsContext.mr = mr;

  const { isMobileSm } = useResponsive();
  return (
    <div class="flex flex-1 w-full   justify-center items-center">
      <div
        class={`flex flex-1 justify-center items-center flex-col   h-full w-full  gap-5 `}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const top = iconBoxHeight * index + 10 * index;

          return (
            <NavLink 
          
            key={item.link} to={item.link} replace end>
              {({ isActive }) => (
                <div
                onClick={()=>{
                    // onClick={()=>{
              onSelected();
            // }}
                }}
                  style={{
                    top: top + 120,
                    height: iconBoxHeight,
                  }}
                  class={` fill-center cursor-pointer side-item-base  ${isActive ? "" : "side-item"}`}
                >
                  <SelectedBox selected={isActive} />

                  {
                    <div class=" fill-center flex-row flex-1 ">
                      {
                        <div class="fill-center ">
                          <span
                            style={{
                              translate: -(mr + 2),
                            }}
                            class={`absolute  normal-transition font-iranyekan text-[15px] ${expanded && isActive ? "side-fg-selected" : ""} ${expanded ? "opacity-100" : "opacity-0"} }`}
                          >
                            {item.name}
                          </span>

                          <div
                            style={{
                              width: expanded ? expandedBoxWidth : iconBoxWidth,
                              translate: -mr,
                            }}
                            class="relative  fill-center"
                          />
                        </div>
                      }

                      {/* width: expanded ? expandedWidth - 20 : 70, */}

                      <div
                        class={`absolute right-0 fill-center flex-1 `}
                        style={{
                          translate: -mr,
                          width: iconBoxWidth,
                          height: iconBoxHeight,
                        }}
                      >
                        <Icon
                          class={`flex flex-1  h-full w-full ${isActive ? "side-fg-selected" : ""}`}
                          style={{
                            width: item.size,
                            height: item.size,
                          }}
                        />
                      </div>
                    </div>
                  }
                </div>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
