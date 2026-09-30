// import { useCallback, useContext, useEffect, useMemo, useState } from "react";
// import {
//   AdminStatusCell,
//   AdminTextCell,
//   AdminTextImageCell,
// } from "./admin/adminCells";
// import { deleteProducts } from "../api/productService";
// import * as Iconsax from "iconsax-reactjs";
// import { useNavigate } from "react-router-dom";
// import { TableListTile } from "./tableListTile";
// import ContentLoader from "react-content-loader";

// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { Sub } from "./admin/text/sub";
// import { AdminListViewContext } from "../core/admin-panel";
// import Modal from 'react-modal';
// import { Dialog } from "./admin/modals/dialog";
// import { RemoveDialog } from "./admin/modals/removeDialog";
import {
  AdminStatusCell,
  AdminTextCell,
  AdminTextImageCell,
  AdminPriceCell,
} from "./admin/adminCells";
export const cellWidth = "200px";
export const cellHeight = "80px";
export const headerHeight = "50px";
export const counterWidth = "50px";

export const sharedColor = "rgba(20,20,200,0.3)";
export const headColor = "rgba(20,20,200,0.9)";

export const rowColor = "rgba(20,20,200,0.1)";
export const colColor = "rgba(20,20,200,0.1)";

// export function DataSheet(props) {
//   const cols = props.cols;
//   const _rows = props.rows;

//   const tableRef = props.tableRef;
//   const lazyLoading = props.lazyLoading;

//   // const [_rows, setRows] = useState(Object.assign([], rows));

//   // useEffect(()=>{
//   //   setRows(rows);
//   // },rows);
//   // useMemo(()=>{
//   //   setRows(rows);

//   // },[rows])

//   const vertSeprator = props.vertSeprator;
//   const hrSeprator = props.hrSeprator;
//   const onUpdate = props.onUpdate;
//   const LazyLoadingComponent = null;

//   const { selectedRows, selectRows } = props;

//   const [selectedCols, selectCols] = useState({});

//   // useState({})

//   return (
//     <div class="relative flex  w-full h-full overflow-hidden border-1 border-neutral-100 shadow-sm justify-center   rounded-[12px]">
//       <DataCols
//         selectCols={selectCols}
//         selectedCols={selectedCols}
//         cols={cols}
//         vertSeprator={vertSeprator}
//       />

//       <DataRows
//         tableRef={tableRef}
//         rows={_rows}
//         // setRows={setRows}
//         setRows={(v) => {}}
//         lazyLoading={lazyLoading}
//         selectedCols={selectedCols}
//         cols={cols}
//         hrSeprator={hrSeprator}
//         onUpdate={onUpdate}
//         LazyLoadingComponent={LazyLoadingComponent}
//         selectedRows={selectedRows}
//         selectRows={selectRows}
//       />
//     </div>
//   );
// }

// export function DataCols({
//   cols = {},
//   vertSeprator = false,
//   selectedCols,
//   selectCols,
// }) {
//   const listContext = useContext(AdminListViewContext);
//   const loading = !listContext.initialized;
//   return (
//     <div class="flex w-full">
//       <div class="absolute top-0 w-full h-[50px] bg-light-100 border-b-[0.5px] border-neutral-200 " />

//       <div
//         style={{
//           marginInline: counterWidth,
//           width: `calc(100% - ${cellWidth})`,
//         }}
//         class={`flex h-full  absolute`}
//       >
//         <div class="flex  flex-row  flex-1  ">
//           {Object.keys(cols).map((key, index) => {
//             const col = cols[key];
//             const colSelcted = selectedCols[index];

//             return (
//               <div
//                 key={index}
//                 style={{
//                   width: col?.width ?? cellWidth,
//                 }}
//                 class="flex h-screen"
//               >
//                 {vertSeprator ? (
//                   <div class="border-l-1 translate-x-[20px] border-blue-500 h-full z-0" />
//                 ) : (
//                   <div />
//                 )}
//                 <div
//                   style={{
//                     height: headerHeight,
//                     backgroundColor: colSelcted ? headColor : "",
//                     color: colSelcted ? "white" : "black",
//                   }}
//                   onClick={() => {
//                     selectCols({
//                       ...selectedCols,
//                       [index]: !selectedCols[index],
//                     });
//                   }}
//                   class={`relative flex justify-start items-center font-iranyekan  font-[600] text-[15px] cursor-pointer flex-1   z-1 px-[20px] `}
//                 >
//                   <Sub loading={loading} value={col.title} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export function DataRows({
//   rows = [],
//   cols = {},
//   setRows,
//   hrSeprator = false,
//   onUpdate,
//   selectedRows,
//   selectRows,
//   selectedCols,
//   tableRef,
//   LazyLoadingComponent,
//   lazyLoading,
// }) {
//   if (rows.length == 1) {
//     console.log(rows);
//   }

//   const listContext = useContext(AdminListViewContext);
//   const loading = !listContext.initialized;

//   const [isActive, setActive] = useState(false);
//   const [focusedItem, setFocusedItem] = useState(-1);
//   const [activeOption, setActiveOption] = useState(-1);

//   return (
//     <div class="flex absolute w-full h-full  z-0">
//       <div
//         style={{

//           marginTop: headerHeight,
//           height: `calc(100% - ${headerHeight})`,

