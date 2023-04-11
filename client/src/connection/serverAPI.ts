import axios, { AxiosStatic } from "axios";

export const serverAPI = axios.create({
  baseURL: "http://localhost:8000/api/",
});
