import useApiCall from "../modules/hooks/useApiCall";
import api from "./axios";

const endpoint = "products";

export const uploadFiles = async (files) => {
  const formData = new FormData();
  files.forEach((img) => {
    formData.append("images", img, img.name); // 'file.name' is optional but good practice
  });

  const res = await api.post(endpoint, formData, {
    //  ,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      // Optional: Track upload progress
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total,
      );
      // console.log(`Upload Progress: ${percentCompleted}%`);
    },
  });

  return res;
};

export const uploadProducts = async ({payload,onUploadProgress}) => {
  const formData = new FormData();

  const { images } = payload;

  Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
  });



  images.forEach((img, index) => {
    formData.append("images", img, img.name); // 'file.name' is optional but good practice
  });

  return await api.post(endpoint, formData,{
    headers:{
      "Content-Type":"multipart/form-data"
    },
    onUploadProgress:(p)=>onUploadProgress(p)
  });
};

export const editProduct =async (id, product) =>{
  // api.patch(`${endpoint}/${id}/edit`, product);


   const apiCall = useApiCall({endpoint:`${endpoint}/${id}/edit`});
  const result = await apiCall.patch({data:product});
  return result;

}

export const deleteProducts = async (ids) =>{
    const apiCall = useApiCall({endpoint:`${endpoint}/delete`});
  const result = await apiCall.post({data:{
    ids: ids == "list" ? ids : ids
  }});
  return result;
}

export const getProducts = async ({params,args}) => {
  const apiCall = useApiCall({endpoint:`${endpoint}/`});
  const result = await apiCall.get({params:params,data:args});
  return result;
};

export const getProductInfo = async (id) => {
  const apiCall = useApiCall({endpoint:`${endpoint}/${id}/info`});
  const result = await apiCall.get({});
  return result;
};

