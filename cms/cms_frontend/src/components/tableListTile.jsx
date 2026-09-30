import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  AdminStatusCell,
  AdminTextCell,
  AdminTextImageCell,
  AdminPriceCell
} from "./admin/adminCells";
import { deleteProducts } from "../api/productService";
import * as Iconsax from "iconsax-reactjs";
import { useNavigate } from "react-router-dom";
import { headerHeight, cellHeight, rowColor, counterWidth,sharedColor,colColor,cellWidth } from "./dataSheet";
import { ShimmerWrapper } from "./admin/shimmerWrapper";
import { AdminListViewContext } from "../core/admin-panel";



export function useListOptions(){
  const listContext = useContext(AdminListViewContext);
  const {onItemsRemoved} = listContext;
  const navigateTo = useNavigate();

   const options = [
    {
      icon: Iconsax.Trash,
      onClick: async (id) => {
        onItemsRemoved([id]);
        // await deleteProducts([id]);
      },
    },

    {
      icon: Iconsax.Edit,
      onClick: async (id) => {
        navigateTo("./create", {
          replace: true,
          relative: true,
          state: {
            productId: id,
          },
        });
      },
    },

    {
      icon: Iconsax.Eye,
      onClick: () => null,
    },
  ];
  

  return {options};

}

// {options.map((v, i) => (
//               <OptionBox loading = {true} icon={v.icon} onClick={v.onClick} id={row.id} />
//             ))}
export function TableListTile({id, index,row,cols,isActive,setActive,selectedCols,selectedRows,selectRows,checked,setFocusedItem,setActiveOption,focused,isOptionActive }) {
  
  const listContext = useContext(AdminListViewContext);

  const {onItemsRemoved} = listContext;
  
  const loading = !listContext.initialized;

  const navigateTo = useNavigate();


  const options = [
    {
      icon: Iconsax.Trash,
      onClick: async (id) => {
        onItemsRemoved([id]);
        // await deleteProducts([id]);
      },
    },

    {
      icon: Iconsax.Edit,
      onClick: async (id) => {
        navigateTo("./create", {
          replace: true,
          relative: true,
          state: {
            productId: id,
          },
        });
      },
    },

    {
      icon: Iconsax.Eye,
      onClick: () => null,
    },
  ];

  
  return (
    <div
      id={id}
      index={index}
      onMouseEnter={() => setFocusedItem(id)}
      onMouseLeave={() => setFocusedItem(-1)}
      style={{
        backgroundColor: index % 2 == 0 ? "white" : "var(--color-light-100)",
      }}
      class={`flex relative  flex-col w-full`}
    >
      <div
        style={{
          height: cellHeight,
          backgroundColor: checked ? rowColor : "",
        }}
        class="flex flex-row  hover:bg-neutral-100 w-full cursor-pointer "
      >
        <div
          key={index}
          style={{
            height: cellHeight,
            width: counterWidth,
          }}
          class="flex text-neutral-700 justify-center  items-center "
        >
          <div
          style={{
            width: counterWidth,
            height:"full"
          }}
            class={`flex normal-transition  items-center justify-center ${checked || focused?"opacity-[1.0]": "opacity-[0.3]"}`}
          >
            <CheckBox

              checked={checked}
              loading={loading}
              setChecked={(selected) => {
                const _selectedRows = Object.assign({}, selectedRows, {
                  [row.id]: selected,
                });
                selectRows(_selectedRows);
              }}
            />

          </div>
        
        </div>

          {Object.keys(cols).map((key, i) => {
            const col = cols[key];
            const colSelcted = selectedCols[i];
            var Cell;

            switch (col.component) {
              case 0:
                Cell = AdminTextImageCell;
                break;
              case 1:
                Cell = AdminTextCell;
                break;
              case 2:
                Cell = AdminStatusCell;
                break;
                 case 3:
                Cell = AdminPriceCell;
                break;
            }

            // if(col.component!=0 && col.component!=1)return;
            // console.log(col?.width);

            const c = 200;
            console.log()
            return (
              <div
                key={i}
                style={{
                  backgroundColor: colSelcted
                    ? checked
                      ? sharedColor
                      : colColor
                    : "",
                  height: cellHeight,
                  // width: 240,

                  width: "200px",
                }}
                class={"flex text-[15px]  w-[200px]  text-black items-center" }
              >
                <Cell loading={loading} isActive={isActive} value={row[key]} />
                
              </div>
            );
          })}



        <div
          onMouseEnter={() => setActiveOption(row.id)}
          onMouseLeave={() => setActiveOption(-1)}
          style={{
            opacity: isOptionActive
              ? "1.0"
              : !checked && (focused ? "0.7" : "0.3"),
          }}
          class="flex normal-transition px-[20px] justify-center items-center "
        >
          <div class="flex w-auto flex-row gap-4 h-[50px] justify-center items-center flex-row">
            {options.map((v, i) => (
              <OptionBox loading = {true} icon={v.icon} onClick={v.onClick} id={row.id} />
            ))}
          </div>
        </div> 
        </div>

        
      {/* </div> */}
    </div>
  );
}



export function CheckBox(props) {
  const { checked, setChecked,loading  = true} = props;

  // https://hooshang.ai/
  if (loading){
      return <div class="flex w-[24px] h-[24px]"><ShimmerWrapper circle loading={loading}>
    </ShimmerWrapper>
    </div>

  }

  // const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked); // update state dynamically
  };

  return (
    <label class=" flex relative w-6 h-6 items-center hover:cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        // className="hidden"

        style={{
          backgroundColor: checked ? "var(--color-primary-400)" : "transparent",
        }}
        class="
        absolute flex 
        w-full h-full hidden"
      />

      <span
        className={`
          w-full h-full flex items-center justify-center hover:border-primary-400 border-1 border-neutral-500   rounded-full z-0
          ${checked ? "bg-primary-400" : "bg-white"}
        `}
      >
        {checked && (
          <svg
            className="flex w-6 h-6  text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </span>
    </label>
  );
}

export function OptionBox({ icon, onClick, id }) {
  const listContext = useContext(AdminListViewContext);
  const loading = !listContext.initialized;
  // console.log(id);
  const Icon = icon;
  return (
    <div
      onClick={async () => await onClick(id)}
      class="flex text-neutral-400 hover:text-primary-400 primary-shadow justify-center items-center border-[1px] hover:border-primary-400 rounded-[8px] bg-white h-[35px] aspect-[1.0]"
    >

<ShimmerWrapper loading = {loading}>
      <Icon class=" " />

</ShimmerWrapper>
    </div>
  );
}