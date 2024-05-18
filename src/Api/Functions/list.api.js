import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const AddlistNow = async () => {
  try {
    const response = await axiosInstance.post(endpoints.cms.list);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
