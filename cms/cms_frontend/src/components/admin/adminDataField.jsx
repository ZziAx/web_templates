import { useContext } from "react";
import { ShimmerWrapper } from "./shimmerWrapper";
import { AdminListViewContext } from "../../core/admin-panel";
import {useResponsive} from "@shared/responsiveProvider";
export function AdminDataField(props) {
  const title = props.title;
  const centerTitle = props.centerTitle;
  const headerSize = props.headerSize;
  const bottomActions = props.bottomActions;
  const showDot = props.showDot;

  const loading = props.loading;
  const actionVisible = props.actionVisible;


  const {isMobileSm} = useResponsive();
  // border-1 border-neutral-250
  return (
    <div dir="rtl" class={`flex flex-1 flex-col ${isMobileSm && 'gap-5'} p-5 gap-4 bg-white justify-end`}>
      <div 
      style={{
        height:headerSize
      }}
      class={`flex  normal-transition flex-col ${isMobileSm && 'gap-5'} items-start`}>
        
        <div class={`flex w-full ${isMobileSm?'flex-col gap-3 items-center':'flex-row items-start'}   justify-between`}>
         
          <AdminDataFieldTitle loading = {loading} centerTitle={centerTitle} title={title} showDot={showDot}/>
         
          {<div
          class={`normal-transition  ${actionVisible?"opacity-100 translate-x-0":"opacity-0 -translate-x-[100%]"}`}
          >
            {props.headerActions}
            </div>}
          {/* actionVisible */}
        </div>

        {bottomActions}
        
      </div>

      {props.children}
    </div>
  );
}

export function AdminDataFieldTitle({ title, centerTitle,showDot = true}) {
  const listContext = useContext(AdminListViewContext);
  const loading = !listContext.initialized;
  const dotSize = "15px";

  const {isMobileSm} = useResponsive();
  return (
    <div
      class={`flex flex-1 items-center gap-5 flex-row  w-full ${centerTitle ? "justify-center" : "justify-start"}`}
    >
      <ShimmerWrapper loading={loading} width="15px" height="15px" circle>
      <div 
      style={{
        height:dotSize,
        aspectRatio:1.0,
        
      }}
      class={`flex   bg-primary-400   shadow-2xl normal-transition rounded-full ${showDot?"opacity-100":"opacity-0"}`} />
    
      </ShimmerWrapper>
      
      <ShimmerWrapper loading={loading} width="200px" height="15px" >
 {
  isMobileSm? <h2
      style={{
        translate:!showDot && "35px"
      }}
      >{title}</h2>: <h2
      className="normal-transition"
      style={{
        translate:!showDot && "35px"
      }}
      >{title}</h2>
 }


      </ShimmerWrapper>

    
    </div>
  );
}
