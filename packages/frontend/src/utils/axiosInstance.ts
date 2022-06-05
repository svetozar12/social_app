import axios from "axios";
import { constants } from "../constant";
const api = axios.create({
  baseURL: constants.URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
