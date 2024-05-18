import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const Remove = async (formdata) => {
  try {
    const response = await axiosInstance.post(endpoints.cms.remove,formdata);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
