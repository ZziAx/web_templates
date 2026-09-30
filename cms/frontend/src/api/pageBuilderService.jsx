import useApiCall from "../modules/hooks/useApiCall";
import api from "./axios";

const endpoint = "pages"; // subpath

export const deletePage = async (id) => {
  const apiCall = useApiCall({ endpoint: `${endpoint}/delete` });
  const res = await apiCall.post({ data: { id: id } });
  return res;
};
export const addPage = async ({ builder, onUploadProgress }) => {
  const { media, name, uri, elements, title } = builder;
  const payload = {
    name: name,
    title: title,
    uri: uri,
    elements: JSON.stringify(elements),
  };
  const formData = new FormData();
  var ids = [];
  Object.entries(media).forEach((m) => {
    const id = m[0];
    const file = m[1];
    formData.append("images", file, file.name); // 'file.name' is optional but good practice
    ids.push(id);
  });

  formData.append("ids", JSON.stringify(ids));
  // console.log(

  Object.entries(payload).forEach((m) => {
    const k = m[0];
    const v = m[1];
    formData.append(k, v); // 'file.name' is optional but good practice
  });

  // console.log(formData.);

  const res = await api.post(`${endpoint}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (p) => onUploadProgress(p),
  });

  return res;
};

export const getElementTypes = async () => {
  const apiCall = useApiCall({ endpoint: `${endpoint}/element/types` });
  const res = await apiCall.get({});
  return res;
};


export const getPages = async () => {
  const apiCall = useApiCall({ endpoint: `${endpoint}/` });
  const res = await apiCall.get({});
  return res;
};
