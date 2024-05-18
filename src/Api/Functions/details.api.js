import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const details = async (id)=> {
  try {
    const url = `${endpoints.cms.details}/${id}`;

    const response = await axiosInstance.get(url);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};


