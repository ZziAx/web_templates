import viteLogo from '/vite.svg'
import Logo from '/Tlogo.png'
import { useResponsive ,ResponsiveContext} from "@shared/responsiveProvider";



export function AdminHeader(){

    const {isMobileSm} = useResponsive();
    // !isMobileSm
    if(isMobileSm){
        return <div class="flex h-[40px] w-screen bg-black border-b-1 border-b-black ">
            <div class="flex flex-1 bg-white">
            </div>
        </div>
    }

    return (
        <div class="flex flex-col w-screen bg-white  h-[80px] border-b-1 border-neutral-200">
                <div class="flex flex-row items-center  px-[20px] w-full h-[80px]">

                     <div 
                     style={{
                        background:"linear-gradient(10deg, var(--color-primary-400), var(--color-primary-300))"
                     }}
                     class="flex aspect-[1.0] primary-shadow   justify-center items-center h-[50px]  rounded-[10px]">

<span 

class="font-tenet translate-y-[6px] text-[50px] font-400 text-white opacity-80">
    T
</span>
                        </div>
                    {/* <div class="flex w-[50px] h-[50px]  p-1">

                   
                        <img src={viteLogo}/>

                       
                        

                        

                    </div> */}
                </div>
            </div>
    );
}
