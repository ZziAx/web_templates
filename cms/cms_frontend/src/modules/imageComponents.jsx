import * as Iconsax from "iconsax-reactjs";
import Skeleton from "react-loading-skeleton";

export function ImageComponent({ loading, image, height="100%",width = "100%" }) {
  const parrentclassName =
    "flex  overflow-hidden right-0 bg-red-200 aspect-[1.0]  primary-shadow rounded-2xl";

  const className =
    "flex overflow-hidden aspect-[1.0] bg-light-100 flex-1 primary-shadow flex-1 rounded-2xl items-center justify-center";
  
    if (loading) {
    return (
      <Skeleton
        // height={width}
        customClassName={parrentclassName}
        className={className}
        style={{
          borderRadius: "20px",

          height: height,
        }}
      />
    );
  }

  return (
    <div
      style={{
        height: height,
      }}
      class={parrentclassName}
    >
      <div class={className}>
        {image == "" || image == undefined ? (
          <Iconsax.Image />
        ) : (
          <img src={image} />
        )}
      </div>
    </div>
  );
}
