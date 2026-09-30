import { Row } from "../../../layout/row";
import { Column } from "../../../layout/column";
import { UPLOAD_URL } from "../../../core/axios";
import {useResponsive} from "@shared/responsiveProvider";
export function CircularBar() {
  const {isMobileLg} = useResponsive();
  const items = [
    {
      src:"/uploads/static/banner_CircleCategories_XWefqs_d2fe5b9f-ff8f-46d0-92c8-4c23698dc7e9.webp",
      sub:"ساعت هوشمند"
    },
    
    {
      src:"/uploads/static/banner_CircleCategories_Xb40au_06b105a4-3a99-423b-b98b-363665f188d5.webp",
      sub:"اسپیکر"
    },
    {
      src:"/uploads/static/banner_CircleCategories_WhFuPB_fe372c5b-9ab4-4d75-bd66-ec986ac38538.webp",
      sub:"مانیتور"

    },
    
    {
      src:"/uploads/static/banner_CircleCategories_07dY9n_2ceef4a8-4be3-41ce-86ff-be8b768b5081.webp",
      sub:"دوربین مداربسته"
    },
    {src:"/uploads/static/banner_CircleCategories_vBptEt_0fea4fc8-60cc-42e5-9a94-7a187a5de13a.webp",
sub:"تلویزیون"

    },
    {src:"/uploads/static/banner_CircleCategories_jsJZ6N_f83eb53b-8a7c-41bf-b5f7-97d806bbe7cd.webp",
sub:"گوشی اپل"

    }
  ];
  return (
  
   <div class={`flex  ${isMobileLg?"h-[130px]":"h-[110px]"}  items-center justify-center  w-full `}>
    <div  class="flex flex-row-reverse items-center gap-5 justify-start h-full w-full overflow-x-auto  hideScroll">
      {
        items.map(({src,sub})=>{
          return <div class={`flex  items-center gap-1 justify-center flex-col h-full ${isMobileLg?"flex-1":"flex-shrink-0"} `}>
            {
              <img  src = {UPLOAD_URL + src} class=" aspect-[1.0] h-full rounded-full border-[2px] border-blue-500 overflow-hidden p-[3px]"/>
            }
            <span class="text-body-2">
              {
                sub
              }
            </span>
          </div>
        })
      }
    </div>
</div>
  );
}
