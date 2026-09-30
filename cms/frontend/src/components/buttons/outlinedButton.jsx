import {useResponsive} from "@shared/responsiveProvider";

export function OutlinedButton(props) {
    const onClick=props.onClick;

    const {fgColor,bgColor,className = "hover:opacity-50",children,type} =props ;
   
   
    const {isMobileSm} = useResponsive();
    // text-white
  return (
    <button 
    type={type}
    onClick={onClick}
    style={{
      backgroundColor:bgColor,
      color:fgColor,

    }}
    class={`flex relative  w-auto  h-[40px] items-center justify-center cursor-pointer  rounded-[7px]
    hover:border-neutral-200
    
    overflow-hidden
    `}>
      <div class="px-[30px] ">
      <span class={`font-iranyekan  font-bold line-clamp-1 ${isMobileSm?"text-[12px]":"text-[14px]"}`}>
        {children}
      </span>
      </div>

      <div 
   
      class={`absolute flex w-full h-full hover:bg-black 
      opacity-0
    border-2 border-neutral-200
    rounded-[7px]
      `+className}/>
    </button>
  );
}
