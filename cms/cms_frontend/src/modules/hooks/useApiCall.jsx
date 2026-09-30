import axios from "axios";
import api, { BASE_URL } from "../../api/axios";

function useApiCall({ endpoint, onError }) {
  return {
    post: async ({ data, params }) => {
      try {
        const res = await api.post(endpoint, {
          ...data,
          params: params,
        });
        return res;
      } catch (e) {
        onError ?? onError(e);
      }
    },

    get: async ({ data = {}, params = {} }) => {
      try {
        const res = await api.get(endpoint, { params: params, ...data });
        return res;
      } catch (e) {
        onError && onError(e);
      }
    },

    patch: async ({ data }) => {
      try {
        const res = await api.patch(endpoint, data);
        return res;
      } catch (e) {
        onError ?? onError(e);
      }
    },
  };
}

export default useApiCall;
