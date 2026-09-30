import { useForm } from "react-hook-form";
import useUploadVariables from "../modules/hooks/useUploadVariables";
import LoadingWrapper from "../components/loadingWrapper";
import { useState } from "react";
import { Dialog } from "../components/admin/modals/dialog";

function withLoadingDialog(WrappedComponent) {
  return function DialogWrapper(props) {
      const uploadVariables =
      useUploadVariables();

      // console.log("isUploading ",uploadVariables.isUploading);
      // console.log("wrapped ",WrappedComponent);
    return <div class="flex h-full w-full ">
    <Dialog
    key="_Dialog"
          // title="آیا مطمعن هستید؟"
          // subtitle="در سورت حذف بازیابی ممکن نیست"
       
          open={uploadVariables.isUploading}
       
          contentStyle={{
            backgroundColor:"transparent", 
            border:"none",
          }}
          // footer={<Dialog onCanceled={()=>{}} onConfirm={async ()=>{}} />}
        >
          {/* isUploading={uploadVariables.isUploading} */}
          <LoadingWrapper  isUploading={uploadVariables.isUploading} uploadProgress={uploadVariables.uploadProgress}/>
        </Dialog>


        <WrappedComponent {...props} {...uploadVariables} />

    </div>;
  };
}

export default withLoadingDialog;