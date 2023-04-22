import axios, { AxiosResponse } from "axios";
import { Category, Questions } from "../types";

const baseUrl = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const Apis = {
  getCategory: async (url: string) => {
    const { data } = await instance.get<Category[]>(url);
    return data;
  },

  getSubCategory: async (url: string) => {
    const { data } = await instance.get<Category[]>(url);
    return data;
  },

  getQuestion: async (url: string) => {
    const { data } = await instance.get<Questions[]>(url);
    return data;
  },
};
