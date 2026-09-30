import useApiCall from "../modules/hooks/useApiCall";
import api, { BASE_URL } from "./axios";

const endpoint = "auth"; // subpath

export const login = async (creditionals) => {
  // const res = await api.post(`${endpoint}/login`,creditionals);
  // console.log("response ",`${BASE_URL}${endpoint}/login`);

  // return;
  const apiCall = useApiCall({ endpoint: `${endpoint}/login` });
  const result = await apiCall.post({ data: creditionals });
  return result;
};
