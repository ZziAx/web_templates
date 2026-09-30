import Skeleton from "react-loading-skeleton";
// import FitText from 'react-fittext'; // Or similar package name

export function Sub({ loading, value, flex = true,fontSize = undefined,className = "",textClassName}) {
    const _className = "flex  items-center justify-center overflow-hidden" + className +" "+(flex&&"flex-1");
  if (loading) {
    return (
      <Skeleton
        height="10px"
        containerClassName={_className}
        styles={{
          borderRadius: "20px",
          direction:"rtl"
        }}
      />
    );
  }
  // TextareaAutosize

  return (
    <div class={_className}>
      
           
      <span className = {textClassName} style={{
        fontSize:fontSize,
      }}>{value}</span>


    </div>
  );
}
