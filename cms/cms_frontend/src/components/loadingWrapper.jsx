import { useEffect, useState } from "react";
import useElement from "../modules/hooks/useElement";
import useOverlay from "../modules/hooks/useOverlay";

function LoadingWrapper(props) {
  const { isUploading = false, uploadProgress = 0, children } = props;

  const LoadingComponent = ({ isUploading, uploadProgress }) =>
    isUploading && (
      <div class=" t-0 l-0  items-end justify-end insets-0   w-full h-full z-10001">
        <div class="flex flex-col  h-full w-full items-end justify-end">
          <div class="p-5">
            <div class="flex py-2 p-5 items-center justify-center  cursor-pointer ">
              <span class="text-body-3 text-black">{ uploadProgress==1?"تکمیل شد": "درحال ارسال ..."}</span>
            </div>
          </div>

          <div class=" flex   w-full h-[10px] bg-[rgba(0,0,0,0.2)]">
            <div
              style={{
                width: `${uploadProgress * 100}%`,
              }}
              class={`flex  h-full normal-transition  ${uploadProgress<1.0?"bg-primary-400":"bg-green-400"}`}
            />
          </div>
        </div>
      </div>
    );

  if (children == undefined || children == null) {
    return (
      <LoadingComponent
        isUploading={isUploading}
        uploadProgress={uploadProgress}
      />
    );
  }

  return (
    <div {...props} class="flex flex-1  flex-col bg-black">
      {props.children}

{
  isUploading &&
  <div class="absolute flex w-full items-end justify-end insets-0 b-0 h-full">
        <div class="flex  flex-1 h-auto bg-white ">
  <LoadingComponent
          isUploading={isUploading}
          uploadProgress={uploadProgress}
        />
      
      </div>
      </div>
}

    </div>
  );
}

export default LoadingWrapper;
