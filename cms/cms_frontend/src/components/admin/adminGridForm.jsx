import { useContext } from "react";
import { AdminListViewContext } from "../../core/admin-panel";

export function AdminGridCell(props) {
  return <div class="flex flex-1">{props.children}</div>;
}

export function AdminGridCol({
  flex = 1,
  gap = 32,
  padding = 0,
  children = [],
  backgroundColor="transparent",
  tw=""
}) {

  return (
    <div
      style={{
        flex: flex,
        gap: gap,
        padding: padding,
        backgroundColor:backgroundColor
      }}
      class={`flex flex-col gap-10 ${tw}`}
    >
      {children}
    </div>
  );
}

export function AdminGridRow({
  flex = 1,
  gap = 32,
  padding = 0,
  children = [],
  backgroundColor="transparent",

}) {

  return (
    <div
      style={{
        flex: flex,
        gap: gap,
        padding: padding,
        backgroundColor:backgroundColor
      }}
      class="flex flex-row gap-10 "
    >
      {children}
    </div>
  );
}

export function AdminGridForm({ 
  
    tw="rounded-xl bg-white primary-shadow border-1 border-neutral-200",
    disable = false
    ,gap = 32, padding =32,margin = 32,backgroundColor="#fafafb",formColor="white",header=undefined, children = [] }) {
  //   const { children, gap } = props;


  const listContext = useContext(AdminListViewContext);
  // const loading = !listContext.initialized??false;
  const loading = false;

  return (
    <div style={{
        padding:margin,
        backgroundColor:backgroundColor,
      pointerEvents:(loading || disable) && "none"
    }} class="flex flex-1">

    <div
      style={{
        gap: gap,
        padding: padding,
        backgroundColor:formColor
      }}
      class={"flex flex-col h-full w-full "+tw}
    >
      
      {header}

<div 
style={{
        gap: gap,
  
}}
class="flex flex-row h-full ">
      {children}

</div>


    </div>
    </div>
  );
}
