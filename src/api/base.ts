import axios from "axios";

axios.defaults.withCredentials = true;

axios.defaults.baseURL = "http://localhost:3005/api";

export const apiClient = axios;
