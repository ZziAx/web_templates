import { useContext, useState } from "react";
import createOrUseModal from "../../../modules/createOrAddModal";
import React from "react";
import { ShimmerWrapper } from "../shimmerWrapper";
import { AdminListViewContext } from "../../../core/admin-panel";

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';


function DropDown({choices,triggerIcon,trigger,onSelected}){
  // const TriggerIcon = triggerIcon;
  console.log("weir ",choices);
  const dropdownTriggerButton = "flex flex-row gap-1 items-center justify-center px-5 bg-white text-body-2 rounded-[4px] border-[1.3px] hover:border-neutral-300 ";
  
  const dropDownItem = "flex  px-5 w-full items-center justify-center outline-none border-none rounded-[5px] hover:bg-[rgba(0,0,0,0.1)] ";
  const dropdownContent = "flex w-full  flex-col shadow-2xl rounded-[5px] mt-2 bg-white cursor-pointer  px-2 py-3 text-body-3 gap-3 z-20099";
  return <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>
        <button className={dropdownTriggerButton}>
          {triggerIcon} {trigger}
        </button>
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content className={dropdownContent}>
          {
            Object.entries(choices).map((c)=>{
              const k = c[0];
              const value = c[1];

              // console.log(c);
              return <RadixDropdownMenu.Item 
              onClick={()=>{
                onSelected(k);
              }}
              className={dropDownItem}>
{
  value.name
}
              </RadixDropdownMenu.Item>
            })

          }

          {/* <RadixDropdownMenu.Item className="dropdown-item">
            New Tab <div className="right-slot">⌘ N</div>
          </RadixDropdownMenu.Item>
          <RadixDropdownMenu.Item className="dropdown-item">
            New Window <div className="right-slot">⌘ Shift N</div>
          </RadixDropdownMenu.Item>
          <RadixDropdownMenu.Separator className="dropdown-separator" />
          <RadixDropdownMenu.Item className="dropdown-item">
            More tools…
          </RadixDropdownMenu.Item> */}

        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
}

export function AdminDropdown({
  choices,
  identifier,
  onSelected,
  selected = "asc",
  icon
}) {

 


    const listContext = useContext(AdminListViewContext);
  const loading = !listContext.initialized;
  
   const [opened, setOpened] = useState(false); const ctx = new
      createOrUseModal("0"); const selectedChoice = choices[selected];

      // console.log("jldfjks ",selectedChoice);
       return <DropDown 
       onSelected={(v)=>{

                              onSelected(v);

       }}
       choices = {choices} triggerIcon = {icon} trigger={selectedChoice.name}/>
  return (
    <ShimmerWrapper loading={loading} width="100px" height="15px">
      <div
        onClick={() => {
          ctx.open(
            <div class="flex flex-col gap-[10px]">
              {Object.entries(choices).map((choice) => {
                // const choice = m[0];

                const v = choice[1];

                return (
                  <div
                    onClick={() => {
                      onSelected(v.value);
                      ctx.pop();
                    }}
                    class="flex h-[60px]  w-full text-black hover:bg-neutral-100 items-center px-[20px] cursor-pointer"
                  >
                    <span class="sub-1">{v.name}</span>
                  </div>
                );
              })}
            </div>,
            identifier,
          );
        }}
        class="flex  relative bg-neutral-100 px-5 w-auto h-auto cursor-pointer"
      >
        <div class="flex  h-auto w-full text-black">
          <span class="sub-1">{selectedChoice.name}</span>
        </div>

        {opened && (
          <div class="  ">
            {choices.map((choice, i) => {
              return (
                <div class="flex h-auto w-full text-black ">
                  <span class="sub-1">{choice.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </ShimmerWrapper>
  );
}
