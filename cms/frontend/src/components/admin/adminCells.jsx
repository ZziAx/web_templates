import { useEffect, useRef, useState } from "react";
import * as Iconsax from "iconsax-reactjs"
import { ImageComponent } from "../../modules/imageComponents";
import Skeleton from "react-loading-skeleton";
import { Sub } from "./text/sub";
import useNumberFormat from "../../modules/hooks/useNumberFormat";
export function AdminStatusCell(props) {
  const [isActive, setActive] = useState(false);
  const { value} = props.value;
  const {loading} = props;

  const cases = {
    DRAFT: {
      title: "غیرفعال",
      color: "var(--color-neutral-400)",
    },

    PENDING: {
      title: "درانتظار تایید",
      color: "var(--color-primary-200)",
    },
    BAN: {
      title: "بن",
      color: "var(--color-danger-200)",
    },
    ACTIVE: {
      title: "فعال",
      color: "var(--color-success-200)",
    },
  };
  const v = cases[value];
  
   
  return (
    <div class="flex w-full h-full  justify-center items-center">
    <div
    
      class="flex justify-center  items-center w-[75px] h-[25px] "
    >
      <div
        style={{
          backgroundColor:!loading && v.color,
          color: "white"
        }}
        class={"flex relative h-full w-full  justify-center items-center   rounded-[5px] " + (!loading && "shadow-sm")}
      >
        <div class={!loading &&"flex w-full h-full absolute rounded-[5px] border-2 border-transparent hover:border-white opacity-[0.8]"}/>
        <Sub loading={loading} value = {v.title} fontSize={"11px"} />
      </div>


    


    </div>
    </div>
  );
}


export function AdminPriceCell(props) {
  const { value } = props.value;
  const {loading} = props;

  const toFixedPrefix = (p)=>{
    const extra = 3 - p.length ;

    for(var i = 0;i<extra;i++){
      p="0"+p;
    }

    return p;
  }
  const formatPrice = (raw)=>{
    // const _n = Number(raw);
    const _n = raw;

    var seg = [];
    // 1,200,000
    var rem = _n;
    while(rem > 10){
      const _rem = rem % 1000;
      seg.push(toFixedPrefix(String(parseInt(_rem))));
      rem = rem/1000;
    }

    const rev = seg.reverse();
    rev[0] = parseInt(rev[0]);
    const p = rev.join(",");

    return p;
  }

  const {formatter} = useNumberFormat();

  return (
    <div 
  
    class="flex w-full  items-center justify-center h-full px-[20px]">

    <div class="flex hover:bg-neutral-300 border-1 gap-3 h-full w-full justify-center items-center border-transparent hover:border-neutral-400  ">
       
       {
        value && [<Sub flex={false} loading = {loading} value={formatter(formatPrice(value))} textClassName="text-body-bold-3" />,
      <Sub flex={false} loading = {loading} value={" تومان"} textClassName = "text-body-1" className="" />
]
       }
      
      </div> 
    </div>
  );
}
export function AdminTextCell(props) {
  const { value } = props.value;
  const {loading} = props;

  return (
    <div 

    class="flex w-[200px] items-center h-full px-[20px]">

    <div class="flex hover:bg-neutral-100 border-1 h-full w-full items-center border-transparent hover:border-neutral-400  rounded-[5px]">
      <Sub loading = {loading} value={value} className="sub-2 " />

      </div> 
    </div>
  );
}

export function AdminTextImageCell(props) {
  // console.log(props.value);
  const { name, images,width = "200px"} = props.value;
  const {loading} = props;

  const cover = (Array.isArray(images) && images.length!=0 )?images[0]?.path:null;

    const ref = useRef();

  useEffect(()=>{
    const e = ref.current;
    // e.

  },[]);


  return (
    <div 
    
    ref={ref}
    class="flex relative w-full flex-row gap-3 justify-end h-full   items-center px-[20px]">


     <ImageComponent loading={loading} height="60px" image={cover}/>
    

<Sub loading={loading} value={name}/>
   
     
    </div>
  );
}
