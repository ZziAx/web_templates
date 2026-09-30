import api from "./axios";

const endpoint = "dashboard"; // subpath

export const getDashboardData = () => api.get(`${endpoint}`);
