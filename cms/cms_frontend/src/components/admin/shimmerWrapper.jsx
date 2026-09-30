import Skeleton from "react-loading-skeleton";

export function ShimmerWrapper(props) {
    var _className = "flex w-full h-full";
  const {children,loading=false,circle=false,width = "100%",height = "100%"} =  props ;

  if(circle){
    _className+=" rounded-full overflow-hidden"
  }
  if (!loading)return <div>{children}</div>

  return (
    <div 
    style={{
        width:width,
        height:height
    }}
    class="flex">

    
    <Skeleton
  
      containerClassName={_className}
      className={_className}

      styleProp={{
        borderRadius: "20px",
        backgroundColor:"red"
      }}
    >
        {children}
        </Skeleton>
        </div>
  );
}
