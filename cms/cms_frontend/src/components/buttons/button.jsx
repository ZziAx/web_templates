export function Button(props) {
    const onClick=props.onClick;

    const {fgColor,bgColor,children,twPadding = "p-[20px]",className = ""} =props ;
    // text-white
  return (
    
    <button 
    onClick={onClick}
    style={{
      backgroundColor:bgColor,
      color:fgColor,
      
    }}
    
    class={`flex  w-auto w-min-[140px]  !border-none !shadow-none  !hover:bg-red-200  h-[40px] items-center justify-center  rounded-[7px]
    
    ${twPadding}

    `+className}>


      <div class="font-iranyekan flex-row cursor-pointer relative text-[14px] flex-1  items-center justify-center font-bold ">
        {children}
      </div>

    </button>
  );
}
