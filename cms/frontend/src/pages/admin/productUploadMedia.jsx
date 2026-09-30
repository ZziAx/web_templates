import { useRef, useState,useContext } from "react";
import { FilesList } from "../../components/filesList";
import { AdminMediaFilePicker } from "../../components/admin/adminFilePicker";
import { ProductContext } from "../../core/admin-panel";





export function ProductUploadMedia(props) {
  const [activeIndex, setActiveIndex] = useState(0);
    const ctx = useContext(ProductContext);
    const {images} = ctx;

  return (
    <div class="flex flex-col w-full  h-[90px]">
 

 
    
{
     images.length == 0 ? <UploadBox
        activeIndex={activeIndex}
        images={images}
      /> : <div class="flex h-full">
    <FilesList
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        items={images}
        
        // class="fill flex-1 bg-yellow-200"
      />
 </div>
}


    </div>
  );
}

function UploadBox({ images, activeIndex ,addImage}) {



    const ctx = useContext(ProductContext);
 

  return (
    <div className="flex relative flex-col items-center justify-start   w-full h-full cursor-pointer">
    

<div class="flex w-full h-full items-center justify-center  !bg-[var(--color-light-100)] border-[1px]  !border-neutral-200 border-dashed">
  <span class=" font-[400] text-[13px] text-neutral-300">

     هنوز فایلی اضافه نشده
  </span>
  
  <AdminMediaFilePicker  fromBlob = {false} images={images} addImage={(image)=>{
ctx.setImages(image);
  }} />
</div>


   
    </div>
  );
}