//           // width: cellWidth,
//         }}
//         class={`flex flex-col w-full absolute`}
//       >
//         <div
//           ref={tableRef}
//           className="flex
//         flex-col h-full w-full justify-start items-start overflow-auto "
//         >
//           {rows.map((row, index) => {
//             const checked = selectedRows[row.id] == true;
//             const isOptionActive = activeOption == row.id;

//             return (
// <TableListTile
//   cols={cols}
//   id={row.id}
//   index={index}
//   checked={checked}
//   selectRows={selectRows}
//   selectedRows={selectedRows}
//   selectedCols={selectedCols}
//   row={row}
//   isOptionActive={isOptionActive}
//   isActive={isActive}
//   setActive={setActive}
//   focused={focusedItem == row.id}
//   setFocusedItem={setFocusedItem}
//   activeOption={activeOption}
//   setActiveOption={setActiveOption}
// />
//             );
//           })}
//         </div>

//       </div>
//     </div>
//   );
// }

// src/components/SimpleTable.jsx
import { useResponsive } from "@shared/responsiveProvider";

import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";
import { useEffect } from "react";
import { CheckBox, OptionBox, TableListTile, useListOptions } from "./tableListTile";

export const peopleData = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 30 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 25 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 35 },
];
// Define your columns
const columns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (props) => props.getValue(),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (props) => props.getValue(),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: (props) => {
      return <div class="bg-red-200">{props.getValue()}</div>;
    },
  },
];

export function DataSheet(props) {

  const { options } = useListOptions();
  // var [selectedRows,selectRows] = useState({});

  var {selectedRows,selectRows} = props;
  const [table, setTable] = useState({
    cols: [],
    rows: [],
  });

  const { cols, rows = [], tableRef } = props;
    var tableInstance;

  // console.log("ref is ",tableRef);
  // useEffect(()=>{
  //   const {selectRows} = props;
  //   selectRows(selectedRows);

  // },[selectedRows]);
  useEffect(() => {
    // console.log("rweio ",tableRef.current.offsetHeight);
    // console.log(rows);
    var _rows = [];
    var _columns = [];
    // console.log("columne is ",cols);
    Object.entries(cols).forEach((c) => {
      const _name = c[0];
      const _col = c[1];

      _columns.push({
        accessorKey: _name,
        header: () => {
          return (
            <div class="flex">
              <span class="text-right !text-[13px]">{_col.title}</span>
            </div>
          );
        },
        cell: (props) => {
          const row = props.getValue();
          var Cell;

          switch (_col.component) {
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

          return <Cell loading={false} isActive={false} value={row} />;
        },
      });

      //  _columns.push({
      //    accessorKey: "options",
      //   header: 'options',

      // });

      // [].reduce((c)=>(),[])
      // setColumns(_columns);
    });

    _columns = [
      
      {accessorKey:"checkbox",
header:"",
cell:(props)=>{
        const {id} = props.getValue();

        

  return <CheckBox checked={selectedRows[id]} loading={false} setChecked={(selected) => {
   
                const _selectedRows = Object.assign({}, selectedRows, {
                  [id]: selected,
                });
                selectedRows = _selectedRows;
                selectRows(_selectedRows);
              
              }}/>
}

      },
      ..._columns,{
      accessorKey: "options",
      header: '',
      cell: (props) => {
        const id = props.getValue()[1];

        return (
          <div class="flex w-auto flex-row gap-4 h-[50px] justify-center items-center flex-row">
            {options.map((v, i) => (
              <OptionBox
                loading={true}
                icon={v.icon}
                onClick={v.onClick}
                id={id}
              />
            ))}
          </div>
        );
      },
    }]
 

    var data = rows.map((rMap) => Object.entries(rMap));

    data.forEach((v) => {
      var m = {};

      v.forEach((k) => {
        m[k[0]] = k[1];
      });

      m["options"] = ["id", m.id];
      m["checkbox"] = {
        id:m.id,
        selectedRows:selectedRows,
        selectRows:selectRows
      };


      _rows.push(m);
    });
    setTable({
      cols: _columns,
      rows: _rows,
    });


  }, [props.rows.length]);

   tableInstance = useReactTable({
    data: table.rows, // Your data
    columns: table.cols, // Your column definitions
    getCoreRowModel: getCoreRowModel(), // Essential for basic table functionality
  });
  
  const { getHeaderGroups, getRowModel } = tableInstance;

  const width = `${window.outerWidth - 40}px`;

  // Destructure methods to render table parts
  return (
    <div
    ref={tableRef}
      style={{
        maxWidth: width,
        
      }}
      className=" overflow-auto  flex max-h-[750px] border-[10px] border-white shadow-xl rounded-xl"
    >
      <table className="min-w-full rounded-xl ">
        <thead className="top-[-1px] z-1 h-[50px]  bg-[rgba(250,250,250,1.0)] sticky ">
          {/* Render Table Headers */}
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  className="px-6 py-3 text-left text-xs  font-medium text-gray-500 uppercase tracking-wider"
                >
                  {/* Use flexRender for header content */}
                  {flexRender(
                    column.column.columnDef.header,
                    column.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody  className="w-full divide-y divide-neutral-200   ">
          {/* Render Table Rows */}
          {
         
          getRowModel().rows.map((row, i) => (
            <tr
              style={{
                backgroundColor:
                  i % 2 != 0 ? "var(--color-light-100)" : "white",
              }}
              key={row.id}
            >
              {/* Render Cells within each row */}
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap   text-sm text-gray-500"
                >
                  {/* Use flexRender for cell content */}
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
