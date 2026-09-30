import { useState } from "react";

function useUploadVariables(classComponent) {
  if (classComponent == undefined || classComponent == null) {
    const [isUploading, setUploadState] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    return {
      isUploading,
      setUploadState,
      uploadProgress,
      setUploadProgress,
    };
  } else {
    // console.log("state is ",classComponent.state);
    if("isUploading" in classComponent.state) return {...classComponent.state};

    classComponent.state = {
      ...classComponent.state,
      isUploading: false,
      setUploadState: (state) =>
        classComponent.setState({ isUploading: state }),
      uploadProgress: 0,
      setUploadProgress: (progress) =>
        classComponent.setState({ uploadProgress: progress }),
    };
    return {
      ...classComponent.state,
    };
  }
}

export default useUploadVariables;
