import api from "./axios";

const endpoint = "users"; // subpath



export const getUsers = (payload) => api.get(endpoint, payload);
