import { AdminSideBar } from "../components/admin/adminSideBar";
import { AdminHeader } from "../components/admin/adminHeader";
import { Outlet } from "react-router-dom";
import React, {
  Component,
  useState,
  createContext,
  createElement,
  useContext,
  ReactNode,
  createRef,
  Suspense,
  useRef,
} from "react";
import {
  AdminPanelCommonContext,
  AdminProfileContext,
  SideBarSettingsContext,
} from "../core/admin-panel";
import BottomModal from "../modules/bottomModal";
import { ModalContext } from "../modules/modalContext";
import createOrUseModal from "../modules/createOrAddModal";
import BaseAuthPage from "./admin/auth/baseAuthPage";
// const ProductContext = createContext();
import { PageBuilderContext } from "../core/admin-panel";
import {  Notification } from "iconsax-reactjs";
import { useResponsive ,ResponsiveContext} from "@shared/responsiveProvider";

const TopBarItem = ({ title }) => {
  return (
    <div class="flex w-full items-center justify-center h-[25px]  rounded-[5px] cursor-pointer hover:bg-[#606060]">
      <h4 class="text-white">{title}</h4>
    </div>
  );
};

const TopBarLogedOutItem = ({ title }) => {
  return (
    <div class="flex w-full items-center justify-center border-[1px] border-red-500 bg-[rgba(255,0,0,0.1)]  h-[25px]  rounded-[5px] cursor-pointer ">
      <h4 class="text-red-500">{title}</h4>
    </div>
  );
};

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.userHovered = false;
    this.profile = props.context.user;
    this.state = {
      profile: this.profile,
      userHovered: false,
      userSelected: false,
    };
  }

  modal() {
    return (
      <div class="flex flex-1 w-full flex-col gap-[10px] items-center justify-start ">
        <div class="flex flex-1 w-full flex-col gap-[10px] items-center justify-start">
          <div class="flex w-[40px] h-[40px] bg-blue-500 rounded-full" />
          <div class="divider h-[1px] opacity-10" />
          <TopBarItem title="تغییر نام کاربری" />
        </div>
        <TopBarLogedOutItem title="خروج" />
      </div>
    );
  }

  render() {
    const height = 35;
    const itemSize = 20;
    const itemBaseStyle = {
      display: "flex",
      width: itemSize,
      height: itemSize,
    };

    var { userHovered, profile, userSelected } = this.state;

    const {username,image} = profile;
    
    return (
      // <ProductContext.Provider

      <div class="">
        <div
          class={`absolute top-[40px] right-[5px]  rounded-[10px] flex flex-col justify-start items-center card-box-shadow w-[150px] h-[200px] py-[10px] px-[10px] bg-[#303030] z-200 ${userSelected ? "visible" : "hidden"}`}
        >
          <this.modal />
        </div>
        <div
          style={{
            backgroundColor: "rgb(0, 0, 0)",
            height: height,
          }}
          class="flex flex-row-reverse justify-between items-center px-[5px] w-screen"
        >
          <div class="flex    flex-row gap-[20px]">
            <div class="  w-[28px] h-[28px] bg-[#232425] rounded-lg p-[2px] items-center justify-center  normal-transition cursor-pointer">
              {/* <span class="text-white">not</span> */}

              <Notification color="white" class=" w-full h-full"/>
            </div>

            <div
              onMouseEnter={() => {
                this.setState({ userHovered: true });
              }}
              onMouseLeave={() => {
                this.setState({ userHovered: false });
              }}
              style={{
                width: userHovered && "150px",
              }}
              class="flex relative bg-[#2f2f2f] justify-end items-center w-[28px]  overflow-hidden normal-transition cursor-pointer rounded-lg h-full"
            >
              {
                <div class="absolute left-0 w-[120px] flex-row justify-center flex  flex-1">
                  <span
                    class={` sub-2 font-[200] left-0 normal-transition text-white ${userHovered ? "opacity-[1.0]" : "opacity-[0.0]"}`}
                  >
                    {userHovered && username}
                  </span>
                </div>
              }
              <div
                onClick={() => this.setState({ userSelected: !userSelected })}
                class={` flex  w-[28px] h-[28px] bg-red-500 overflow-hidden  rounded-lg hover:shadow-3xl   ${userHovered ? "scale-[0.9]" : "hover:scale-[1.0]"} normal-transition cursor-pointer`}
              >
                <img src={image} />
              </div>


            </div>
          </div>

          <div class=""></div>

          <div>
            <div class="flex flex-row items-center gap-1">
              <div class="flex w-[5px] h-[5px] bg-success-200 circle" />

              <span class="sub-1 text-white">۱۰</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function Body(props) {
  const {isMobileSm} = useResponsive();
    return (
      <div
        style={{
          width: isMobileSm?"":`calc(100% - ${SideBarSettingsContext.expanded ? SideBarSettingsContext.expandedWidth : SideBarSettingsContext.width}px)`,
        }}
        class="flex flex-col normal-transition h-screen justify-between  items-start  h-full"
      >
       

        <AdminHeader />
       
        <div class="flex h-[calc(100%-40px)] w-full">
          <Outlet />
        </div>
      </div>
    );
  }

export function AdminPanel() {
  const [expanded, setExpanded] = useState(SideBarSettingsContext.expanded);

  const profileContext = useContext(AdminProfileContext); 


  const [_overlayConfig,_setOverlayConfig] = useState({overlays:[],opened:false});

  const {overlays,opened} = _overlayConfig;
  const {isMobileMd,isMobileSm} = useResponsive();

  // return <div class="bg-red-200 flex ">
  //   <text style={{
  //     fontFamily: '"IRANYekan", Helvetica, Arial, sans-serif',
  //     fontWeight:"bold"
  //   }}>
  //     سلام به تو
  //   </text>
  // </div>
  return (
    <AdminPanelCommonContext value={{
      overlays : overlays,
      addOverlay:(overlay)=>{
        // _overlayConfig.opened = true;
        // _overlayConfig.overlays.push(overlay);

        if(overlays.length>0)return;
        _setOverlayConfig({opened:true,overlays:[...overlays,overlay]});

        // _setOverlayConfig({opened:true,overlays:[...overlays,overlay]});
      },
      close:()=>{
        if(overlays.length == 0) return;
      _setOverlayConfig({opened:false,overlays:[]})
    
    },
      clear:()=>{
            if(overlays.length == 0) return;
      _setOverlayConfig({opened:false,overlays:[]})
    
      },
      open:()=>(_setOverlayConfig({opened:true,overlays:overlays})),
    }}>
        <PageBuilderContext.Provider value={{}}>

{
  opened && 
  <div class="absolute flex bg-[rgba(0,0,0,0.4)] h-screen w-screen z-10000">
{
            overlays.map((e)=>e)
          }
</div>
}

          
        

    
      <ModalContext id="0">
        {/* <div ref={_screenRef} id="_screen"  /> */}

        
        <div   class="flex flex-col  justify-start items-end h-screen w-full ">
          {/* <div> */}
            {
              !isMobileSm && <TopBar context={profileContext}/>
            }
          {/* </div> */}

          <div class="flex relative flex-row flex-1 overflow-hidden">
            <Body />
           {<AdminSideBar expanded={expanded} setExpanded={setExpanded} />} 
          </div>
        </div>
        

      </ModalContext>
    </PageBuilderContext.Provider>
    </AdminPanelCommonContext>
  );
}

// // tailwind

// import { AdminSideBar } from "../components/admin/adminSideBar";
// import { AdminHeader } from "../components/admin/adminHeader";
// import { Outlet } from "react-router-dom";

// export function AdminPanel() {
//   return (
//     <div className="flex h-screen">
//       <AdminSideBar />

//       <div className="flex flex-col flex-1">
//         <AdminHeader />
//         <div className="flex-1 p-6 bg-neutral-100">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }
